const SET_FAVORITE = 'favorite/setFavorite'
const REMOVE_FAVORITE = 'favorite/removeFavorite'
const READ_FAVORITE = 'favorite/readFavorite'
const READ_ONE_FAVORITE = 'favorite/getOneFavorite'


const setFavorite = (favorite) => ({
    type: SET_FAVORITE,
    payload: favorite
})


const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id
})

const readOneFavorite = (fav) => ({
    type: READ_ONE_FAVORITE,
    payload: fav
})


const readUserFavorite = (movie) => ({
    type: READ_FAVORITE,
    payload: movie
})


export const removeOneFavorite = (favId) => async(dispatch) => {
    const res = await fetch(`/api/favorites/${favId}/`, {
        method: 'DELETE',
    });

    dispatch(removeFavorite(favId));

    return res;

}

export const getOneFavorite = (favId) => async(dispatch) => {
    const res = await fetch(`/api/favorites/favmovie/${favId}`)
    const jsonRes = await res.json();
    dispatch(readOneFavorite(jsonRes));
    return res;
}

export const getUserFavorite = (userId) => async(dispatch) => {
    const res = await fetch(`/api/favorites/`)
    const jsonRes = await res.json();
    // console.log(':>:>:>:>:>:>:>>>:>:>:', jsonRes)
    dispatch(readUserFavorite(jsonRes))
    return res
}


export const addFavorite = (movie_id, user_id) => async(dispatch) => {
    // console.log(JSON.stringify({
    //     movie_id,
    //     user_id
    // }))
    const response = await fetch('/api/favorites/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            movie_id,
            user_id
        }),
    })
    if (response.ok) {
        const data = await response.json();
        console.log('data from frontend', data)
        dispatch(setFavorite(data));
        return response;
    }
}

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