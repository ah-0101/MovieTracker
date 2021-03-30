from .db import db
from sqlalchemy.orm import relationship

class Favorites(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key =True)
    movie_id = db.Column(db.Integer,db.ForeignKey("movies.id"))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))


    user = relationship("User", back_populates='favorites')
    movie = relationship("Movie", back_populates='favorites')

    def to_dict(self):
        return {
            "id": self.id,
            "movie_id": self.movie_id,
            "user_id": self.user_id
        }