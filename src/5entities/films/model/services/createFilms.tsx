import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Film } from '../types/film';

export const createFilms = createAsyncThunk<
  Film[],
  void,
  { rejectValue: string }
>('film/addFilm', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<Film[]>(
        'https://d5caef6911b3.vps.myjino.ru/films',params
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
