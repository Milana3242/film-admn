import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {  Users } from '../types/users';

export const fetchUsersById = createAsyncThunk<
  Users,
  number,
  { rejectValue: string }
>('film/fetchFilmByIdStatus', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Users>(
      `https://d5caef6911b3.vps.myjino.ru/users/${params}`,
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
