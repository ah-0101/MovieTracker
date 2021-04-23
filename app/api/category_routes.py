from flask import Blueprint, jsonify
from app.models import Category, Movie

category_routes = Blueprint('categories', __name__)

@category_routes.route('/')
def category():
    categories = Movie.query.filter(Movie.category_id == 1).all()
    return {"categories": [category.to_dict() for category in categories ]}



