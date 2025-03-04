import { createSlice } from '@reduxjs/toolkit';
import { Status, UsersSliceState } from '../types/users';
import { fetchUsers } from '../..';

const initialState: UsersSliceState = {
  users: [],
  status: Status.LOADING,
  error:null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = Status.LOADING;
      state.users = [];
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.users = [];
      state.error=action.error
    });
  },
});


export const { actions: subtitlesActions } = usersSlice;
export default usersSlice.reducer;
