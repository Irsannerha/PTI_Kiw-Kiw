"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';

import Image from "next/image";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import SvgEditKelolaPemesanan from "@/app/components/SvgEditKelolaPemesanan"
import SvgDeleteKelolaPemesanan from "@/app/components/SvgDeleteKelolaPemesanan"
import AlertHapusData from "@/app/components/AlertHapusData"
import Link from "next/link";

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


    const [showAlertHapusData, setShowAlertHapusData] = useState(false);
    const handleFromDelete = async () => {
        setShowAlertHapusData(true)
        setTimeout(() => {
            setShowAlertHapusData(false);
        }, 3000); // Example: Hide alert after 3 seconds
    }

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
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard">
                                    <div className=" flex p-2 gap-2 justify-center items-center m-auto text-center text-white">
                                        <div className="flex flex-col justify-center">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 23.75L6.25 15L15 6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M23.75 15H6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <div className="flex items-center text-black">
                                            Kembali
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard/TambahItemMenu">
                                    <div className=" flex p-2.5 gap-2 justify-center items-center m-auto text-center text-white">
                                        <div className="flex flex-col justify-center">
                                            +
                                        </div>
                                        <div className="flex items-center">
                                            Tambah Item
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="div">
                        <div className="flex justify-between relative ">
                            <div className="m-2 text-[24px] absolute">Makanan</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl">
                                {menuMakanan.map(order => (
                                    <div className="h-auto max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className="flex flex-col items-center justify-center m-auto w-20 h-20 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={120} height={120} className="m-0 mt-1" /></div>
                                                <div className="text-[14px] ml-2  font-medium text-gray-900 dark:text-white">Ayam Geprek</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. 10.000</span>
                                                <div className="flex mt-1 gap-0.5  w-full">
                                                    <a href="/page/dashboard/EditItemMenu" className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></a>
                                                    <a onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {showAlertHapusData && (
                                <div className="absolute mt-[30%] ml-[60%] w-full">
                                    <AlertHapusData />
                                </div>
                            )}
                            <div className="ml-[52%] m-2 text-[24px] absolute">Minuman</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl">
                                {menuMinuman.map(order => (
                                    <div className="h-auto max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className=" w-20 h-20 mt-2 mb-2 rounded-full shadow-lg flex flex-col items-center m-auto">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={40} height={40} className="" /></div>
                                                <div className="text-[14px] ml-2 font-medium text-gray-900 dark:text-white">Ayam Geprek</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. 10.000</span>
                                                <div className="flex mt-1 gap-0.5 w-full">
                                                    <a href="/page/dashboard/EditItemMenu" className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></a>
                                                    <a onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {showAlertHapusData && (
                                <div className="absolute mt-[30%] ml-[60%] w-full">
                                    <AlertHapusData />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}