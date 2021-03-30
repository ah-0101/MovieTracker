from werkzeug.security import generate_password_hash
from app.models import db, Favorite


def seed_favorites():
    fav1 = Favorite(movie_id=1, user_id=1,)




    db.session.add(fav1)
    db.session.commit()


def undo_favorites():
    db.session.execute('TRUNCATE favorites;')
    db.session.commit()