from decouple import config

# Security & Auth
SECRET_KEY: str = config("SECRET_KEY")
ALGORITHM: str = config("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES: int = config("ACCESS_TOKEN_EXPIRE_MINUTES", cast=int)

# App settings
DEBUG: bool = config("DEBUG", cast=bool)
EMAIL = config("EMAIL")
PASS = config("PASS")

# Database
DATABASE_URL: str = config("DATABASE_URL")
