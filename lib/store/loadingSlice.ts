import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_KEYS, LoadingKey } from '@/lib/constants/loadingKeys';

// type LoadingState = Record<LoadingKey, boolean>;

// // Build initial state dynamically from keys
// const initialState: LoadingState = Object.fromEntries(
//     LOADING_KEYS.map(key => [key, false])
// ) as LoadingState;
const initialState = false;

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state = true;
        },
        hideLoading: (state, action) => {
            state = false;
        },
    },
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
