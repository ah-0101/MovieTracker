from .db import db


class Movie(db.Model):
    __tablename__ = "movies"
    id = db.Column(db.Integer, primary_key=True)
    movie_name = db.Column(db.String(100), nullable = False, unique = True)
    actors = db.Column(db.String(255), nullable = False)
    movie_date = db.Column(db.String(255), nullable = False)
    movie_info = db.Column(db.String(255), nullable = False)
    movie_url = db.Column(db.String(255), nullable = False)
    category_id = db.Column(db.Integer,db.ForeignKey("categories.id"),nullable = False)


    category = relationship("Category", back_populates='movies')
    review = relationship("Review", back_populates='movies')


     def to_dict(self):
        return {
            "id": self.id,
            "movie_name": self.movie_name,
            "actors": self.actors
            "movie_date": self.movie_date
            "movie_info": self.movie_info
            "movie_url": self.movie_url,
            "category_id": self.category_id
        }