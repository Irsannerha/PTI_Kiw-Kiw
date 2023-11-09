"use client"
import Image from "next/image";
import { useState } from 'react';

const Navbars = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-[#FBC380] border-gray-200 dark:bg-gray-900 drop-shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ml-5 mr-5">
                <a href="https://flowbite.com/" className="flex items-center">
                    <Image src="/images/logoNavbar.png" width={80} height={80} className="h-13 mr-3" alt="Logo Kedai Bu Titin" />
                </a>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#6F5D50] rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-[#FFE4C4] dark:hover:bg-[#FFE4C4] dark:focus:ring-[#FFE4C4]"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isDropdownOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
                    <ul className="mb-6 md:mt-4 lg:mb-4 font-medium flex flex-col p-4 md:p-0 mt-4 border bordbg-[#FBC380] rounded-lg lg:bg-[#FBC380] md:bg-[#FBC380] md:flex-row md:space-x-8 md:border-0 bg-white">
                        <li>
                            <a href="#home"  className="block py-2 pl-3 pr-4 text-black hover:text-white rounded hover:bg-[#FBC380] md:p-0 font-bold" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/page/landingPage/loginPegawai" className="block py-2 pl-3 pr-4 text-black hover:text-white rounded hover:bg-[#FBC380] md:p-0 font-bold">Perekrutan Pegawai</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Navbars;
