import { LessonWords } from './../types/lessons';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLessonWords = createAsyncThunk<
  LessonWords[],
  { id: string | undefined },
  { rejectValue: string }
>('words/fetchLessonWordsStatus', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LessonWords[]>(
      `https://d5caef6911b3.vps.myjino.ru/lessons/${Number(
        params.id,
      )}/words`,
    );

    console.log('sss');

    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e) {
    return rejectWithValue('Error fetching films');
  }
});
