from dotenv import load_dotenv 
from flask import Flask # type: ignore
from .routes.index import main
import os

load_dotenv()

def create_app():
    API_KEY = os.environ["API_KEY"]

    app = Flask(__name__)
    app.register_blueprint(main, url_prefix="/")

    return app