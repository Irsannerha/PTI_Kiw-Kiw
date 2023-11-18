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
import axios from 'axios';

interface MenuItem {
    id?: number;
    nama?: string;
    harga?: string;
    stok?: string;
    image?: string;
}

export default function KelolaMenuPemesanan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [menuMinuman, setMenuMinuman] = useState<MenuItem[]>([]);
    const [menuMakanan, setMenuMakanan] = useState<MenuItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMinuman = await axios.get<MenuItem[]>('/api/menu/minuman');
                const responseMakanan = await axios.get<MenuItem[]>('/api/menu/makanan');

                if (responseMinuman.status === 200 && responseMakanan.status === 200) {
                    setMenuMinuman(responseMinuman.data);
                    setMenuMakanan(responseMakanan.data);
                } else {
                    console.error('Error fetching menu data:', responseMinuman.status, responseMakanan.status);
                }
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');

    const menuMinumandumy = [
        { id: 1, nama: "Es Teh", harga: "10000", stok: "10", image: '/images/esTeh.png' },
        { id: 2, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 3, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 4, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 5, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 6, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 7, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 8, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
        { id: 9, nama: "Es Teh", harga: "10000", stok: "100", image: '/images/esTeh.png' },
    ];

    const menuMakanandumy = [
        { id: 1, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 2, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 3, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 4, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 5, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 6, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 7, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 8, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 9, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
    ];


    const [showAlertHapusData, setShowAlertHapusData] = useState(false);
    const handleFromDelete = async () => {
        setShowAlertHapusData(true)
        setTimeout(() => {
            setShowAlertHapusData(false);
        }, 3000);
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

                    <div className="flex justify-end -mt-4 gap-4">
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard/Kategori">
                                    <div className=" flex p-2.5 gap-2 justify-center items-center m-auto text-center text-black">
                                        <div className="flex items-center">
                                            Kategori
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard/TambahItemMenu">
                                    <div className=" flex p-2.5 gap-2 justify-center items-center m-auto text-center text-black">
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
                                {menuMakanandumy.map(order => (
                                    <div className="h-auto max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className="flex flex-col items-center justify-center m-auto w-20 h-20 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={120} height={120} className="m-0 mt-1" /></div>
                                                <div className="text-[14px] ml-2  font-medium text-gray-900 dark:text-white">{order.nama}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {order.harga}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {order.stok}</span></div>
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
                                <div className="absolute mt-[30%] ml-[70%]">
                                    <AlertHapusData />
                                </div>
                            )}
                            <div className="ml-[52%] m-2 text-[24px] absolute">Minuman</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl">
                                {menuMinumandumy.map(order => (
                                    <div className="h-auto max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className=" w-20 h-20 mt-2 mb-2 rounded-full shadow-lg flex flex-col items-center m-auto">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={40} height={40} className="" /></div>
                                                <div className="text-[14px] ml-2 font-medium text-gray-900 dark:text-white">{order.nama}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {order.harga}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {order.stok}</span></div>
                                                <div className="flex mt-1 gap-0.5 w-full">
                                                    <a href="/page/dashboard/EditItemMenu" className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></a>
                                                    <a onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></a>

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