import { createSlice } from '@reduxjs/toolkit';
import { LessonsSliceState, Status } from '../types/lessons';
import { fetchLessonWords, fetchLessons } from '../..';

const initialState = {
  words:[],
  status: Status.LOADING,
  error: null,
};

const lessonWordsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLessonWords.pending, (state, action) => {
      state.status = Status.LOADING;
      state.words = [];
    });

    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      state.words = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchLessons.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.words = [];
      state.error=action.error
    });
  },
});

export const { actions: authActions } = lessonWordsSlice;
export default lessonWordsSlice.reducer;
