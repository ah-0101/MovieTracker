from werkzeug.security import generate_password_hash
from app.models import db, Review


def seed_reviews():
    rv1 = Review(rating=5,movie_id=1,user_id=1)




    db.session.add(rv1)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()