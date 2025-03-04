import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SignUp, Token } from '../types/auth';



export const signUp = createAsyncThunk<
Token,
SignUp,

  { rejectValue: string }
>('sign/SignUpStatus', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `https://d5caef6911b3.vps.myjino.ru/auth/register`,params
    );

    console.log(localStorage.getItem('auth'))
    localStorage.setItem('auth', data.accessToken)


    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e:any) {
    console.log(e.response.data.message)
    return rejectWithValue(e.response.data.message);
  }
});
