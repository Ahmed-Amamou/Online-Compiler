from passlib.context import CryptContext

# Hashing configuration
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    """
    Verify if the provided plain password matches the stored hashed password.
    """
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    """
    Hash the provided plain password to store securely in the database.
    """
    return pwd_context.hash(password)
