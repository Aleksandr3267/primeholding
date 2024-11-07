import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice';
import order from './orderSlice';
import apartment from './apartmentSlice.js';
import message from './messageSlice.js';
import file from './fileSlice.js';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    user,
    order,
    apartment,
    message,
    file,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
