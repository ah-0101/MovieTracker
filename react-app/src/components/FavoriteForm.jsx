import React, {useState} from 'react';
import {addFavorite} from '../store/favorite'
import {useParams,Redirect} from 'react-router-dom' 
import {useSelector, useDispatch} from 'react-redux'
import LoginFormModal from './auth/LoginFormModal'
import './FavoriteForm.css'
export default function FavoriteForm(){
    const user = useSelector(state => state.session.user)
    const [addFav, setAddFav] = useState(false)

    const id = useParams();
    const dispatch = useDispatch();
 

    const handleFavSubmit = (e) =>{
            e.preventDefault();
            dispatch(addFavorite(id.movieId,user.id))
            setAddFav((prev) => !prev)
    }

    const handleLoginFirst = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div className='outer-checked'>
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
            
            </div>
           
        </>
    )
}
