import React from 'react';
import {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"95px"
  },
  explore:{
    border:'none',
    width:'100px',
    backgroundColor:'white',
    cursor:'pointer',
    color:'rgb(150, 101, 216)',
    fontWeight:'bold',
  }
});

export default function ImgMediaCard({movie,setTrailerUrl,setMuted}) {
  
  const classes = useStyles();
  const history = useHistory();


  const handleMoviePage = (e) => {
    console.log(e.target.id)
    e.preventDefault();
    history.push(`/${e.target.id}`)
  }

    
  const handleTrailerStart = (e) => {
    e.preventDefault();
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

      if(i === Number(e.target.id)){
        urlScu = arr1[i]
        urlIdx = i
        console.log('ss',e.target.id)
      }
    }
    
    window.scroll({
      top: 230,
      left: 230,
      behavior: 'smooth'
    });
    
    if(e.target.id == urlIdx){
      setTrailerUrl(urlScu)
    }
    setMuted(false)
  }

  //!------------------



  //!------------------

  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={movie.movie_url}
          title="Contemplative Reptile"
          style={{height:"300px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.movie_name} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {movie.movie_info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className={classes.explore} id={movie.id} onClick={handleMoviePage} >
         See More...
        </button>
        <button className={classes.explore}  id={movie.id} value={movie.movie_name} onClick={handleTrailerStart}>
          Watch Trailer
        </button>
      </CardActions>
    </Card>
  );
}