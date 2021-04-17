import { func } from 'prop-types';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory,Redirect} from 'react-router-dom'

import {removeOneFavorite,getUserFavorite} from '../../store/favorite'
import {getUserMovieFavorite} from '../../store/movies'
import "./UserMovieList.css"


export default  function UserMovieList(){
    const user = useSelector(state => state.session.user?.id) // = 1
    const movie = useSelector(state => Object.values(state.movies))
    const [sugMovie, setSugMovie] = useState([])

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

        
                        // you will need to fetch the data and the display it directly from the api service
                        // inOrder to have the number for the favorite category_id so doing it this way without useEffect 
                        // will do infinte loop

                //  async function fetching(){

                //     if(movie[0]?.category_id){
                //         const movieSuggestorFetch = await fetch(`/api/movies/category/${movie[0]?.category_id}`)
                //         const jsonMovieSugg = await movieSuggestorFetch.json()
                //         setSugMovie(jsonMovieSugg)
                //         console.log('bingo > >> >',sugMovie)
                //     }
                    
                // }
   
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
               <div>
                   {movie.category_id == 1? <p>Action Movie</p>:
                   movie.category_id == 2? <p>Horror Movie</p>:
                   movie.category_id == 3? <p>Comedy Movie</p>:
                   movie.category_id == 4?<p>Kids</p>:
                   movie.category_id == 5? <p>Tv Show and ٍSeries</p>:
                   movie.category_id == 6? <p>Thriller Movie</p>:''}
               </div>
            </div>
           </div>
           <div className="rate-container">
          <div className="rate">
    <input  id="star5" name="rate" value="5" />
    <label style={{color:"skyBlue"}} for="star5" title="text">5 stars</label>
    <input  id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input  id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input  id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input  id="star1" name="rate" value="1" />
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