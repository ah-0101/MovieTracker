from werkzeug.security import generate_password_hash
from app.models import db, Movie


def seed_movie():

    demo = Movie( movie_name="new-movie", actors="actore", movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=2)
    movie1 = Movie( movie_name="new-movie1", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=1)
    movie2 = Movie( movie_name="new-movie2", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=3)
    movie3 = Movie( movie_name="new-movie3", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=4)
    movie4 = Movie( movie_name="new-movie4", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=6)
                 
    db.session.add(demo)
    db.session.add(movie1)
    db.session.add(movie2)
    db.session.add(movie3)
    db.session.add(movie4)

    db.session.commit()


def undo_movie():
    db.session.execute('TRUNCATE movies;')
    db.session.commit()
# Adds a demo user, you can add other users here if you want
