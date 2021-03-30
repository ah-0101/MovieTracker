from werkzeug.security import generate_password_hash
from app.models import db, Movie


def seed_movie():

    demo = Movie( movie_name="Mortal Kombat", actors=["Lewis Tan as Cole Young","Josh Lawson as Kano","Tadanobu Asano as Raiden",
                                                    "Mehcad Brooks as Jax","Ludi Lin as Liu Kang","Chin Han as Shang Tsung",
                                                    "Joe Taslim as Bi-Han / Sub-Zero"]
                                                    , movie_date='April 16, 2021',
                                                    movie_info='Mortal Kombat is an upcoming American martial arts fantasy action film directed by Simon McQuoid (in his feature directorial debut) from a screenplay by Greg Russo and Dave Callaham and a story by Oren Uziel and Russo.[1] It is based on the video game franchise of the same name created by Ed Boon and John Tobias, serving as a reboot to the Mortal Kombat film series. The film will star Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Joe Taslim, and Hiroyuki Sanada.',
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


def undo_movie():
    db.session.execute('TRUNCATE movies;')
    db.session.commit()
# Adds a demo user, you can add other users here if you want
