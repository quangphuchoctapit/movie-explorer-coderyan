'use client'
import Link from 'next/link';
import { useState } from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onCloseSideBar = () => {
        setIsOpen(false);
    };

    const navItems = [
        { href: '/', title: 'Home' },
        { href: '/now-playing', title: 'Now playing' },
        { href: '/popular', title: 'Popular Movies' },
        { href: '/top-rated', title: 'Top Rated' },
        { href: '/upcoming', title: 'Upcoming' },
    ];

    return (
        <div className={`fixed ${isOpen ? 'left-0 duration-300 z-50' : '-left-64 duration-300'} transition-transform duration-300 ease-in-out bg-gray-800 h-full w-64 text-white z-50`}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 mt-2 fixed left-0">{isOpen ? 'X' : 'Menu'}</button>
            {isOpen && (
                <div className="p-4 my-8">
                    <nav className="flex flex-col items-start">
                        {navItems.map((item) => (
                            <Link className='p-3 text-xl hover:bg-gray-600 w-full hover:duration-200' href={item.href} key={item.href} onClick={onCloseSideBar}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default SideBar;
