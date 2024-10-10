from fastapi import FastAPI
import auth

app = FastAPI()

# Include auth routes
app.include_router(auth.router)
