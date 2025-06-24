// lib/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import transferReducer from './transferSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    transfer: transferReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
