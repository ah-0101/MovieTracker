from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Favorite, Movie, db

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/', methods=['POST'])
def post_favorite():
    data = request.get_json()
  
    result = Favorite(
        movie_id=data['movie_id'],
        user_id=data['user_id']
    )
    db.session.add(result)
    db.session.commit()
    return {"result": result.to_dict()}    

@favorite_routes.route('/')
def movie_favorite():
    favorites = Favorite.query.filter(Favorite.user_id==current_user.id).all()
    return jsonify([favorite.to_dict() for favorite in favorites])


@favorite_routes.route('/moviefavorite/')
def get_all_movie_favorite():
    favorites = Movie.query.join(Favorite).filter(current_user.id == Favorite.user_id).all()
    return jsonify([favorite.to_dict() for favorite in favorites])

@favorite_routes.route('/favmovie/<id>/')
def get_one_movie_favorite(id):
    favorites = Movie.query.get(id)
    return jsonify(favorites.to_dict()) 


@favorite_routes.route('/<id>/', methods=['DELETE'])
def remove_favorite(id):
    removed = Favorite.query.filter(Favorite.movie_id == id).delete()
    # db.session.execute(favorites.to_dict())
    db.session.commit()
    # return favorites.to_dict()
    return "Successfully deleted"
