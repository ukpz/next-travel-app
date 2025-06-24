'use client';

import LandingHeader from '@/components/transfer/landing/LandingHeader';
import RecentLocArea from '@/components/transfer/landing/RecentLocArea';
import SearchBox from '@/components/transfer/landing/SearchBox';


export default function TransferLanding() {


    return (
        <div className="min-h-screen relative">
            {/* Background with gradient */}
            <div
                className="absolute inset-0 bg-contain bg-center"
                style={{
                    backgroundImage: 'url("/city-map.jpg")',
                    opacity: 0.5
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                <LandingHeader />

                {/* Form Box */}
                <SearchBox />

                {/* Recent Locations */}
                <RecentLocArea />
            </div>
        </div>
    );
}