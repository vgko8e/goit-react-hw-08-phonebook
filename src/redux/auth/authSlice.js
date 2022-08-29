import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, number: null };
      state.token = null;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, _) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
