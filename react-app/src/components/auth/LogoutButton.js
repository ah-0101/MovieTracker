import React from "react";
import { logout } from "../../services/auth";
import {logoutUser} from "../../store/session"
import {logoutMovie} from "../../store/movies"
import {logoutCategory} from "../../store/category"
import './logout.css'
import {useDispatch, useSelector} from "react-redux";

const LogoutButton = ({setAuthenticated}) => {
  // const state = useSelector(state => state.session)
  const dispatch = useDispatch() 
  const onLogout = async (e) => {
    // await logout();
    await dispatch(logoutUser());
    await dispatch(logoutMovie());
    await dispatch(logoutCategory());
  };

  return <button className='logging-out' onClick={onLogout}>Log out</button>;
};

export default LogoutButton;
