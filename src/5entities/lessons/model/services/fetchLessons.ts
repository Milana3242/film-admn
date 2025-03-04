import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Lessons,  } from '../types/lessons';



export const fetchLessons = createAsyncThunk<
Lessons[],
void,
  { rejectValue: string }
>('lessons/lessonsStatus', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Lessons[]>(
      `https://d5caef6911b3.vps.myjino.ru/lessons`
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
