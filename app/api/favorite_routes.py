from flask import Blueprint, jsonify, request
from app.models import Favorite,db

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/', methods=['POST'])
def post_favorite():
    data = request.get_json()
    print('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data)
    result = Favorite(
        movie_id=data['movie_id'],
        user_id=data['user_id']
    )
    db.session.add(result)
    db.session.commit()
    return {"result": result.to_dict()}    

@favorite_routes.route('/<int:id>')
def movie_favorite(id):
    favorites = Favorite.query.filter_by(user_id=id).all()
    return jsonify({"favorite": [favorite.to_dict() for favorite in favorites]})

