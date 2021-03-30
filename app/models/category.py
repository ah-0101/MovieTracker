from .db import db
from sqlalchemy.orm import relationship

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key =True)
    name = db.Column(db.String(40))

    movie = relationship("Movie", backref='categories')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }