from flask import Blueprint, jsonify, request
from app.models import Review

reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/<int:id>/')
def movie_reviews(id):
    reviews = Review.query.filter_by(movie_id=id).all()
    return jsonify({"reviews": [review.to_dict() for review in reviews]})

