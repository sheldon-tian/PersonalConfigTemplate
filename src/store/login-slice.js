import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: true,
  },
  reducers: {
    login(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
