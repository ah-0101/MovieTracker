import React, {useState,useEffect} from 'react';
import {useParams,Redirect,useHistory} from 'react-router-dom' 
import {useSelector, useDispatch} from 'react-redux'

import LoginFormModal from '../auth/LoginFormModal'
import {addFavorite} from '../../store/favorite'
import {getUserFavorite} from '../../store/favorite'
import {removeOneFavorite} from '../../store/favorite'
import {getOneFavorite} from '../../store/favorite'
import './FavoriteForm.css'

export default function FavoriteForm({setTrailerMovieStart}){
    const user = useSelector(state => state.session.user)
    const favorite = useSelector(state => (Object.keys(state.Favorite)))
    const [addFav, setAddFav] = useState(false)
    const [removeFav, setRemoveFav] = useState(false)
    const [added, setAdded] = useState('Add to Watchlist')

    const id = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleFavSubmit = (e) =>{
            e.preventDefault();
            dispatch(addFavorite(id.movieId,user.id))
            setAddFav((prev) => !prev)
            setAdded('Added to Watchlist ✔')
    }
    useEffect(() => dispatch(getOneFavorite(id.movieId)),[dispatch])
    const removeFavSubmit = async (e) => {
        e.preventDefault()
        setAddFav((prev) => !prev)
        setAdded('Add to Watchlist Again')
       await dispatch(removeOneFavorite(Number(favorite)))
    }

    const handleLoginFirst = (e) => {
        e.preventDefault();
    }

    const handleTrailerStart = (e) => {
        e.preventDefault()
        setTrailerMovieStart(true)
        window.scroll({
            top: 120,
            left: 230,
            behavior: 'smooth'
          });
    }

    return (
        <>
        <div className='outer-checked'>
        {user &&
        
        <form action="" method="POST">
            <button className="btn-watchlist" onClick={handleFavSubmit} type="submit">{added}</button>
            
        </form>
            }
                <>

            {
            !user && 
            <button onClick={handleLoginFirst} className="btn-watchlist"  >Add to Watchlist<div style={{ marginTop:'-24px',color:'red',fontSize:'40px',color:"transparent"}}><LoginFormModal/></div></button>
        }
             
        
            </>
            {addFav && <button className="btn-watchlist" onClick={removeFavSubmit}>Remove from Watchlist</button>}
            <button onClick={handleTrailerStart} className="btn-watchlist"  >Watch Trailer</button>
            </div>
            
        </>
    )
}
