import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //Actions
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = '';
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
