import React, { useState } from "react";
import { Redirect,useHistory  } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { useDispatch } from "react-redux"
import { restoreUser } from "../../store/session";
// import ReactPlayer from 'react-player'
// import MC from './MC.mp4'
import './signup.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const history = useHistory();
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        // setAuthenticated(true);
        await dispatch(restoreUser());
        history.push('/')
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className='outer-signup-modal' onSubmit={onSignUp}>
      <div className='size'>

     
      <h1 className='signin-tag'>Sign Up</h1>
      <div >
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          placeholder="User Name"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          placeholder="Email"
        ></input>
      </div>
      <div>
       
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          placeholder="Password"
        ></input>
      </div>
      <div>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder="Confirm Password"
        ></input>
      </div>

      <div className="btn">
      <button type="submit">Sign Up</button>
      </div>
      </div>
    </form>

  );
};

export default SignUpForm;
