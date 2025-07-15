from sqlalchemy import Column, String, Integer, DateTime, func, Enum as SqlEnum
import enum

from database import Base


class ServiceEnum(str, enum.Enum):
    microblading = "Microblading"
    brow_tint = "Brow Tint"
    ombre_brows = "Ombre Brows"
    touch_up = "Touch-Up"

class BookingStatusEnum(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    fullname = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    email = Column(String, nullable=False)
    service = Column(SqlEnum(ServiceEnum), nullable=False)
    appointment_time = Column(DateTime(timezone=True), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    status = Column(SqlEnum(BookingStatusEnum), nullable=False, server_default="pending")



class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
