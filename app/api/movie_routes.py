from flask import Blueprint, jsonify
from app.models import Movie

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/')
def movies():
    movies = Movie.query.all()
    return {"movies": [movie.to_dict() for movie in movies ]}


@movie_routes.route('/<id>')
def getMovieInfo(id):
    search_for_movie = Movie.query.filter(Movie.movie_name.ilike(f'%{id}%')).all()
    return jsonify([movie.to_dict() for movie in search_for_movie])