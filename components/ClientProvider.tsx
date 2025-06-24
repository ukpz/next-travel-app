'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import LoadingScreen from '@/components/LoadingScreen';
import { Toaster } from 'react-hot-toast';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />
            <LoadingScreen />
            {children}
        </Provider>
    );
}
