import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Words } from '../types/words';



export const fetchWords = createAsyncThunk<
Words[],
void,
  { rejectValue: string }
>('words/wordsStatus', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Words[]>(
      `https://d5caef6911b3.vps.myjino.ru/words`
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
