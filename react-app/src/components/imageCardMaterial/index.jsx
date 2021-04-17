import React from 'react';
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
    margin:"5px"
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

export default function ImgMediaCard({movie}) {

  const classes = useStyles();
  const history = useHistory()
  const handleMoviePage = (e) => {
    console.log(e.target.id)
    e.preventDefault();
    history.push(`/${e.target.id}`)
  }

  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={movie.movie_url}
          title="Contemplative Reptile"
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
         see More...
        </button>
      </CardActions>
    </Card>
  );
}