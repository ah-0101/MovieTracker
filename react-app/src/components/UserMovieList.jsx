import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

import {getUserFavorite} from '../store/favorite'
import {getUserMovieFavorite} from '../store/movies'

import "./UserMovieList.css"


export default function UserMovieList(){
    const user = useSelector(state => state.session.user?.id) // = 1
    const movie = useSelector(state => Object.values(state.movies))
    console.log('useselector',movie)
    const dispatch = useDispatch()
    

    useEffect(() => {
          dispatch(getUserFavorite())
        },[dispatch,user])


    useEffect(() => {
        dispatch(getUserMovieFavorite())
    },[dispatch])

    return(
       <>
       <div className="cutter-edge_div">

       </div>
       {movie.map(movie =>(
           <div className="outer-movielist_div">
               <div>
           <img className="movie-class_div" id={movie.id}  width='300px' height='220' src={movie.movie_url} alt='nothing' />
               </div>
           </div>
       ))}
       </>
    )

}