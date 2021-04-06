import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import {useDispatch} from "react-redux";
import {loginUser} from '../../store/session';
import {useSelector} from 'react-redux'
import "./loginform.css"



const LoginForm = ({ authenticated, setAuthenticated }) => {
  const sessionUser = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory()



  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(loginUser(email, password))
        history.push('/')
  };
  const handleDemoLogin = () => {
    dispatch(loginUser({ email: "demo@aa.io", password: "password" }));
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if(sessionUser){
    return <Redirect to='/'/>
  }
  // console.log(loginUser({ email: "demo@aa.io", password: "password" }))
  return (
    <>
    <div >

    <form onSubmit={onLogin} className="login-form" >
    <div className='size'>
    <h1 className='signin-tag'>Sign In</h1>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
          ))}
      </div>
      <div>
       
        <input
        className="email-input"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          />
      </div>
      <div>
    
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          />
        <button type="submit">Sign in</button>
        <button className="demo-login" type="button" onClick={handleDemoLogin}>Demo Sign In</button>
      </div>
      </div>

    </form>
          </div>
    </>
  );
};

export default LoginForm;
