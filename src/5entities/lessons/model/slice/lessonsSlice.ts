import { createSlice } from '@reduxjs/toolkit';
import { LessonsSliceState, Status } from '../types/lessons';
import { fetchLessons } from '../..';

const initialState: LessonsSliceState = {
  lessons:[],
  status: Status.LOADING,
  error: null,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLessons.pending, (state, action) => {
      state.status = Status.LOADING;
      state.lessons = [];
    });

    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchLessons.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.lessons = [];
      state.error=action.error
    });
  },
});

export const { actions: authActions } = authSlice;
export default authSlice.reducer;
