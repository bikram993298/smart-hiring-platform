from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Resume(BaseModel):
    text: str

@app.post("/parse")
def parse_resume(resume: Resume):
    # TODO: integrate actual ML resume parsing
    return {"skills": ["Python", "React"], "experience": "2 years"}
