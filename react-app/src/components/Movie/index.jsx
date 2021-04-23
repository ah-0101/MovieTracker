import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {loadMovie} from "../../store/movies"
import {addCategory} from "../../store/category"
import ReactPlayer from 'react-player'
import { Player,ControlBar  } from 'video-react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import {Redirect, useHistory,NavLink} from 'react-router-dom';
import MovieInfoModal from '../MovieInfoModal.jsx'
import { Modal } from '../../context/Modal';
import ImgMediaCard from "../imageCardMaterial"

import movietrackerLogo from '../../images/movietrackerLogo.png'

import './Movie.css'
// import videos from '../videos';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Movie = () => {
    
    const dispatch = useDispatch()
    const stateMovie = useSelector(state => state.movies)
    const user = useSelector(state => state.session.user)
    const categoriesState = useSelector(state => state.categories)
    const categories = Object.values(categoriesState)
    const movies = Object.values(stateMovie)
    const [spacing, setSpacing] = React.useState(2);
    const [movieId, setMovieId] = useState(0) 
    const [trailerUrl, setTrailerUrl] = useState('https://www.youtube.com/watch?v=QYU8zydUqD8')
    const [muted,setMuted] = useState(true)
    const [showModal, setShowModal] = useState(false);
    
    const classes = useStyles();
    const history = useHistory()
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
  
    

    useEffect(()=> {
            dispatch(loadMovie());
            dispatch(addCategory());
    },[dispatch])
    

    const handleClickMovie = (e) => {
      e.preventDefault();
      setMovieId(e.target.id)
    }

    return (
        <>
        <div className="movie-logo-holder">
            <img src={movietrackerLogo} style={{padding:'20px'}} alt=""/>
        </div>
      <div className='player-wrapper'>
        <ReactPlayer
          url={trailerUrl}
          loop
          muted={muted}
          controls={false}
          
          className='react-player with-controls'
          playing
          width='100%'
          height='100%'
          
          />
      </div>
    <div className="card-container">

    {movies?.map(movie =>(
      <>
        <ImgMediaCard movie={movie} setTrailerUrl={setTrailerUrl} setMuted={setMuted}/>
        </>
                  ))}
                  </div>

</>
    )
}

export default Movie;