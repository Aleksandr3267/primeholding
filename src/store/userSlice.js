import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import history from '../history/index.js';
import jwtService from '../jwtService';

export const setUser = createAsyncThunk('user/setUser', async (user, { dispatch, getState }) => {
  return user;
});


export const logoutUser = () => async (dispatch, getState) => {
  const { user } = getState();

  if (!user.role) {
    // is guest
    return null;
  }

  history.push({
    pathname: '/',
  });


  return dispatch(userLoggedOut());
};

export const updateUserData = (user) => async (dispatch, getState) => {
  if (!user.role) {
    // is guest
    return;
  }

  jwtService
    .updateUserData(user)
    .then(() => {
      console.log("user logged out")
    })
    .catch((error) => {
      console.log(error)
    });
};


const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    userLoggedOut: (state, action) => {},
  },
  extraReducers: {
    [setUser.fulfilled]: (state, action) => action.payload,
  },
});

export const { userLoggedOut } = userSlice.actions;

export const selectUser = ({ user }) => user;

export default userSlice.reducer;
