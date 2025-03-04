import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Film } from '../types/film';
import { useAppSelector } from '../../../../redux/store';
// import { IDeleteFilmProps } from '../../../../4features/ui/DeleteFilm';

export const patchFilms = createAsyncThunk<Film[],{id:string|undefined,item:Film},{ rejectValue: string }>(
  'film/patchFilm',
  async ({id,item}, { rejectWithValue }) => {
    try {
        // const editFilm = useAppSelector((state) => state.editFilm);
        // console.log('params',{id})
      const { data } = await axios.patch<Film[]>(
        `https://d5caef6911b3.vps.myjino.ru/films/${Number(id)}`,item
      );


      if (!data) {
        return rejectWithValue('No data received');
      }

      return data;
    } catch (e) {
      return rejectWithValue('Error fetching films');
    }
  },
);
