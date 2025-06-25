// lib/store/transferSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { search } from '@/lib/api/transfer';
import toast from 'react-hot-toast';
import api from '../api/axios';

interface Filter {
    class?: string[];
    [key: string]: any;
}

interface TransferState {
    request: {
        start_point: string;
        end_point: string;
        start_time_date: string;
        start_time_time: string;
        trip_type: 'oneway' | 'roundtrip';
        end_time_date?: string;
        end_time_time?: string;
        page: number;
        perPage: number;
        sortBy?: string;
        filter?: {
            class?: string[];
        };
        cacheKey?: string;
    };
    results: any;
    loading: boolean;
}


const initialState: TransferState = {
    request: {
        start_point: '',
        end_point: '',
        start_time_date: '',
        start_time_time: '',
        trip_type: 'oneway',
        end_time_date: '',
        end_time_time: '',
        page: 1,
        perPage: 5,
        sortBy: undefined,
        filter: {},
        cacheKey: undefined,
    },
    results: {},
    loading: false,
};

// ✅ THUNK: fetchTransfers (auto-handles lifecycle)
export const fetchTransfers = createAsyncThunk(
    'transfer/fetchTransfers',
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as { transfer: TransferState };
        const { filter, sortBy, cacheKey, ...rest } = state.transfer.request;
        // const body = { page, perPage, filter, sortBy, cacheKey };

        try {
            console.log(rest);

            // const res = await search(body);
            const res = await api.post('/transfers/search', rest);
            return res;
        } catch (err: any) {
            const msg = err?.response?.data?.message || 'Transfer search failed';
            toast.error(msg, {
                className: 'w-full'
            });
            return rejectWithValue(msg);
        }
    }
);

const transferSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {
        updateRequestField(state, action: PayloadAction<{ key: string; value: any }>) {
            state.request = {
                ...state.request,
                [action.payload.key]: action.payload.value,
            };
        },
        setFilters(state, action: PayloadAction<any>) {
            state.request.filter = action.payload;
            state.request.page = 1;
            state.request.cacheKey = undefined;
            state.results = [];
        },
        incrementPage(state) {
            state.request.page += 1;
        },
        setCacheKey(state, action: PayloadAction<string>) {
            state.request.cacheKey = action.payload;
        },
        resetTransfers(state) {
            state.request = {
                start_point: '',
                end_point: '',
                start_time_date: '',
                start_time_time: '',
                trip_type: 'oneway',
                end_time_date: '',
                end_time_time: '',
                page: 1,
                perPage: 5,
                sortBy: undefined,
                filter: {},
                cacheKey: undefined,
            };
            state.results = {};
            // state.request.cacheKey = undefined;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTransfers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchTransfers.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.request.cacheKey = action.payload.cacheKey;
                if (state.results.vehicles) {
                    state.results.vehicles = [...state.results.vehicles, action.payload.data.vehicles];
                } else {
                    state.results = action.payload.data;
                }
            })
            .addCase(fetchTransfers.rejected, state => {
                state.loading = false;
            });
    },
});

export const {
    updateRequestField,
    setFilters,
    // setSortBy,
    incrementPage,
    resetTransfers,
} = transferSlice.actions;

export default transferSlice.reducer;
