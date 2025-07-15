from fastapi import APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException
from fastapi.responses import JSONResponse
from fastapi.exceptions import FastAPIError
from fastapi_mail import FastMail, MessageSchema, MessageType
from sqlalchemy.orm import Session
from typing import List

from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta

from config import SECRET_KEY,ACCESS_TOKEN_EXPIRE_MINUTES,ALGORITHM
from email_config import conf
from schema import AdminCreate, AdminOut, BookingsOut, BookingStatusUpdate,EmailContent
from models import Admin, Booking
from database import get_db



admin_router = APIRouter(prefix="/admin", tags=["Admin"])

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd.hash(password)

def verify_password(plain_password, hash_password):
    return pwd.verify(plain_password, hash_password)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/admin/login")


# Create token

def create_token(data:dict, expiry_time: datetime):
    to_encode = data.copy()
    expire = expiry_time + datetime.utcnow()
    to_encode.update({"exp":expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

@admin_router.post("/Admin_panel", status_code=201)
async def register(admin: AdminCreate, db: Session = Depends(get_db)):
    try:
        check_admin = db.query(Admin).filter(Admin.email == admin.email).first()
        if check_admin:
            raise HTTPException(status_code=409, detail=f"User already exists with the email {admin.email}")
        
        main_admin = Admin(
            email = admin.email,
            hashed_password = hash_password(admin.hashed_password),
        )

        db.add(main_admin)
        db.commit()
        db.refresh(main_admin)

        return JSONResponse(content={"Message": "User created"}, status_code=200)
    
    except Exception as e:
        raise HTTPException(detail=str(e), status_code=500)
    

@admin_router.post("/login", summary="The Admin Login Route")
async def Admin_login(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    try:
        admin = db.query(Admin).filter(Admin.email == form.username).first()

        if not admin:
            raise HTTPException(detail={"message":"No user found"}, status_code=404)
        
        if not verify_password(form.password, admin.hashed_password):
            raise HTTPException(detail={"Message": "Invalid Password"}, status_code=401)
        
        access_token = create_token(data={"sub": admin.email}, expiry_time=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        raise HTTPException(detail=str(e), status_code=500)
    
async def admin_check(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> Admin:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")

        if not email:
            raise HTTPException(status_code=401, detail="Invalid token: no email in payload")

        admin = db.query(Admin).filter(Admin.email == email).first()

        if admin is None:
            raise HTTPException(status_code=401, detail="Admin not found")

        return admin

    except JWTError as e:
        print("JWT Error:", e)
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    except Exception as e:
        print("Unexpected Error:", e)
        raise HTTPException(status_code=500, detail="Server error during token validation")

# Admin Role 1 ---- > See All Bookings

@admin_router.get("/All_bookings", response_model=List[BookingsOut])
async def get_all_bookings(db: Session = Depends(get_db), _:Admin = Depends(admin_check)):
    try:
        bookings = db.query(Booking).order_by(Booking.created_at.desc()).all()
        return bookings
    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail="Server Error: " + str(e))




# Admin Role 2 ---- > Delete Booking
@admin_router.delete("/Delete_Booking/{id}")
async def delete_booking(id: int, db: Session = Depends(get_db), _:Admin = Depends(admin_check)):
    try:
        delete_info = db.query(Booking).filter(Booking.id == id).first()
        if not delete_info:
            return JSONResponse(content={"Message": "Booking not found"}, status_code=404)
        else:
            db.delete(delete_info)
            db.commit()

            return JSONResponse(content={"Message": "Booking Deleted"}, status_code=200)
    except FastAPIError as e:
        raise HTTPException(detail={"Message": str(e)}, status_code=500)
    
# Admin Role 3 ---- > Changing Status 
@admin_router.patch("/status_update/{booking_id}")
async def status_update(booking_id: int, update_data: BookingStatusUpdate, db: Session = Depends(get_db), _: Admin = Depends(admin_check)):
    try:
        booking = db.query(Booking).filter(Booking.id == booking_id).first()

        if not booking:
            return JSONResponse(content={"message": "No booking found "}, status_code=404)
        
        booking.status = update_data.status
        db.commit()
        db.refresh(booking)

        return JSONResponse(content={
        "message": "Booking status updated successfully",
        "booking_id": booking.id,
        "new_status": booking.status
        }, status_code=200)
    except Exception as e:
        raise HTTPException(detail=str(e), status_code=500)
    
# Admin Role 4 ---- > Sending Email
@admin_router.post("/email/{booking_id}")
async def send_email_info(booking_id: int,content: EmailContent,db: Session = Depends(get_db), _: Admin = Depends(admin_check)):
    # Get the booking from the database
    booking = db.query(Booking).filter(Booking.id == booking_id).first()

    if not booking or not booking.email:
        raise HTTPException(status_code=404, detail="Booking email not found")

    # Email HTML content
    html = f"""
    <div style="font-family: Arial, sans-serif;">
        <h2>Shiloh Luxe</h2> 
        <p>{content.message}</p>
        <br/>
        <p>Best Regards,<br/>Shiloh Luxe</p>
    </div>
    """

    message = MessageSchema(
        subject=content.subject,
        recipients=[booking.email],
        body=html,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return JSONResponse(status_code=200, content={"message": "Email has been sent"})