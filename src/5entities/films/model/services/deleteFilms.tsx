import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Film } from '../types/film';
import { IDeleteFilmProps } from '../../../../4features/ui/DeleteFilm';

export const deleteFilms = createAsyncThunk<
Film[],

  { rejectValue: string }
>('film/deleteFilm', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete<Film[]>(
        `https://d5caef6911b3.vps.myjino.ru/films/${params}`
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
