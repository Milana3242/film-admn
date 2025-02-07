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

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
  },
});

export const { setIsFetching } = authSlice.actions;

export default authSlice.reducer;
