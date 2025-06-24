// lib/store/loadingSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_KEYS, LoadingKey } from '@/lib/constants/loadingKeys';

type LoadingState = Record<LoadingKey, boolean>;

// Build initial state dynamically from keys
const initialState: LoadingState = Object.fromEntries(
    LOADING_KEYS.map(key => [key, false])
) as LoadingState;

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading: (state, action: PayloadAction<LoadingKey>) => {
            state[action.payload] = true;
        },
        hideLoading: (state, action: PayloadAction<LoadingKey>) => {
            state[action.payload] = false;
        },
    },
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
