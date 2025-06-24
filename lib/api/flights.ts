// lib/api/flights.ts
import api from './axios';

export async function searchFlights(params: {
  from: string;
  to: string;
  date: string;
}) {
  const res = await api.get('/flights/search', { params });
  return res.data;
}

export async function getFlightDetails(flightId: string) {
  const res = await api.get(`/flights/${flightId}`);
  return res.data;
}
