from flask import Flask, send_from_directory, jsonify, request
import os
from werkzeug.utils import secure_filename
import json

app = Flask(__name__, static_folder="../build")


# API routes
@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.json
        # In a real application, you would save this to a database
        # or send an email. For now, we'll just print it.
        print(f"Received contact form submission: {data}")

        # Here you would typically add code to send an email
        # or store the contact information in a database

        return jsonify({"success": True, "message": "Message received successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


# Sample project data API
@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = [
        {
            "id": 1,
            "title": "Neural Network Visualization",
            "description": "An interactive 3D visualization of neural networks built with Three.js and TensorFlow.js.",
            "image": "/api/placeholder/600/400",
            "tags": ["Deep Learning", "JavaScript", "Three.js", "TensorFlow"],
            "github": "https://github.com/yourusername/neural-viz",
            "demo": "https://demo-link.com",
        },
        {
            "id": 2,
            "title": "Sentiment Analysis Dashboard",
            "description": "Real-time sentiment analysis of social media data using NLP and machine learning techniques.",
            "image": "/api/placeholder/600/400",
            "tags": ["NLP", "Python", "React", "Flask"],
            "github": "https://github.com/yourusername/sentiment-dashboard",
            "demo": "https://demo-link.com",
        },
        {
            "id": 3,
            "title": "Computer Vision Object Detection",
            "description": "A mobile-friendly object detection system using a custom-trained YOLOv5 model.",
            "image": "/api/placeholder/600/400",
            "tags": ["Computer Vision", "PyTorch", "YOLO", "React Native"],
            "github": "https://github.com/yourusername/object-detection",
            "demo": "https://demo-link.com",
        },
        {
            "id": 4,
            "title": "Reinforcement Learning Game Agent",
            "description": "An AI agent trained with reinforcement learning to play classic Atari games.",
            "image": "/api/placeholder/600/400",
            "tags": ["Reinforcement Learning", "Python", "TensorFlow", "OpenAI Gym"],
            "github": "https://github.com/yourusername/rl-agent",
            "demo": "https://demo-link.com",
        },
    ]
    return jsonify(projects)


# Serve React App
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
