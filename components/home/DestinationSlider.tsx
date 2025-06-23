'use client'

import Link from 'next/link'

export default function DestinationSlider() {
    const destinations = [
        { id: 1, name: 'Paris', image: '/dest/paris.jpg', href: '/' },
        { id: 2, name: 'Bali', image: '/dest/bali.jpg', href: '/' },
        { id: 3, name: 'Tokyo', image: '/dest/tokyo.jpg', href: '/' },
        { id: 4, name: 'London', image: '/dest/london.jpg', href: '/' },
    ]

    return (
        <section className="p-4">
            <h2 className="text-lg font-semibold mb-3">Popular Destinations</h2>

            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-10">
                {destinations.map(({ id, name, image, href }) => (
                    <Link
                        key={id}
                        href={href}
                        className="snap-start w-60 flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        {/* Shadow and background must be on a wrapper */}
                        <div className="bg-white shadow-md rounded-xl overflow-hidden relative w-full h-64">
                            <img
                                src={image}
                                alt={name}
                                className="object-cover w-full h-full"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                            {/* Centered white text */}
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold z-10 text-center tracking-wide">
                                {name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

    )
}