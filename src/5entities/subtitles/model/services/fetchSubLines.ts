import { createAsyncThunk } from '@reduxjs/toolkit';
import {  SubtitlesLine } from '../types/subtitles';
import axios from 'axios';

export const fetchSubLines = createAsyncThunk<
SubtitlesLine[],
  {id:string|undefined},
  { rejectValue: string }
>('line/fetchSubLineStatus', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<SubtitlesLine[]>(
        `https://d5caef6911b3.vps.myjino.ru/subtitles/${Number(params.id)}/lines`,
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