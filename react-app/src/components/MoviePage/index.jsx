import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'


import movietrackerLogo from '../../images/movietrackerLogo.png'
import FavoriteForm from '../FavoriteForm/index.jsx'
import './MoviePage.css'
export default function MoviePage(){
    const id = useParams()
    const [movie, setMovie] = useState([])
    const [trailerMovieStart, setTrailerMovieStart] = useState(false)
    const [trailerUrl,setTrailerUrl] = useState('')

    let movieArr = [] 
        useEffect(async() => {
            try{

                const movieRes = await fetch(`/api/movies/${id.movieId}/`)
                const jsonMovieRes = await movieRes.json()
                setMovie(jsonMovieRes)
            }
            catch{
                return '404'
            }
        },[])

        useEffect(()=>{

            const arr1 = ['','https://www.youtube.com/watch?v=Z5CWOcrw-h8','https://www.youtube.com/watch?v=_V1lLSS9lCc','https://www.youtube.com/watch?v=7JCK1AUZL1w',
            'https://www.youtube.com/watch?v=mtGjZp3MWrI','https://www.youtube.com/watch?v=HZ7PAyCDwEg','https://www.youtube.com/watch?v=tRsoFy-UwyQ',
            'https://www.youtube.com/watch?v=XJ0fzKnXVCA','https://www.youtube.com/watch?v=hNCmb-4oXJA','https://www.youtube.com/watch?v=RQNL2x4wK1s',
            'https://www.youtube.com/watch?v=PpjZ-7OVBQg','https://www.youtube.com/watch?v=27Sc2YxuQds','https://www.youtube.com/watch?v=tOc5MD50BzQ',
            'https://www.youtube.com/watch?v=iUMZviyljUI','https://www.youtube.com/watch?v=fgqEyC19538','https://www.youtube.com/watch?v=JvPTCvUnNQA',
            'https://www.youtube.com/watch?v=XviqhAB5sEc','https://www.youtube.com/watch?v=0hgHY9k-44U','https://www.youtube.com/watch?v=EWizz52lZvw',
            'https://www.youtube.com/watch?v=1HFv47QHWJU','https://www.youtube.com/watch?v=54yAKyNkK7w','https://www.youtube.com/watch?v=HsItWo7eF5s',
            'https://www.youtube.com/watch?v=UlnufxrJlAk','https://www.youtube.com/watch?v=IWBsDaFWyTE','https://www.youtube.com/watch?v=3JSEKkbhG4o',
            'https://www.youtube.com/watch?v=6tBO1n6-Km4','https://www.youtube.com/watch?v=Nt_wyydppg8','https://www.youtube.com/watch?v=QXpxUeL0lz4',
            'https://www.youtube.com/watch?v=nOggbGeuicQ','https://www.youtube.com/watch?v=3od-kQMTZ9M','https://www.youtube.com/watch?v=DCAixCfVtfE']
            let urlScu;
            let urlIdx;
            for(let i = 0; i < arr1.length; i++){
                
                if(i === Number(Object.values(id)[0])){
                    urlScu = arr1[i]
                    urlIdx = i
                }
            }
            
            if(Number(Object.values(id)[0]) == urlIdx){
                setTrailerUrl(urlScu)
            }
        },[])

    return (
        <>
        <div className="movie-logo-holder">
            <img src={movietrackerLogo} style={{padding:'20px'}} alt=""/>
        </div>
        <section>

        <div className="background-layout">

            
            <div className="container24">
                <div className="outer-shadow_image">

            <div className="image-custom">
            <p className='movie-name'>&nbsp;&nbsp;&nbsp;Movie Name: <span style={{color:"black"}}>{movie.movie_name}</span>, Release Time: <span style={{color:"black"}}>{movie.movie_date}</span></p>
               { !trailerMovieStart && <img src={movie.movie_url} alt="s"/>}
               { trailerMovieStart && 
                <div className='player-wrapper_movie'>
                <ReactPlayer
                  url={trailerUrl}
                  loop
                  muted={false}
                  controls={false}
                  
                  className='react-player with-controls'
                  playing
                  width='100%'
                  height='100%'
                  
                  />
              </div>
               }
            </div>
                </div>
            <div>
                    

                <div className="actor-movie_names">

            <p className='actor-name' >&nbsp;&nbsp;&nbsp;Actors: {movie.actors}</p>
                </div>
          
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div style={{marginLeft:"22%"}}>
              &nbsp;&nbsp;&nbsp; <FavoriteForm setTrailerMovieStart={setTrailerMovieStart}/>
              
            </div>
            <div>
                <button className='btn-rate'>&nbsp;&nbsp;&nbsp;Rate This Movie</button>
            </div>
            </div>
            </div>
            <ul className='p-tag'>

            <div className='info-breaker-line'>
            </div>
            <div className='info'>
                <ul>
                    <p style={{fontSize:"20px"}}>Brief movie biography:</p>
            <p className='movie-info'>{movie.movie_info}</p>
                </ul>
            </div>
            </ul>
            
            </div>
       
        </section>
        </>
    )
}