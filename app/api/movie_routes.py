from flask import Blueprint, jsonify
from app.models import Movie

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/')
def movies():
    movies = Movie.query.all()
    return {"movies": [movie.to_dict() for movie in movies ]}

