// components/BottomNav.js
'use client'
import { HomeIcon, UserIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconSolid, UserIcon as UserIconSolid, ClipboardDocumentListIcon as ClipboardDocumentListIconSolid } from '@heroicons/react/24/solid'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNav = () => {
    const pathname = usePathname()

    const tabs = [
        { href: '/', label: 'Home', icon: HomeIcon, iconSolid: HomeIconSolid },
        { href: '/bookings', label: 'Bookings', icon: ClipboardDocumentListIcon, iconSolid: ClipboardDocumentListIconSolid },
        { href: '/profile', label: 'Profile', icon: UserIcon, iconSolid: UserIconSolid },
    ]

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-inner">
            <div className="flex justify-around items-center h-16">
                {tabs.map(({ href, label, icon: Icon, iconSolid: IconSolid }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center text-xs transition-all duration-300 ${isActive ? 'text-blue-600 scale-110' : 'text-gray-600'
                                }`}
                        >
                            {isActive ? <IconSolid className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                            <span>{label}</span>
                        </Link>
                    )
                })}
                {/* <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                    <HomeIcon className="w-6 h-6" />
                    <span className="text-xs">Home</span>
                </Link>
                <Link href="/search" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                    <ClipboardDocumentListIcon className="w-6 h-6" />
                    <span className="text-xs">Bookings</span>
                </Link>
                <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                    <UserIcon className="w-6 h-6" />
                    <span className="text-xs">Profile</span>
                </Link> */}
            </div>
        </nav>
    )
}

export default BottomNav
