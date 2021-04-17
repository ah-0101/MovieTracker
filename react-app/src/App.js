import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/index.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Movie from "./components/Movie";
import { authenticate } from "./services/auth";
import {useDispatch, useSelector} from 'react-redux';
import { restoreUser } from "./store/session";
import LoginPage from './components/LoginPage';
import MoviePage from './components/MoviePage';
import UserMovieList from './components/UserMovieList/index.jsx'

function App() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.user);
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(restoreUser());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);
  
//! user athuntectated EDIT on the login form
  // if (!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true}>
         <LoginPage/>
        </Route>
        <Route path="/sign-up" exact={true}>
          <LoginPage/>
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/watchlist" exact={true}>
        <UserMovieList/>
        </Route>

        <Route path="/explore" exact={true}>
          <Movie />
        </Route>
        <Route path="/:movieId" exact={true}>
          <MoviePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
