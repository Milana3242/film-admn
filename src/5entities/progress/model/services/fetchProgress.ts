import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Progress } from '../types/progress';



export const fetchProgress = createAsyncThunk<
Progress[],
void,
  { rejectValue: string }
>('progress/progressStatus', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Progress[]>(
      `https://d5caef6911b3.vps.myjino.ru/progress`
    );

    // console.log(localStorage.getItem('auth'))
    // localStorage.setItem('auth', data.accessToken)


    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e) {
    return rejectWithValue('Error fetching films');
  }
});
