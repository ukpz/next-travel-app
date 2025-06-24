// lib/api/flights.ts
import api from './axios';

export async function search(params: {
  from: string;
  to: string;
  date: string;
}) {
  console.log('search api calling...');
  
  const res = await api.get('/transfers/search', { params });
  return res.data;
}

// export async function getFlightDetails(flightId: string) {
//   const res = await api.get(`/flights/${flightId}`);
//   return res.data;
// }
