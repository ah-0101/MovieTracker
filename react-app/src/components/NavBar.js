import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import LoginFormModal from './auth/LoginFormModal'
import SignupFormModal from './auth/SignupFormModal'

// export default function NavBar({ setAuthenticated }) {
  
  
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
  //   const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  //   const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
    
    //   const handleMobileMenuClose = () => {
      //     setMobileMoreAnchorEl(null);
      //   };
      
      //   const handleMenuClose = () => {
        //     setAnchorEl(null);
        //     handleMobileMenuClose();
        //   };
        
        //   const handleMobileMenuOpen = (event) => {
          //     setMobileMoreAnchorEl(event.currentTarget);
          //   };
          
          //   const menuId = 'primary-search-account-menu';
          //   const renderMenu = (
            //     <Menu
            //       anchorEl={anchorEl}
            //       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            //       id={menuId}
            //       keepMounted
            //       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            //       open={isMenuOpen}
            //       onClose={handleMenuClose}
            //     >
            //       <MenuItem onClick={handleMenuClose}>
            //       <NavLink to="/users" exact={true} activeClassName="active">
            //             Users
            //           </NavLink>
            //           <LogoutButton setAuthenticated={setAuthenticated} />
            //       </MenuItem>
            //       {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
            //     </Menu>
            //   );
            
            // const mobileMenuId = 'primary-search-account-menu-mobile';
            // const renderMobileMenu = (
              //   <Menu
              //     anchorEl={mobileMoreAnchorEl}
              //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              //     id={mobileMenuId}
              //     keepMounted
              //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              //     open={isMobileMenuOpen}
              //     onClose={handleMobileMenuClose}
              //   >
              
              //   </Menu>
              // );
              
              // return (
                
                //     <div>
                
                //         <Toolbar style={{color:"red", borderStyle:"hidden", width:"95%", backgroundColor:"None", height:"px"}}>
                //           <IconButton
                //             edge="start"
                //             className={classes.menuButton}
                //             color="inherit"
                //             aria-label="open drawer"
                //           >
                //             <NavLink to="/" exact={true} activeClassName="active">
                //             MovieTracker
                //           </NavLink>
                //           <NavLink to="/mylist" exact={true} activeClassName="active">
                //             My List
                //           </NavLink>
                //           </IconButton>
                //           {/* <Typography className={classes.title} variant="h6" noWrap>
                //             Material-UI
              //           </Typography> */}
              //         { user &&  <div className={classes.search}>
              //             <div className={classes.searchIcon}>
              //               <SearchIcon />
              //             </div>
              //             <InputBase
              //               placeholder="Search…"
              //               classes={{
                //                 root1: classes.inputRoot,
                //                 input: classes.inputInput,
                //               }}
                //               inputProps={{ 'aria-label': 'search' }}
                //             />
                //           </div>}
                //           <div className={classes.grow} />
                //           <div className={classes.sectionDesktop}>
                //           {!user &&
                //           <>
                //             <IconButton color="inherit">
                //               <Badge  color="secondary">
                //               {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
                //             Sign Up
              //           </NavLink> */}
              //           <SignupFormModal/>
              //               </Badge>
              //             </IconButton>
              //             <IconButton  color="inherit">
              //               <Badge  color="secondary">
              //               {/* <NavLink to="/login" exact={true} activeClassName="active"> */}
              //              <LoginFormModal/>
              //           {/* </NavLink> */}
              //               </Badge>
              //             </IconButton>
              //             </>
              //           }
              //             <IconButton
              //             edge="end"
              //             aria-label="account of current user"
              //             aria-controls={menuId}
              //             aria-haspopup="true"
              //             onClick={handleProfileMenuOpen}
              //             color="inherit"
              //             >
              //               <AccountCircle />
              //             </IconButton>
              //           </div>
              //           <div className={classes.sectionMobile}>
              //             <IconButton
              //               aria-label="show more"
              //               aria-controls={mobileMenuId}
              //               aria-haspopup="true"
              //               onClick={handleMobileMenuOpen}
              //               color="inherit"
              //             >
              //               <MoreIcon />
              //             </IconButton>
              //           </div>
              //         </Toolbar>
              //       {renderMobileMenu}
              //       {renderMenu}
              //     </div>
              
              //   );
              // }
              const NavBar = ({ setAuthenticated }) => {
                const user = useSelector(state => state.session.user)
                return (
                  <nav>
      <ul className='nav'>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {!user && 
        <div className='btn-padding'>

        <li style={{float:"right"}} className="signin-btn">
            <LoginFormModal/>
        </li>
        </div>}
        {!user &&
        <div className='btn-padding_signup'>
        <li style={{float:"right"}} className="signup-btn">
           <SignupFormModal/>

        </li>
                  </div>
       }
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        {user &&
        <li style={{float:"right"}}>
          {/* <li className='fake-profile'>
         
          </li> */}
          <LogoutButton  setAuthenticated={setAuthenticated} />
        </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;