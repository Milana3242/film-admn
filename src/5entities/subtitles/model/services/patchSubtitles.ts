import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppSelector } from '../../../../redux/store';
import { Subtitles } from '../types/subtitles';
// import { IDeleteFilmProps } from '../../../../4features/ui/DeleteFilm';

export const patchSubtitles = createAsyncThunk<Subtitles[],{id:string|undefined,item:Subtitles},{ rejectValue: string }>(
  'sub/patchSub',
  async ({id,item}, { rejectWithValue }) => {
    try {
        // const editFilm = useAppSelector((state) => state.editFilm);
        // console.log('params',{id})
      const { data } = await axios.patch<Subtitles[]>(
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
