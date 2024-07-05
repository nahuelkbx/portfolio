"use client";

import React, { useState } from 'react';

type Props = {};

const Navbar: React.FC<Props> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow">
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <a href='javascript:void(0)'>
                            <h2 className='text-2xl font-bold'>NM</h2>
                        </a>
                        <div className='md:hidden'>
                            <button
                                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                onClick={() => { setIsOpen(!isOpen) }}
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 transition-transform duration-300 transform rotate-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 transition-transform duration-300 transform -rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
