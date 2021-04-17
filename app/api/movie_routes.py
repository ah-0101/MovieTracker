from flask import Blueprint, jsonify
from app.models import Movie

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/<int:id>')
def movies(id):
    movies = Movie.query.get(id)
    return movies.to_dict()
# {"movies": [movie.to_dict() for movie in movies ]}
#  user = User.query.get(id)
#     return user.to_dict()

@movie_routes.route('/<id>')
def getMovieInfo(id):
    search_for_movie = Movie.query.filter(Movie.movie_name.ilike(f'%{id}%')).limit(7) #taking out the % sign will make the search only for starts with 
    return jsonify([movie.to_dict() for movie in search_for_movie])

@movie_routes.route('/category/<int:id>')
def getMovieNum(id):
    search_for_movie = Movie.query.filter(Movie.category_id == id).limit(3) 
    return jsonify([movie.to_dict() for movie in search_for_movie])

# @movie_routes.route('/movie/<int:id>')
# def getMovieInfo(id):
#     search_for_movie = Movie.query.filter(Movie.id.like(id)).all()
#     return jsonify([movie.to_dict() for movie in search_for_movie])


