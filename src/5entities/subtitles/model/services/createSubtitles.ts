import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Subtitles } from '../types/subtitles';

export const createSubtitles = createAsyncThunk<
  Subtitles[],
  any,
  { rejectValue: string }
>('sub/addSub', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<Subtitles[]>(
        'https://d5caef6911b3.vps.myjino.ru/subtitles',params
    );

    console.log('sss')

    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e:any) {
    return rejectWithValue(e);
  }
});
