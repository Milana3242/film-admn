import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Subtitles } from '../types/subtitles';

export const fetchSubtitles = createAsyncThunk<
  Subtitles[],
  void,
  { rejectValue: string }
>('sub/fetchSubStatus', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Subtitles[]>(
      'https://d5caef6911b3.vps.myjino.ru/subtitles',
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
