from flask.cli import AppGroup
from .users import seed_users, undo_users
from .movies import seed_movies, undo_movies
from .favorites import seed_favorites, undo_favorites
from .categories import seed_categories, undo_categories
from .reviews import seed_reviews, undo_reviews
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_movies()
    seed_favorites()
    seed_reviews()
    
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_movies()
    undo_favorties()
    undo_reviews()
    
    # Add other undo functions here
