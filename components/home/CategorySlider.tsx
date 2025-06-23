'use client'

import Link from 'next/link'

export default function CategorySlider() {
    const categories = [
        { id: 1, name: 'Transfer', icon: '/categories/car.png', href: '/transfer', bg: 'bg-blue-50' },
        { id: 5, name: 'Tour & Activities', icon: '/categories/activities.png', href: '/', bg: 'bg-pink-50' },
        { id: 4, name: 'Flight', icon: '/categories/flight.png', href: '/', bg: 'bg-sky-50' },
        { id: 2, name: 'Airport Transfer', icon: '/categories/airport-transfer.png', href: '/', bg: 'bg-yellow-50' },
        { id: 3, name: 'Car Rental', icon: '/categories/car-rent.png', href: '/', bg: 'bg-green-50' },
        { id: 6, name: 'Hotels', icon: '/categories/hotel.png', href: '/', bg: 'bg-purple-50' },
        { id: 7, name: 'Ferries', icon: '/categories/boat.png', href: '/', bg: 'bg-indigo-50' },
    ]

    return (
        <main className="p-4">
            <h2 className="text-lg font-semibold mb-3">Explore Categories</h2>

            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-3">
                {categories.map(({ id, name, icon, href, bg }) => (
                    <Link
                        href={href}
                        key={id}
                        className={`snap-start w-28 h-28 ${bg} rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-sm text-gray-800
              transition-transform transform hover:scale-105 active:scale-95 duration-200 ease-in-out`}
                    >
                        <img src={icon} alt={name} className="w-8 h-8 mb-3" />
                        <span className="text-center leading-tight">{name}</span>
                    </Link>
                ))}
            </div>
        </main>
    )
}