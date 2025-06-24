'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { LOADING_KEYS, LoadingKey } from '@/lib/constants/loadingKeys';
import { motion } from 'framer-motion';
import Spinner from './spinners/Spinner';
import PlaneLoader from './spinners/PlaneLoader';
import AuthLoader from './spinners/AuthLoader';
import BookingLoader from './spinners/BookingLoader';
import TransferLoader from './spinners/TransferLoader';

const LOADING_COMPONENTS: Record<LoadingKey, React.ReactNode> = {
    main: <Spinner label="Loading App..." />,
    auth: <AuthLoader />,
    flight: <PlaneLoader />,
    booking: <BookingLoader />,
    transfer: <TransferLoader/>
};

export default function LoadingScreen() {
  const loadingState = useSelector((state: RootState) => state.loading);

  const activeKeys = LOADING_KEYS.filter(key => loadingState[key]);

  if (activeKeys.length === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 space-y-4 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {activeKeys.map(key => (
        <div key={key}>{LOADING_COMPONENTS[key]}</div>
      ))}
    </motion.div>
  );
}
