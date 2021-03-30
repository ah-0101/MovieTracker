from .db import db
from sqlalchemy.orm import relationship

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key =True)
    rating = db.Column(db.Integer)
    movie_id = db.Column(db.Integer,db.ForeignKey("movies.id"))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))


    user = relationship("User", back_populates='reviews')
    movie = relationship("Movie", back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "movie_id": self.movie_id,
            "user_id": self.user_id
        }