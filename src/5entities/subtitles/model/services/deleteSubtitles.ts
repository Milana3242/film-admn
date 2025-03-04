import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Subtitles } from '../types/subtitles';

export const deleteSubtitles = createAsyncThunk<
Subtitles[],
number,
  { rejectValue: string }
>('sub/deleteSub', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete<Subtitles[]>(
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
