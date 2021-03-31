import { authenticate, logout, login } from "../services/auth";
import { setAuthErrors } from "./errors";
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const setUser = (user) => ({
  type: SET_USER,
  user,
});
const deleteSession = () => ({
  type: REMOVE_USER,
});
export const loginUser = (email, password) => async (dispatch) => {
  const res = await login(email, password);
  if (res.errors) {
    dispatch(setAuthErrors(res.errors));
    return res
  } else {
    dispatch(setUser(res));
  }
};
export const restoreUser = () => async (dispatch) => {
  const res = await authenticate();
  dispatch(setUser(res));
  return res;
};
export const logoutUser = () => async (dispatch) => {
  const res = await logout();
  // if(!res.ok) throw res
  dispatch(deleteSession());
  return res;
};
const initialState = {
  user: null,
};
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      if (action.user.errors) {
        newState.user = null;
      } else {
        newState.user = action.user;
      }
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};
export default sessionReducer;