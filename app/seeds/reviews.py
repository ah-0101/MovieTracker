from werkzeug.security import generate_password_hash
from app.models import db, Review


def seed_reviews():
    rv1 = Review(rating=5,movie_id=1,user_id=1)
    rv2 = Review(rating=5,movie_id=2,user_id=1)
    rv3 = Review(rating=5,movie_id=3,user_id=1)
    rv4 = Review(rating=5,movie_id=4,user_id=1)
    rv5 = Review(rating=5,movie_id=5,user_id=1)
    rv6 = Review(rating=5,movie_id=6,user_id=1)
    rv7 = Review(rating=5,movie_id=7,user_id=1)
    rv8 = Review(rating=5,movie_id=8,user_id=1)
    rv9 = Review(rating=5,movie_id=9,user_id=1)
    rv10 = Review(rating=5,movie_id=10,user_id=1)
    rv11 = Review(rating=5,movie_id=11,user_id=1)
    rv12 = Review(rating=5,movie_id=12,user_id=1)
    rv13 = Review(rating=5,movie_id=13,user_id=1)
    rv14 = Review(rating=5,movie_id=14,user_id=1)
    rv15 = Review(rating=5,movie_id=15,user_id=1)
    rv16 = Review(rating=5,movie_id=16,user_id=1)
    rv17 = Review(rating=5,movie_id=17,user_id=1)
    rv18 = Review(rating=5,movie_id=18,user_id=1)
    rv19 = Review(rating=5,movie_id=19,user_id=1)
    rv20 = Review(rating=5,movie_id=20,user_id=1)
    rv21 = Review(rating=5,movie_id=21,user_id=1)
    rv22 = Review(rating=5,movie_id=22,user_id=1)
    rv23 = Review(rating=5,movie_id=23,user_id=1)
    rv24 = Review(rating=5,movie_id=24,user_id=1)
    rv25 = Review(rating=5,movie_id=25,user_id=1)
    rv26 = Review(rating=5,movie_id=26,user_id=1)
    rv27 = Review(rating=5,movie_id=27,user_id=1)
    rv28 = Review(rating=5,movie_id=28,user_id=1)
    rv29 = Review(rating=5,movie_id=29,user_id=1)
    rv30 = Review(rating=5,movie_id=30,user_id=1)




    db.session.add(rv1)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()