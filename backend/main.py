from models import Booking, Admin
from database import Base, engine

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from bookings import bookings_router
from admin import admin_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Shiloh Luxe",
    version= "0.116.1",
    description="This is the backend for the website"
)

origins = ["https://shiloh-luxe.vercel.app", "http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


@app.get("/")
async def index():
    return {"Message": "Go to /docs for all the official documentations"}

app.include_router(bookings_router)
app.include_router(admin_router)


# {
#   "email": "shilohjoshua@microblading.com",
#   "hashed_password": "admin1234"
# }

# {
#   "email": "divine@gmail.com",
#   "hashed_password": "divine123"
# }

# {
#   "email": "shiloh@mail.com",
#   "hashed_password": "password"
# }