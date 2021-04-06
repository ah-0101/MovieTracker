import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MoviePage.css'
import movietrackerred from './movietrackerred.png'
import FavoriteForm from './FavoriteForm'
export default function MoviePage(){
    const id = useParams()
    const [movie, setMovie] = useState([])
    let movieArr = [] 
        useEffect(async() => {
            try{

                const movieRes = await fetch(`/api/movies/${id.movieId}`)
                const jsonMovieRes = await movieRes.json()
                setMovie(jsonMovieRes)
            }
            catch{
                return '404'
            }
        },[])
        
        console.log(movie)
    return (
        <>
        <div className="movie-logo-holder">
            <img src={movietrackerred} alt=""/>
        </div>
        <section>

        <div className="background-layout">

            
            <div className="container24">
            <div className="image-custom">
                <img src={movie.movie_url} alt="s"/>
            </div>
            <div>
                    

                <div className="actor-movie_names">
            <p className='movie-name'>&nbsp;&nbsp;&nbsp;{movie.movie_name}</p>
            <p className='actor-name' >&nbsp;&nbsp;&nbsp;Actors: {movie.actors}</p>
                </div>
          
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{movie.movie_date}</p>
            <div>
              &nbsp;&nbsp;&nbsp; <FavoriteForm/>
              
            </div>
            <div>
                <button className='btn-rate'>&nbsp;&nbsp;&nbsp;Rate This Movie</button>
            </div>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            <ul className='p-tag'>

            <div className='info-breaker-line'>
            </div>
            <div className='info'>
                <ul>
                    <p>Brief movie biography</p>
            <p className='movie-info'>{movie.movie_info}</p>
                </ul>
            </div>
            </ul>
            
            </div>
       
        </section>

        </>
    )
}