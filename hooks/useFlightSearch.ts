'use client';
import { useState, useEffect } from 'react';
import { searchFlights } from '@/lib/api/flights';
import { useLoading } from '@/hooks/useLoading';

export function useFlightSearch(params: any) {
    const flightLoading = useLoading('flight');

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        flightLoading.start();
        searchFlights(params).then(res => {
            setFlights(res);
        });
        flightLoading.stop();
    }, [params]);

    return flights;
}
