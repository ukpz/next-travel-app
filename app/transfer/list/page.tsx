'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilters,
  incrementPage,
  fetchTransfers,
} from '@/lib/store/transferSlice';
import type { RootState, AppDispatch } from '@/lib/store';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';


export default function TransferListPage() {
  const router = useRouter();
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
      <div className=" flex justify-between items-center bg-white p-4">
        <ArrowLeftIcon className="w-6 h-6" onClick={()=>router.back()}/>
        <div>
          <div className="text-xl font-medium text-black dark:text-black">Transfer List</div>
          {/* <p className="text-gray-500 dark:text-gray-400">You have a new message!</p> */}
        </div>
        <div>

        </div>
        {/* <Image className="size-15 shrink-0" src="/avatar.jpg" alt="avatar" width={50} height={50} /> */}
      </div>
      {loading && <div>loading....</div>}

      {results.vehicles && results.vehicles.map((item: any, i: number) => (
        <div key={i}>{item.car_model}</div>
      ))}

      {/* <button disabled={loading} onClick={handleLoadMore}>
        {loading ? 'Loading...' : 'Load More'}
      </button> */}
    </>
  );
}