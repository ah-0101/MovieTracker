from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    user1 = User(username='Mike', email='mike@aa.io',password='password')
    # user2 = User(username='john', email='john@aa.io',password='password')
    # user3 = User(username='emad', email='emad@aa.io',password='password')
    # user4 = User(username='rami', email='rami@aa.io',password='password')

    db.session.add(demo)
    db.session.add(user1)
    # db.session.add(user2)
    # db.session.add(user3)
    # db.session.add(user4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
