export const LOAD_MOVIES = "movies/LOAD_MOVIES";
const READ_FAV_MOVIE = 'favorite/readFavMovie'
const REMOVE_MOVIE = "movie/REMOVE_USER";


const deleteMovie = () => ({
    type: REMOVE_MOVIE,
});

const load = (movies) => ({
    type: LOAD_MOVIES,
    payload: movies
})

const readMovieFavorite = (movie) => ({
    type: READ_FAV_MOVIE,
    payload: movie
})

export const getUserMovieFavorite = () => async(dispatch) => {
    const res = await fetch('api/favorites/moviefavorite')
    const jsonRes = await res.json()
    console.log('new content >>>>>>>>>>> new >>>>>>>>>>>>>>>>', jsonRes)
    dispatch(readMovieFavorite(jsonRes))
}


export const loadMovie = () => async(dispatch) => {
    const res = await fetch('/api/movies')
    const jsonRes = await res.json()
    dispatch(load(jsonRes));
};

export const logoutMovie = () => async(dispatch) => {
    // const res = await logout();
    // if(!res.ok) throw res
    dispatch(deleteMovie());
    // return res;
};


const MoviesReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD_MOVIES:
            action.payload.movies.forEach(movie => {
                newState[movie.id] = movie
            })
            return newState;
        case REMOVE_MOVIE:
            return {}
        case READ_FAV_MOVIE:
            action.payload.forEach(movie => {
                newState[movie.id] = movie
            })
            return newState;
        default:
            return state;
    }
}

export default MoviesReducer;