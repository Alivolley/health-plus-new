'use client';

import { configureStore } from '@reduxjs/toolkit';
import loginStatusSlice from './features/loginStatusSlice';

const store = configureStore({
   reducer: {
      loginStatusSlice,
   },
});

export default store;
