# email_config.py
from fastapi_mail import ConnectionConfig
from decouple import config

conf = ConnectionConfig(
    MAIL_USERNAME = config("EMAIL"),
    MAIL_PASSWORD = config("PASS"),
    MAIL_FROM = config("EMAIL"),
    MAIL_PORT = 465,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_STARTTLS = False,
    MAIL_SSL_TLS = True,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)
