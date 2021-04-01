import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import {useDispatch} from "react-redux";
import {loginUser} from '../../store/session';

import "./loginform.css"



const LoginForm = ({ authenticated, setAuthenticated }) => {
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

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  
  return (
    <>
    <div >

    <form onSubmit={onLogin} className="login-form" >
      <div>
        {errors.map((error) => (
          <div>{error}</div>
          ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          />
        <button type="submit">Login</button>
      </div>
    </form>
          </div>
    </>
  );
};

export default LoginForm;
