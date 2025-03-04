import { createSlice } from '@reduxjs/toolkit';
import { Status, SubtitlesLineSliceState } from '../types/subtitles';
import { fetchSubLines } from '../services/fetchSubLines';

const initialState: SubtitlesLineSliceState = {
  lines:[],
  status: Status.LOADING,
  error:null
};

const subtitlesLineSlice = createSlice({
  name: 'sub',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubLines.pending, (state, action) => {
      state.status = Status.LOADING;
      state.lines = [];
    });

    builder.addCase(fetchSubLines.fulfilled, (state, action) => {
      state.lines = action.payload.slice(0,10);
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchSubLines.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.lines = [];
      state.error=action.error
    });
  },
});

export const { actions: subtitlesActions } = subtitlesLineSlice;
export default subtitlesLineSlice.reducer;
