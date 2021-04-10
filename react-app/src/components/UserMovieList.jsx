import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory,Redirect} from 'react-router-dom'

import {removeOneFavorite,getUserFavorite} from '../store/favorite'
import {getUserMovieFavorite} from '../store/movies'
import "./UserMovieList.css"


export default function UserMovieList(){
    const user = useSelector(state => state.session.user?.id) // = 1
    const movie = useSelector(state => Object.values(state.movies))
    console.log('useselector',movie.length)
    const dispatch = useDispatch()
    const history = useHistory()
    

    useEffect(() => {
          dispatch(getUserFavorite())
        },[dispatch,user])

        
        useEffect(() => {
            dispatch(getUserMovieFavorite())
        },[dispatch])


        const removeFavSubmit =  (e) => {
            e.preventDefault()
            // setAddFav((prev) => !prev)
            // setAdded('Add to Watchlist Again')
            // console.log('ssssssssssssssssssss>?',Number(e.target.value))
            dispatch(removeOneFavorite(Number(e.target.value)))
            e.target.innerText = 'Removed'
        }

              
   
        return(
            <>
       <div className="div-rapper">

       <div className="cutter-edge_div">
        <div className="top-rapper">

        </div>
   
       </div>
       <div className="container-div_movies">

       {movie.map(movie =>(
           <>
           <div className="outer-movielist_div">
               <div className="div-nav">

               </div>
               <div>
           <img className="movie-class_div" id={movie.id}  width='300px' height='220px' src={movie.movie_url} alt='nothing' />
               </div>
                <div className='movie-name_div'>
            
               <b>{movie.movie_name}</b>
               <br/>
               <br/>
               <a>{movie.movie_date}</a>
            
            </div>
                <div className='movie-name_div'>
            
               <p>{movie.actors}</p>
            
            </div>
                <div className='movie-name_div'>
               <div>
               <p style={{color:"black"}}>{movie.movie_info}</p>
               </div>
            </div>
           </div>
           <div className="rate-container">
          <div className="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
          </div>
   

          <button style={{marginLeft:"46%"}} value={movie.id} onClick={removeFavSubmit} className="btn-watchlist" >Remove from Watchlist</button>
          
       
           </>
       ))}
       </div>
       </div>
                {movie.length? '': <h1 style={{marginLeft:"38%",color:"darkgray"}}>Your Watchlist is empty</h1>}
                <div className='footer' > <a href='https://github.com/Ace-0101/MovieTracker/'> Github Repo</a><a href="https://www.linkedin.com/in/maen-ace-habes-973034208/">Linkedin</a></div>
       </>
    )
    
}