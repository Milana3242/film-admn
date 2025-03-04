import { createSlice } from '@reduxjs/toolkit';
import { signUp } from '../..';
import { Status } from '../types/auth';

const initialState: { status: Status; error: string | null | undefined } = {
  status: Status.LOADING,
  error: null,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.status = Status.LOADING;
      state.error = null;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.error = null;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.status = Status.ERROR;
      console.log(action);
      state.error = action.payload;
    });
  },
});

export const { actions: authActions } = authSlice;
export default authSlice.reducer;
