import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Users } from '../types/users';
import useLocalStorage from '../../../../6shared/hooks/useLocalStorage';

export const fetchUsers = createAsyncThunk<
  Users[],
  void,
  { rejectValue: string }
>('sub/fetchUserStatus', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('auth');

    const { data } = await axios.get<Users[]>(
      'https://d5caef6911b3.vps.myjino.ru/users',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(token);

    if (!data) {
      return rejectWithValue('No data received');
    }

    return data;
  } catch (e) {
    return rejectWithValue('Error fetching films');
  }
});
