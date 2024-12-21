from flask import Blueprint, jsonify # type: ignore


main = Blueprint("/", __name__)

@main.route("/")
def index():
    return jsonify({"data": "Hello World!"})