import React from 'react'
import Image from 'next/image'
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup'

export default function DashboardSideBar() {
    return (
        <div>
            <aside id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
                aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#FFE4C4]">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/logokedai.png"
                            alt="Logo Kedai"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="flex items-center justify-center -mt-9">
                        <ul className='flex-col'>
                            <li className="absolute inset-x-6 mt-16">
                                <button type="button" className="p-1 flex gap-4 text-center justify-center items-center text-sm font-medium text-gray-900 rounded-lg hover:bg-[#F8A849] hover:text-black focus:z-10 focus:ring-2 focus:ring-[#F8A849] focus:text-black dark:bg-[#F8A849] dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#F8A849] dark:focus:ring-blue-500 dark:focus:text-white">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0002 2.5L17.1252 5.375C16.4381 6.07598 16.0532 7.01843 16.0532 8C16.0532 8.98157 16.4381 9.92402 17.1252 10.625L19.3752 12.875C20.0762 13.5621 21.0186 13.947 22.0002 13.947C22.9818 13.947 23.9242 13.5621 24.6252 12.875L27.5002 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.7501 18.75L4.12508 4.125C3.62618 4.61382 3.22984 5.19727 2.95926 5.84119C2.68869 6.48511 2.54932 7.17654 2.54932 7.875C2.54932 8.57346 2.68869 9.26489 2.95926 9.90881C3.22984 10.5527 3.62618 11.1362 4.12508 11.625L13.2501 20.75C14.1251 21.625 15.7501 21.625 16.7501 20.75L18.7501 18.75ZM18.7501 18.75L27.5001 27.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.625 27.25L10.625 19.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.75 6.25L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Menu Pesanan
                                </button>
                            </li>
                            <li className="absolute inset-x-6 mt-32">
                                <button type="button" className="p-1 flex gap-4 text-center justify-center items-center text-sm font-medium text-gray-900 rounded-lg hover:bg-[#F8A849] hover:text-black focus:z-10 focus:ring-2 focus:ring-[#F8A849] focus:text-black dark:bg-[#F8A849] dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#F8A849] dark:focus:ring-blue-500 dark:focus:text-white">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H7.5C6.17392 18.75 4.90215 19.2768 3.96447 20.2145C3.02678 21.1521 2.5 22.4239 2.5 23.75V26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.5 26.2501V23.7501C27.4992 22.6423 27.1304 21.5661 26.4517 20.6905C25.773 19.8149 24.8227 19.1896 23.75 18.9126" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 3.9126C21.0755 4.18797 22.0288 4.81347 22.7095 5.69049C23.3903 6.5675 23.7598 7.64613 23.7598 8.75635C23.7598 9.86656 23.3903 10.9452 22.7095 11.8222C22.0288 12.6992 21.0755 13.3247 20 13.6001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Perekrutan Pegawai
                                </button>
                            </li>
                            <li className="absolute inset-x-6 mt-48">
                                <button type="button" className="p-1 flex gap-4 text-center justify-center items-center text-sm font-medium text-gray-900 rounded-lg hover:bg-[#F8A849] hover:text-black focus:z-10 focus:ring-2 focus:ring-[#F8A849] focus:text-black dark:bg-[#F8A849] dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#F8A849] dark:focus:ring-blue-500 dark:focus:text-white">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.75 11.25C3.75 10.587 4.01339 9.95107 4.48223 9.48223C4.95107 9.01339 5.58696 8.75 6.25 8.75H23.75C24.413 8.75 25.0489 9.01339 25.5178 9.48223C25.9866 9.95107 26.25 10.587 26.25 11.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.75 13.75H7.5C8.5 13.75 9.5 14.125 10.125 14.875L11.5 16C13.5 18 16.625 18 18.625 16L20 14.875C20.625 14.25 21.625 13.75 22.625 13.75H26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Laporan Pesanan
                                </button>
                            </li>
                            <li className="absolute inset-x-6 mt-64">
                                <button type="button" className="p-1 flex gap-4 text-center justify-center items-center text-sm font-medium text-gray-900 rounded-lg hover:bg-[#F8A849] hover:text-black focus:z-10 focus:ring-2 focus:ring-[#F8A849] focus:text-black dark:bg-[#F8A849] dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#F8A849] dark:focus:ring-blue-500 dark:focus:text-white">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 24.375V5.625C5 4.7962 5.32924 4.00134 5.91529 3.41529C6.50134 2.82924 7.2962 2.5 8.125 2.5H25V27.5H8.125C7.2962 27.5 6.50134 27.1708 5.91529 26.5847C5.32924 25.9987 5 25.2038 5 24.375ZM5 24.375C5 23.5462 5.32924 22.7513 5.91529 22.1653C6.50134 21.5792 7.2962 21.25 8.125 21.25H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Laporan Perekrutan
                                </button>
                            </li>
                            <li className="absolute inset-x-6 bottom-0">
                                <button type="button" id="logOut"
                                    className="w-52 py-1 mb-5 flex items-center justify-center rounded-md bg-[#F02016] text-white">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </aside>
        </div>
    )
}
