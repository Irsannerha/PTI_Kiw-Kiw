"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';

import Image from "next/image";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import SvgEditKelolaPemesanan from "@/app/components/SvgEditKelolaPemesanan"
import SvgDeleteKelolaPemesanan from "@/app/components/SvgDeleteKelolaPemesanan"

export default function KelolaMenuPemesanan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');

    const menuMinuman = [
        { id: 1, image: '/images/esTeh.png' },
        { id: 2, image: '/images/esTeh.png' },
        { id: 3, image: '/images/esTeh.png' },
        { id: 4, image: '/images/esTeh.png' },
        { id: 5, image: '/images/esTeh.png' },
        { id: 6, image: '/images/esTeh.png' },
        { id: 7, image: '/images/esTeh.png' },
        { id: 8, image: '/images/esTeh.png' },
        { id: 9, image: '/images/esTeh.png' },
    ];

    const menuMakanan = [
        { id: 1, image: '/images/ayamGeprek.png' },
        { id: 2, image: '/images/ayamGeprek.png' },
        { id: 3, image: '/images/ayamGeprek.png' },
        { id: 4, image: '/images/ayamGeprek.png' },
        { id: 5, image: '/images/ayamGeprek.png' },
        { id: 6, image: '/images/ayamGeprek.png' },
        { id: 7, image: '/images/ayamGeprek.png' },
        { id: 8, image: '/images/ayamGeprek.png' },
        { id: 9, image: '/images/ayamGeprek.png' },
    ];
    return (
        <>
            <div style={{ display: 'flex' }}>
                <DashboardSideBar />
                <div style={{ marginLeft: '280px', padding: '20px' }} className="w-[77%]">
                    <div className="flex justify-between">
                        <div className="text-start justify-start items-start">
                            <div className="mt-4 mb-4 w-44 bg-[#FFE4C4] shadow-lg rounded-lg">
                                <div className="flex p-3">
                                    <div className="flex flex-col justify-center">
                                        <SvgDashboardKalender />
                                    </div>
                                    <div className="w-full">
                                        <div className="justify-end items-end flex">{formattedDate}</div>
                                        <div className="justify-end items-end flex">{formattedTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4 w-52 bg-[#FFE4C4] shadow-lg rounded-lg">
                                <div className="flex p-3 gap-5">
                                    <div className="w-[80%] flex flex-col justify-center">
                                        Selamat Datang, Admin
                                    </div>
                                    <div className="w-[20%] flex justify-end items-end">
                                        <SvgDashboardProfile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between -mt-4 ">
                        <div className="text-start justify-start items-start">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg">
                                <div className="flex p-3 gap-5 justify-center items-center m-auto text-center text-white">
                                    <div className="flex flex-col justify-center">
                                        +
                                    </div>
                                    <div className="flex items-center">
                                        Tambah Item
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="div">
                        <div className="flex justify-between relative ">
                            <div className="m-2 text-[24px] absolute">Makanan</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2">
                                {menuMakanan.map(order => (
                                    <div className="h-auto max-w-full rounded-lg bg-white">
                                        <div className="w-full max-w-sm rounded-lg shadow">
                                            <div className="flex flex-col items-center">
                                                <div className="w-20 h-20 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={96} height={96} /></div>
                                                <div className="text-[14px] font-medium text-gray-900 dark:text-white">Ayam Geprek</div>
                                                <span className="text-[14px] text-gray-500 dark:text-gray-400">Rp. 10.000</span>
                                                <div className="flex space-x-1 md:mt-2 w-full">
                                                    <a href="#" className="px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg"><SvgEditKelolaPemesanan /></a>
                                                    <a href="#" className=" px-4 py-2 text-sm font-medium text-center text-gray-900 rounded-lg  bg-[#F30101]  w-[50%] flex justify-center items-center rounded-r-lg"><SvgDeleteKelolaPemesanan /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="ml-[52%] m-2 text-[24px] absolute">Minuman</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2">
                                {menuMinuman.map(order => (
                                    <div className="h-auto max-w-full rounded-lg bg-white">
                                        <div className="w-full max-w-sm rounded-lg shadow">
                                            <div className="flex flex-col items-center">
                                                <div className="w-20 h-20 mt-2 mb-2 rounded-full shadow-lg flex flex-col items-center">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={40} height={40} /></div>
                                                <div className="text-[14px] font-medium text-gray-900 dark:text-white">Ayam Geprek</div>
                                                <span className="text-[14px] text-gray-500 dark:text-gray-400">Rp. 10.000</span>
                                                <div className="flex space-x-1 md:mt-2 w-full">
                                                    <a href="#" className="px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg"><SvgEditKelolaPemesanan /></a>
                                                    <a href="#" className=" px-4 py-2 text-sm font-medium text-center text-gray-900 rounded-lg  bg-[#F30101]  w-[50%] flex justify-center items-center rounded-r-lg"><SvgDeleteKelolaPemesanan /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}