import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SignIn,Token } from '../types/auth';



export const signIn = createAsyncThunk<
Token,
SignIn,

  { rejectValue: string }
>('sign/SignInStatus', async (params, { rejectWithValue }) => {
  const token=localStorage.getItem('auth')
  try {
    const { data } = await axios.post(
      `https://d5caef6911b3.vps.myjino.ru/auth/login`,  params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // console.log(localStorage.getItem('auth'))
    localStorage.setItem('auth', data.accessToken)


    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e) {
    return rejectWithValue('Error fetching films');
  }
});
