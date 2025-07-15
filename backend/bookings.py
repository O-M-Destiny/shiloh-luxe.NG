from fastapi import APIRouter
from fastapi import Depends, HTTPException
from fastapi.responses import JSONResponse

from database import get_db
from sqlalchemy.orm import Session


from schema import BookingCreate, BookingStatusEnum
from models import Booking

bookings_router = APIRouter()

@bookings_router.post("/bookings", status_code=201)
async def bookings(booking:BookingCreate, db: Session = Depends(get_db)):
    try:
        booking_count = db.query(Booking).filter(Booking.email == booking.email,
                        Booking.phone_number == booking.phone_number).count()
        if booking_count >= 5:
            return JSONResponse(content={"Message": "You already booked 5 times"}, status_code=409)
        
        new_booking = Booking(
            fullname=booking.fullname,
            phone_number=booking.phone_number,
            email=booking.email,
            service=booking.service,
            appointment_time=booking.appointment_time,
            status=BookingStatusEnum.pending
        ) 

        db.add(new_booking)
        db.commit()
        db.refresh(new_booking)

        return JSONResponse(content={"message": "Bookings submitted, you will get a response from us via the email provided by you. Thank you 😊"}, status_code=200)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))