from dotenv import load_dotenv # type: ignore
from flask_cors import CORS # type: ignore
from flask import Flask # type: ignore
from .routes.index import main
import os

load_dotenv()

def create_app():
    API_KEY = os.environ["API_KEY"]

    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(main, url_prefix="/")

    return app