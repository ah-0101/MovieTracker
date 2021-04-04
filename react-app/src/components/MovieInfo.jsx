import React, { useState } from "react";
import {useSelector} from 'react-redux'

const MovieInfo =  ({movieId})  => {
    // console.log(movieId);
    const stateMovie = useSelector(state => state.movies)
    console.log('movieinfooooooooo', stateMovie)
    return (
        //  <h1>{movieId?"action": 'no' }</h1>
        <h1></h1>
    )
}

export default MovieInfo;