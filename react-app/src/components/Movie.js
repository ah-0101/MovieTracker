import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {loadMovie} from "../store/movies"
import {addCategory} from "../store/category"
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
const Movie = () => {
    
    const dispatch = useDispatch()
    const stateMovie = useSelector(state => state.movies)
    const user = useSelector(state => state.session.user)
    const categoriesState = useSelector(state => state.categories)
    const categories = Object.values(categoriesState)
    const movies = Object.values(stateMovie)
    // console.log("movie >>>",movies)
    // console.log("user >>>>>>>",user)
    // console.log("user >>>>>>>",category)
    
    useEffect(()=> {
            dispatch(loadMovie());
            dispatch(addCategory());
    },[dispatch])
    
// const i = <ReactPlayer url="https://www.youtube.com/watch?v=-5KAN9_CzSA" />
    return (
        <>
        <h1>hello from movie</h1>
        {categories?.map(category => (
            <h1>{category.name}</h1>
        ))}
        {movies?.map(movie =>(
            <>
            {/* <video autoplay loop controls >
            <source src={`../videos/${movie.movie_url}`} type="video/mp4"/>
          </video> */}
          <h1>{movie.movie_url}</h1>
          </>
        ))}

    {/* <Player> */}
      {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> */}
      {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> */}
      
    {/* </Player> */}
          {/* <video autoplay loop  > */}
            {/* <source src={`../videos/MC.mp4`} type="video/mp4"/> */}
          {/* </video> */}
         
      </>
    )
}

export default Movie;