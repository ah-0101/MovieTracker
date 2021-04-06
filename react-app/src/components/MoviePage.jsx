import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MoviePage.css'

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
        <section>

        <div className="background-layout">
            <div className="image-custom">
                <img src={movie.movie_url} alt="s"/>
            </div>
        <h1>{movie.id}</h1>
        <br/>
        <h1>{movie.movie_name}</h1>
        <br/>
        <h1>{movie.actors}</h1>
        </div>
        </section>
        </>
    )
}