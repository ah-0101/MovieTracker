from flask import Blueprint, jsonify, request
from app.models import Favorite

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/<int:id>')
def movie_favorite(id):
    favorites = Favorite.query.filter_by(user_id=id).all()
    return jsonify({"favorite": [favorite.to_dict() for favorite in favorites]})

