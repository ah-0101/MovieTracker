from werkzeug.security import generate_password_hash
from app.models import db, Favorite


def seed_favorites():
    fav1 = Favorite(movie_id=1, user_id=1,)
    fav2 = Favorite(movie_id=6, user_id=1,)
    fav3 = Favorite(movie_id=5, user_id=1,)
    fav4 = Favorite(movie_id=4, user_id=1,)
    fav5 = Favorite(movie_id=3, user_id=1,)
    fav6 = Favorite(movie_id=2, user_id=1,)




    db.session.add(fav1)
    db.session.add(fav2)
    db.session.add(fav3)
    db.session.add(fav4)
    db.session.add(fav5)
    db.session.add(fav6)
    db.session.commit()


def undo_favorites():
    db.session.execute('TRUNCATE favorites;')
    db.session.commit()