import { createSlice } from '@reduxjs/toolkit';
import { ProgressSliceState, Status } from '../types/progress';
import { fetchProgress } from '../..';

const initialState: ProgressSliceState = {
  progress:[],
  status: Status.LOADING,
  error: null,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProgress.pending, (state, action) => {
      state.status = Status.LOADING;
      state.progress = [];
    });

    builder.addCase(fetchProgress.fulfilled, (state, action) => {
      state.progress = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProgress.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.progress = [];
      state.error=action.error
    });
  },
});

export const { actions: progressActions } = progressSlice;
export default progressSlice.reducer;
