import React, {useState,useEffect} from 'react';
import {useParams,Redirect,useHistory} from 'react-router-dom' 
import {useSelector, useDispatch} from 'react-redux'

import LoginFormModal from '../auth/LoginFormModal'
import {addFavorite} from '../../store/favorite'
import {getUserFavorite} from '../../store/favorite'
import {removeOneFavorite} from '../../store/favorite'
import {getOneFavorite} from '../../store/favorite'
import './FavoriteForm.css'

export default function FavoriteForm(){
    const user = useSelector(state => state.session.user)
    // const favorite = useSelector(state => Object.values(state.Favorite))
    const favorite = useSelector(state => (Object.keys(state.Favorite)))
    const [addFav, setAddFav] = useState(false)
    const [removeFav, setRemoveFav] = useState(false)
    const [added, setAdded] = useState('Add to Watchlist')

    const id = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    // const movieIdNumber = Number(favorite[0])
    // console.log('sssnumber fave  >>>>>>',movieIdNumber)
//  console.log()
//  useEffect(()=>console.log('not a -',Number(favorite)) ,[favorite])

// console.log('favorite state',Number(favorite[0]))
    const handleFavSubmit = (e) =>{
            e.preventDefault();
            dispatch(addFavorite(id.movieId,user.id))
            setAddFav((prev) => !prev)
            setAdded('Added to Watchlist ✅')
    }
    useEffect(() => dispatch(getOneFavorite(id.movieId)),[dispatch])
    // console.log(addFav)
    const removeFavSubmit = async (e) => {
        e.preventDefault()
        setAddFav((prev) => !prev)
        setAdded('Add to Watchlist Again')
       await dispatch(removeOneFavorite(Number(favorite)))
    }

    const handleLoginFirst = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div className='outer-checked'>
         {/* {addFav && <p className='checked'>✅</p>} */}
         {/* {addFav && <p className='checked'>✅</p>} */}
         
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
        {/* {LoginFirst && } */}
            </>
            {addFav && <button className="btn-watchlist" onClick={removeFavSubmit}>Remove from Watchlist</button>}
            </div>
           
        </>
    )
}
