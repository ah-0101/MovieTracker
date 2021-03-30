from werkzeug.security import generate_password_hash
from app.models import db, Movie


def seed_movies():

    demo = Movie( movie_name="Mortal Kombat", actors="Lewis Tan Jessica McNamee Josh Lawson Tadanobu Asano Mehcad Brooks"
                                                    , movie_date='April 16, 2021',
                                                    movie_info='Mortal Kombat is an upcoming American martial arts fantasy action film directed by Simon McQuoid (in his feature directorial debut) from a screenplay by Greg Russo and Dave Callaham',
                                                    movie_url='MC.mp4',category_id=1)
    # movie1 = Movie( movie_name="new-movie1", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=1)
    # movie2 = Movie( movie_name="new-movie2", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=3)
    # movie3 = Movie( movie_name="new-movie3", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=4)
    # movie4 = Movie( movie_name="new-movie4", actors="actore",movie_date='releasedate',movie_info='description about the movie',movie_url='urlHere',category_id=6)
                 
    db.session.add(demo)
    # db.session.add(movie1)
    # db.session.add(movie2)
    # db.session.add(movie3)
    # db.session.add(movie4)

    db.session.commit()


def undo_movies():
    db.session.execute('TRUNCATE movies;')
    db.session.commit()
# Adds a demo user, you can add other users here if you want
