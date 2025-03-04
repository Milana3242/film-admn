import { createSlice } from '@reduxjs/toolkit';
import { SubtitlesSliceState,Status } from '../types/subtitles';
import { fetchSubtitles } from '../..';

const initialState: SubtitlesSliceState = {
  subtitles: [],
  status: Status.LOADING,
  error:null
};

const subtitlesSlice = createSlice({
  name: 'sub',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubtitles.pending, (state, action) => {
      state.status = Status.LOADING;
      state.subtitles = [];
    });

    builder.addCase(fetchSubtitles.fulfilled, (state, action) => {
      state.subtitles = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchSubtitles.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.subtitles = [];
      state.error=action.error
    });
  },
});


export const { actions: subtitlesActions } = subtitlesSlice;
export default subtitlesSlice.reducer;
