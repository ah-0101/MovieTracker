from werkzeug.security import generate_password_hash
from app.models import db, Category


def seed_categories():
    action = Category(name='Actions')




    db.session.add(action)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()