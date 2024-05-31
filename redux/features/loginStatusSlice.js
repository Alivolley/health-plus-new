'use client';

import { createSlice } from '@reduxjs/toolkit';
import { hasCookie } from 'cookies-next';

const isLogin = hasCookie('yalfan_isLogin');

const loginStatusSlice = createSlice({
   name: 'loginStatusSlice',

   initialState: isLogin || false,

   reducers: {
      changeToLoginTrue: () => true,

      changeToLoginFalse: () => false,

      toggleLoginStatus: state => {
         if (state) {
            return false;
         }
         return true;
      },
   },
});

export const { changeToLoginTrue, changeToLoginFalse, toggleLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
