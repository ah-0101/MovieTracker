import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {loadMovie} from "../store/movies"
import {addCategory} from "../store/category"
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import './Movie.css'
const Movie = () => {
    
    const dispatch = useDispatch()
    const stateMovie = useSelector(state => state.movies)
    const user = useSelector(state => state.session.user)
    const categoriesState = useSelector(state => state.categories)
    const categories = Object.values(categoriesState)
    const movies = Object.values(stateMovie)
    const [play,setPlay] = useState(false)
    
    // console.log("movie >>>",movies)
    // console.log("user >>>>>>>",user)
    // console.log("user >>>>>>>",category)
    
    useEffect(()=> {
            dispatch(loadMovie());
            dispatch(addCategory());
    },[dispatch])
    
// const i = <ReactPlayer url="https://www.youtube.com/watch?v=-5KAN9_CzSA" />
// const hoverStyle = {
//   "&:hover": {
//     i:setPlay('true')
//   }
  
// };

    return (
        <>
        <div className='outer-category'>
        {categories?.map(category => (
          <div>
          <h1>{category.name}</h1>
          </div>
          ))}
          </div>
          <div  className='outer-movie'>
        {movies?.map(movie =>(
          <>
          {/* <h1 className='inner-movie'>{movie.category_id == 1?movie.movie_url: null}</h1> */}
          <ReactPlayer width='750px' height='500px'
        playIcon  url={movie.category_id === 1? movie.movie_url: null} />          
       
          </>
        ))}
        </div>
        {/* <video autoplay loop controls >
        <source src={`../videos/${movie.movie_url}`} type="video/mp4"/>
      </video> */}
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