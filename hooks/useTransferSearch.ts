'use client';
import { useState, useEffect } from 'react';
import { search } from '@/lib/api/transfer';
import toast from 'react-hot-toast';
import { useLoading } from './useLoading';

export function useTransferSearch() {
    // const [transfers, setTransfers] = useState([]);
    // const [loading, setLoading] = useState(true);

    // toast.error('Something unexpected happened');

    const { withLoading } = useLoading('transfer');

    // const searchTransfer = async (params: any) => {
    //     return await withLoading(search(params));
    // };
    const searchTransfer = async (params: any) => {
        try {
            const result = await withLoading(search(params));
            return result;
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message || error?.message || 'Transfer search failed'
            );
            throw error; // rethrow if you want caller to still catch it
        }
    };

    return { searchTransfer };
}
