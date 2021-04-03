import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {loadMovie} from "../store/movies"
import {addCategory} from "../store/category"
import ReactPlayer from 'react-player'
import { Player,ControlBar  } from 'video-react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
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
    const [play,setPlay] = useState(false)
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

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

    return (
        <>
        <div className="height-page">
        
      <header className="home-land">
      <div className='player-wrapper'>
        <ReactPlayer
          url='https://vimeo.com/20914353'
          loop
          controls={false}
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>


          <div className="action-movie-title">ٍAction Movies</div>
          {/* <div className="grid-container"> */}
          <div className="action-movie-div-1">
          {movies?.map(movie =>(
            <>
          {
            <div> {movie.category_id === 1 && <ReactPlayer  width='300px' height='220' url={movie.movie_url} />}</div> 
          }
          </>
        ))}
        </div>
        <div>

          <div className="horror-movie-title"> Horror Movies</div>
          <div className="horror-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 2 && <ReactPlayer width='300px' height='220' url={movie.movie_url}/> }  </div>
          
          </>
        ))}
        </div>

          <div className="comedies-movie-title">ٍComedies</div>
        {/* <div className='black-bottom'> */}
          <div className="comedies-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 3 && <ReactPlayer width='300px' height='220' url={movie.movie_url}/>} </div>
          
          </>
        ))}
        </div>
        </div>

        <div>
          <div className="kids-movie-title">ٍKids' Movies</div>
          <div className="kids-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 4 && <ReactPlayer width='300px' height='220' url={movie.movie_url}/>} </div>
          
          </>
        ))}

        </div>
        </div>

        <div>
          <div className="tv-movie-title">ٍSeries And Tv Shows</div>
          <div className="tv-movie-div">
          {movies?.map(movie =>(
            <>
          <div>{movie.category_id === 5 && <ReactPlayer width='300px' height='220' url={movie.movie_url}/>} </div>
          
          </>
        ))}
        
        </div>
        </div>

        <div>
          <div className="thriller-movie-title">ٍThriller Movies</div>
          <div className="thriller-movie-div">
          {movies?.map(movie =>(
            <>
          <div> {movie.category_id === 6 && <ReactPlayer width='300px' height='220' url={movie.movie_url}/>} </div>
          
          
          </>
        ))}
        </div>
        </div>
        {/* </div> */}
        </header>

        </div>







        {/* <div className='outer-category'>
        {categories?.map(category => (
          <div>
          <h1>{category.id === 1? 1: ''}</h1>
          </div>
          ))}
          </div> */}
          {/* <div  className='outer-movie'>
        
        {movies?.map(movie =>(
          <>
          <div> {movie.category_id === 1? movie.movie_name: ''} </div>
          
          </>
        ))}
        </div> */}
        {/* <h1 className='inner-movie'>{movie.category_id == 1?movie.movie_url: null}</h1> */}
        {/* <ReactPlayer width='750px' height='500px'
      playIcon  url={movie.category_id === 1? movie.movie_url: null} />           */}
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