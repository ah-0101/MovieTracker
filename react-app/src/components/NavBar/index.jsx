import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import LoginFormModal from '../auth/LoginFormModal'
import SignupFormModal from '../auth/SignupFormModal'

  const NavBar = ({ setAuthenticated }) => {
    const user = useSelector(state => state.session.user)
  
    return (
                  <nav className='nav-is_nav'>
      <ul className='nav'>
        <li>
          <NavLink to="/" exact={true} className="active">
            Home
          </NavLink>
        </li>
        {!user && 
        <div className='btn-padding'>
          <div>

        <li style={{float:"right"}} className="signin-btn">
            <LoginFormModal/>
        </li>
          </div>

        </div>}
        <div>

        {!user &&
        <div className='btn-padding_signup'>
        <li style={{float:"right"}} className="signup-btn">
           <SignupFormModal/>

        </li>
                  </div>
       }
       </div>
        {user &&
        <li style={{float:"right"}}>
          <LogoutButton  setAuthenticated={setAuthenticated} />
          
        </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;