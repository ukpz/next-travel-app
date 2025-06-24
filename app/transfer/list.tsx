'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilters,
  incrementPage,
  fetchTransfers,
} from '@/lib/store/transferSlice';
import type { RootState, AppDispatch } from '@/lib/store';

export default function TransferListPage(){
    const dispatch = useDispatch<AppDispatch>();
  const { results, loading } = useSelector((state: RootState) => state.transfer);

  const handleSubmit = async (filters: any) => {
    dispatch(setFilters(filters));
    await dispatch(fetchTransfers()); // triggers thunk
  };

  const handleLoadMore = async () => {
    dispatch(incrementPage());
    await dispatch(fetchTransfers());
  };

    return (
    <>

      {results.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}

      <button disabled={loading} onClick={handleLoadMore}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
}