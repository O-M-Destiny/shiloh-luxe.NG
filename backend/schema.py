from pydantic import BaseModel, EmailStr, validator
from typing import List
from datetime import datetime
import re
import enum



class ServiceEnum(str, enum.Enum):
    Microblading = "Microblading"
    Brow_tint = "Brow Tint"
    Ombre_brows = "Ombre Brows"
    Touch_up = "Touch-Up"

class BookingStatusEnum(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class BookingCreate(BaseModel):
    fullname: str
    phone_number: str
    email: EmailStr
    service: ServiceEnum
    appointment_time: datetime
    
    @validator("appointment_time")
    def appoitment_must_be_present_or_future(cls, value):
        now = datetime.now(value.tzinfo or None).date()  # only the date part
        appointment_date = value.date()

        if appointment_date < now:
            raise ValueError("You cannot book a session in the past.")
    
        return value
    
    @validator("phone_number")
    def validate_phone_number(cls, v):
        # Accepts: +2348012345678 or 08012345678 (Nigerian format example)
        phone_pattern = re.compile(r"^(?:\+?\d{10,15})$")
        if not phone_pattern.match(v):
            raise ValueError("Invalid phone number format. Must be 10-15 digits, optionally starting with +.")
        return v


class BookingsOut(BaseModel):
    id: int
    fullname: str
    phone_number: str
    email: EmailStr
    service: ServiceEnum
    appointment_time: datetime
    created_at: datetime
    status: BookingStatusEnum

    class Config:
        from_attributes = True

class BookingStatusUpdate(BaseModel):
    status: BookingStatusEnum

    class Config:
        from_attributes = True


class Admin(BaseModel):
    email: EmailStr

class AdminCreate(Admin):
    hashed_password: str

class AdminOut(AdminCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


# Email Schema

class EmailSchema(BaseModel):
    email: List[EmailStr]


class EmailContent(BaseModel):
    subject:str
    message:str