from flask import Blueprint, jsonify
from app.models import Category

category_routes = Blueprint('categories', __name__)

@category_routes.route('/')
def category():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories ]}
