// hooks/useLoading.ts
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '@/lib/store/loadingSlice';
import { RootState } from '@/lib/store';
import { LoadingKey } from '@/lib/constants/loadingKeys';

export function useLoading(key: LoadingKey) {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading[key]);

    const start = () => dispatch(showLoading(key));
    const stop = () => dispatch(hideLoading(key));

    const withLoading = async <T>(promise: Promise<T>): Promise<T> => {
        start();
        try {
            return await promise;
        } finally {
            stop();
        }
    };

    return { isLoading, start, stop, withLoading };
}
