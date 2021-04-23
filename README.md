# MovieTracker (Flask React Project)

Brief Introduction Inspired by google.com, MovieTracker is a the place where you can track movies and add them to your list.

### [MokvieTracker Live](https://movie-tracker-aa.herokuapp.com)

![Alt text](https://github.com/Ace-0101/MovieTracker/blob/main/movie-tracker-demo.png)

## Technologies
   MovieTracker is built using the following stack & libraries:
   
   
## Backend 
   1.Python 
      *Flask-SQLAlchemy

   2.PostgreSQL
      *PostgreSQL is a relational database management system emphasizing extensibility and SQL compliance.
   

## Frontend

   1.Javascript
   2.React
      *React is a JavaScript library for building user interfaces. It deals with the views and lets you        *choose the rest of your front-end architecture.
   3.Redux
      *Redux is a JavaScript library for managing application state.
      

## Hosting 
    1. Heroku
      *Heroku is a platform as a service that enables developers to build, run, and operate applications entirely in the cloud.
      
## Features

    *Search for any movie directly from the main page without signing in, the website will require sign in only if you want to favorite a movie and added it to your watchlist
    *You can add to your watchlist and remove from your watch list
   

   
## Codes
##### This is the search route 
```python 

@movie_routes.route('/<id>')
def getMovieInfo(id):
    search_for_movie = Movie.query.filter(Movie.movie_name.ilike(f'%{id}%')).limit(7) #taking out the % sign will make the search only for starts with 
    return jsonify([movie.to_dict() for movie in search_for_movie])
```
   
##### This code for the redux store where normalization happened, retriving the data much faster 
``` javascript

export default function FavoriteReducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_FAVORITE:
            newState = {...state, [action.payload.result.id]: action.payload.result }
            return newState
        case READ_FAVORITE:
            action.payload.forEach(movie => {
                newState[movie.movie_id] = movie
            })
            return newState
        case REMOVE_FAVORITE:
            newState = {...state };
            delete newState[action.payload];
            return newState;
        case READ_ONE_FAVORITE:
            newState = {...state, [action.payload.id]: action.payload }
            return newState;
        default:
            return state
    }
}
```

##### This code is showing how the element for the search is displaying 

``` javascript 
 { search?.map(movie => (
    <>
      <ul className="inner-ul">
         <div className="inner-search-icon">
         </div>
            <div className="inner-search">
              <div  className="inner-search-result">
                <span key={movie.id} >
                  <b id={movie.id} key={movie.id} style={{cursor: 'pointer'}} onClick={handleNavigate}>{movie.movie_name}</b>
                </span>
            </div>
               </div>
      </ul>
   </>
 ))}
```

##### This code is for restoring the user using the redux store 
``` javascript
export const restoreUser = () => async(dispatch) => {
    const res = await authenticate();
    dispatch(setUser(res));
    return res;
};
```
