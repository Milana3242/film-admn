import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilms } from '../services/fetchFilms';
import { FilmSliceState, Status } from '../types/film';

const initialState: FilmSliceState = {
  films: [],
  status: Status.LOADING,
  error:null
};

const filmsSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state, action) => {
      state.status = Status.LOADING;
      state.films = [];
    });

    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.films = [];
      state.error=action.error
    });
  },
});


export const { actions: filmsActions } = filmsSlice;
export default filmsSlice.reducer;
