import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Users } from '../types/users';

export const deleteUsers = createAsyncThunk<
  Users[],
  number,
  { rejectValue: string }
>('sub/deleteSub', async (params, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('auth');

    const { data } = await axios.delete<Users[]>(
      `https://d5caef6911b3.vps.myjino.ru/users/${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
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
