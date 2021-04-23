import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useHistory} from 'react-router-dom'

import { logout } from "../../services/auth";
import {logoutUser} from "../../store/session"
import {logoutMovie} from "../../store/movies"
import {logoutCategory} from "../../store/category"
import './logout.css'

const LogoutButton = ({setAuthenticated}) => {
  // const state = useSelector(state => state.session)
  const dispatch = useDispatch() 
  const history = useHistory()

  const onLogout = async (e) => {
    // await logout();
    await dispatch(logoutUser());
    await dispatch(logoutMovie());
    await dispatch(logoutCategory());
    history.push('/')
  };

  const redirect = (e) => {
    e.preventDefault()
    history.push('/watchlist')
  }

  return(
<>
<div className="edge-btns_out">

<div style={{paddingBottom:"7px", paddingRight:"10px"}}>
   <button  className='logging-out' onClick={redirect}>Watchlist</button>
</div>
   <button className='logging-out' onClick={onLogout}>Log out</button>
</div>
   </>
  ) 
};

export default LogoutButton;
