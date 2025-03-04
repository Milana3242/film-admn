import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Progress } from '../types/progress';

export const deleteProgress = createAsyncThunk<
Progress[],
number,
  { rejectValue: string }
>('lesson/deleteLesson', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete<Progress[]>(
        `https://d5caef6911b3.vps.myjino.ru/subtitles/${params}`
    );

    console.log('sss')

    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e) {
    return rejectWithValue('Error fetching films');
  }
});
