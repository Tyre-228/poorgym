from app.config import create_app


app = create_app()

app.run(host="0.0.0.0", port=5001, debug=False)