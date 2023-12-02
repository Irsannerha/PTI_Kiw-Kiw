'use client';

import { HiEye } from 'react-icons/hi';
import { RiErrorWarningLine } from "react-icons/ri";
import { Alert } from 'flowbite-react';
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
        { id: 1, nama: "Es Teh", harga: "5000", stok: "10", image: '/images/esTeh.png' },
        { id: 2, nama: "Es Jeruk", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 3, nama: "Kopi", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 4, nama: "Teh Anget", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 5, nama: "Jus Buah Naga", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 6, nama: "Jus Melon", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 7, nama: "Jus Mangga", harga: "5000", stok: "100", image: '/images/esTeh.png' },
        { id: 8, nama: "Es Tawar", harga: "3000", stok: "100", image: '/images/esTeh.png' },
    ];

    const menuMakanandumy = [
        { id: 1, nama: "Ayam Bakar", harga: "13000", stok: "100", image: '/images/menu/ayamBakar.jpeg' },
        { id: 2, nama: "Ayam Geprek ", harga: "12000", stok: "100", image: '/images/menu/ayamGeprek2.jpeg' },
        { id: 3, nama: "Kwetiaw", harga: "13000", stok: "100", image: '/images/menu/ayamBakar.jpeg' },
        { id: 4, nama: "Nasi Kotak", harga: "12000", stok: "100", image: '/images/menu/nasiKotakPaketLengkap.jpeg' },
        { id: 5, nama: "Nasi Urap", harga: "6000", stok: "100", image: '/images/menu/nasiUrapTelor.jpeg' },
        { id: 6, nama: "Nasi Urap + Telor", harga: "10000", stok: "100", image: '/images/menu/nasiUrapTelor.jpeg' },
        { id: 7, nama: "Ayam Geprek", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 8, nama: "Seblak", harga: "10000", stok: "100", image: '/images/menu/seblak.jpeg' },
        { id: 9, nama: "Nila Bakar", harga: "13000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 10, nama: "Nila Goreng", harga: "13000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 11, nama: "Rice Bowl Cumi", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 12, nama: "Rice Ayam Mentega", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 13, nama: "Rice Bowl Udang Saos", harga: "10000", stok: "100", image: '/images/ayamGeprek.png' },
        { id: 14, nama: "Paket Bento Nasi Goreng", harga: "10000", stok: "100", image: '/images/menu/paketBentoNasgor.jpeg' },
        { id: 15, nama: "Ayam Penyet Cabe Ijo", harga: "13000", stok: "100", image: '/images/menu/ayamPenyet.jpeg' },
    ];

    const [showAlertHapusData, setShowAlertHapusData] = useState(false);
    const handleFromDelete = async () => {
        setShowAlertHapusData(true)
        setTimeout(() => {
            setShowAlertHapusData(false);
        }, 3000);
    }

    function ExampleAdditionalContent() {
        const [isVisible, setIsVisible] = useState(true);

        const handleClose = () => {
            setIsVisible(false);
        };
        return (
            <>
                <div className="flex justify-center items-center m-auto w-full mt-2">
                    <Link href='/page/dashboard' className="bg-[#F30101] hover:bg-[#950000] w-[20%] py-1 text-white rounded-lg mx-1 text-center"> Ya</Link>
                    <button onClick={handleClose} className="bg-[#C79618] hover:bg-[#F8A849] w-[20%] py-1 text-white rounded-lg mx-1">Tidak</button>
                </div>
            </>
        );
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
                                    <div className="max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className="flex flex-col items-center justify-center m-auto w-20 h-20 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={120} height={120} className="m-0 mt-4 rounded-full" /></div>
                                                <div className="text-[14px] ml-2  font-medium text-gray-900 dark:text-white">{order.nama}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {order.harga}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {order.stok}</span></div>
                                                <div className="flex mt-1 gap-0.5  w-full">
                                                    <Link href="/[EditItemMenu]" as={`/page/dashboard/KelolaMenuPemesanan/${order.id}`} className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></Link>
                                                    <Link onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {showAlertHapusData && (
                                <div className="absolute mt-[30%] ml-[70%] bg-white">
                                    <Alert additionalContent={<ExampleAdditionalContent />} color="warning" icon={RiErrorWarningLine} className='text-[#F8A849]'>
                                        <span className="font-medium">Apakah anda yakin untuk menghapus data ini?</span>
                                    </Alert>
                                </div>
                            )}
                            <div className="ml-[52%] m-2 text-[24px] absolute">Minuman</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl h-full">
                                {menuMinumandumy.map(order => (
                                    <div className="max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className=" w-20 h-20 mt-2 mb-2 rounded-full shadow-lg flex flex-col items-center m-auto">
                                                    <Image src={order.image} alt={`order-${order.id}`} width={40} height={40} className="" /></div>
                                                <div className="text-[14px] ml-2 font-medium text-gray-900 dark:text-white">{order.nama}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {order.harga}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {order.stok}</span></div>
                                                <div className="flex mt-1 gap-0.5 w-full">
                                                    {/* <a href="/page/dashboard/EditItemMenu" className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></a> */}
                                                    <Link href="/[EditItemMenu]" as={`/page/dashboard/KelolaMenuPemesanan/${order.id}`} className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849]  w-[50%] flex justify-center items-center "><SvgEditKelolaPemesanan /></Link>
                                                    {/* <a onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></a> */}
                                                    <Link onClick={handleFromDelete} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-[50%] flex justify-center items-center rounded-br-lg"><SvgDeleteKelolaPemesanan /></Link>
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