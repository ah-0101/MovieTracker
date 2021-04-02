from werkzeug.security import generate_password_hash
from app.models import db, Category


def seed_categories():
    action = Category(name='Action Movies')
    horror = Category(name='TV Horror')
    comedies = Category(name='Comedies')
    kids = Category(name="kids' TV")
    tvshows = Category(name="TV Shows")
    thriller = Category(name="Thriller Movies")




    db.session.add(action)
    db.session.add(horror)
    db.session.add(comedies)
    db.session.add(kids)
    db.session.add(tvshows)
    db.session.add(thriller)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()