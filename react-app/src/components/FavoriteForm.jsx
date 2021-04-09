import React, {useState,useEffect} from 'react';
import {useParams,Redirect,useHistory} from 'react-router-dom' 
import {useSelector, useDispatch} from 'react-redux'

import LoginFormModal from './auth/LoginFormModal'
import {addFavorite} from '../store/favorite'
import {getUserFavorite} from '../store/favorite'
import {removeOneFavorite} from '../store/favorite'
import {getOneFavorite} from '../store/favorite'
import './FavoriteForm.css'

export default function FavoriteForm(){
    const user = useSelector(state => state.session.user)
    // const favorite = useSelector(state => Object.values(state.Favorite))
    const favorite = useSelector(state => (Object.keys(state.Favorite)))
    const [addFav, setAddFav] = useState(false)
    const [removeFav, setRemoveFav] = useState(false)

    const id = useParams();
    const dispatch = useDispatch();
    const history = useHistory()
    const movieIdNumber = Number(favorite[0])
 


    const handleFavSubmit = (e) =>{
            e.preventDefault();
            dispatch(addFavorite(id.movieId,user.id))
            setAddFav((prev) => !prev)
    }
    // useEffect(() => dispatch(getUserFavorite()),[dispatch,user])
    useEffect(() => dispatch(getOneFavorite(id.movieId)),[dispatch])

    console.log(addFav)
    const removeFavSubmit = (e) => {
        e.preventDefault()
                // dispatch(removeOneFavorite())
        // favorite.map(fav => {
        //     if(fav.movie_id == id.movieId){
        //     }
        //     // history.push('/')
        // })
    }

    const handleLoginFirst = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div className='outer-checked'>
         {addFav && <p className='checked'>✅</p>}
         {addFav && <p className='checked'>✅</p>}
        {user &&
        
        <form action="" method="POST">
            <button className="btn-watchlist" onClick={handleFavSubmit} type="submit">Add to Watchlist</button>
            
        </form>
            }
                <>

            {
            !user && 
            <ul onClick={handleLoginFirst} className="btn-watchlist"  >Add to Watchlist<div style={{ marginTop:'-24px',color:'red',fontSize:'40px',color:"transparent"}}><LoginFormModal/></div></ul>
        }
        {/* {LoginFirst && } */}
            </>
            <button onClick={removeFavSubmit}>remove a fav</button>
            </div>
           
        </>
    )
}