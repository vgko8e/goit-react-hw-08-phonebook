import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    toast.success('Done');
    return data;
  } catch (error) {
    toast.error('Wrong email or password!');
    console.log(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);
    toast.success('LogIn success!');
    return data;
  } catch (error) {
    toast.error('Wrong email or password!');
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('LogOut success!');
  } catch (error) {
    toast.error('Something went wrong!');
    console.log(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Something went wrong!');
      console.log(error.message);
    }
  }
);
