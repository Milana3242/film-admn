import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: {
    isFetching: false,
  },
  user: {
    name: 'collins',
    isAuthenticated: true,
  },
};

const authSlice2 = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
  },
});

export const { setIsFetching } = authSlice2.actions;

export default authSlice2.reducer;
