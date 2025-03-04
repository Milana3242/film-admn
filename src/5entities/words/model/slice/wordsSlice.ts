import { createSlice } from '@reduxjs/toolkit';
import {  Status, WordsSliceState } from '../types/words';
import { fetchWords } from '../..';

const initialState: WordsSliceState = {
  words:[],
  status: Status.LOADING,
  error: null,
};

const wordsSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWords.pending, (state, action) => {
      state.status = Status.LOADING;
      state.words = [];
    });

    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.words = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchWords.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.words = [];
      state.error=action.error
    });
  },
});

export const { actions: wordsActions } = wordsSlice;
export default wordsSlice.reducer;
