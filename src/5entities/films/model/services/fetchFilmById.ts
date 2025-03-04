import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Film } from '../types/film';

export const fetchFilmById = createAsyncThunk<
  Film,
  number,
  { rejectValue: string }
>('film/fetchFilmByIdStatus', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Film>(
      `https://d5caef6911b3.vps.myjino.ru/films/${params}`,
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
