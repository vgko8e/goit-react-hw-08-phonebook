import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.default.baseUrl = 'https://connections-api.herokuapp.com/ ';

// const token = {
//   set(token) {
//     axios.defaults.headers.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.Authorization = ``;
//   },
// };

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    return data;
  } catch (error) {
    Notiflix.Notify.info(
      'Something went wrong, please, try again in a minute!'
    );
    console.log(error.message);
  }
});
