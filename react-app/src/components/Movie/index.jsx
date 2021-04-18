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
    // const [play,setPlay] = useState(false)
    console.log('?>>>>>>>>>>>>>>>>>>>>>?',movies)
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
  
    // console.log("movie >>>",movies)
    // console.log("user >>>>>>>",user)
    // console.log("user >>>>>>>",category)
    
    movies.map(movie => {
      if(movie.category_id === 1){
        console.log(movie)
      }
    })

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

    const handleClickMovie = (e) => {
      // e.preventDefault();
      setMovieId(e.target.id)
      // setMovieInfoState(<MovieInfoModal movieId={movieId}/>)
      // return MovieInfoState
      // history.push('/movie-info')
    }
console.log('movie id is here ',movieId)
    return (
        <>
        {/* <html className="html">
          
        <div className="height-page">
        
      <header className="home-land"> */}
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

{/*       
          <div className="action-movie-title">ٍAction Movies</div>
          <div className="action-movie-div-1">
          {movies?.map(movie =>(
            <>
          {
            <div > { movie.category_id === 1 && <img  id={movie.id}  width='300px' height='220' src={movie.movie_url} alt='nothing' />}
            {movie.category_id === 1 &&
              <NavLink to={`/${ movie.id}`}>movie info</NavLink>}
            </div> 
            
            
          } 
          </>
        ))}
        </div>
        <div>

          <div className="horror-movie-title"> Horror Movies</div>
          <div className="horror-movie-div">
          {movies?.map(movie =>(
            <>
          <div> 
            {movie.category_id === 2 && <img  id={movie.id}   width='300px' height='220' src={movie.movie_url} alt='nothing' /> }  </div>
          
          </>
        ))}
        </div>

          <div className="comedies-movie-title">ٍComedies</div>
       
          <div className="comedies-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 3 && <img  id={movie.id}   width='300px' height='220' src={movie.movie_url} alt='nothing' />} </div>
          
          </>
        ))}
        </div>
        </div>

        <div>
          <div className="kids-movie-title">ٍKids' Movies</div>
          <div className="kids-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 4 && <img  id={movie.id}   width='300px' height='220' src={movie.movie_url} alt='nothing' />} </div>
          
          </>
        ))}

        </div>
        </div>

        <div>
          <div className="tv-movie-title">ٍSeries And Tv Shows</div>
          <div className="tv-movie-div">
          {movies?.map(movie =>(
            <>
          <div>{movie.category_id === 5 && <img  id={movie.id}   width='300px' height='220' src={movie.movie_url} alt='nothing' />} </div>
          
          </>
        ))}
        
        </div>
        </div>

        <div>
          <div className="thriller-movie-title">ٍThriller Movies</div>
          <div className="thriller-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 6 && <img  id={movie.id}   width='300px' height='220' src={movie.movie_url} alt='nothing' />} </div>
          
          
          </>
        ))}
        </div>
        </div>
     
        </header>

        </div>
         */}
    <div className="card-container">

    {movies?.map(movie =>(
      <>
        <ImgMediaCard movie={movie} setTrailerUrl={setTrailerUrl} setMuted={setMuted}/>
        </>
                  ))}
                  </div>
{/* </html> */}
</>
    )
}

export default Movie;