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

import TableLaporanPemesanan from "@/app/components/TableLaporanPemesanan"
import TableLihatLaporanPemesanan from "@/app/components/TableLihatLaporanPemesanan"

export default function LaporanPemesanan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');


    const [fileStatus, setFileStatus] = useState("Tidak ada gambar.");

    const handleFileChange = (e: any) => {
        const input = e.target;
        if (input.files.length > 0) {
            setFileStatus(input.files[0].name);
        } else {
            setFileStatus("Tidak ada gambar.");
        }
    };

    const data = [
        { produk: 'Ayam Geprek', jumlah: "1 Qty", harga: "Rp. 10.000" },
        { produk: 'Es Teh Manis', jumlah: "1 Qty", harga: "Rp. 20.000" },
        // Tambahkan data lainnya sesuai kebutuhan
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
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard/TambahItemMenu">
                                    <div className=" flex p-2 gap-2 justify-center items-center m-auto text-center text-white">
                                        <div className="flex flex-col justify-center">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 23.75L6.25 15L15 6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M23.75 15H6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <Link href="/page/dashboard/LaporanPemesanan">
                                            <div className="flex items-center text-black">
                                                Kembali
                                            </div>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className=" text-black text-xl font-normal font-['Montserrat'] leading-10">
                            <div className="div flex-shrink-0">No Invoice</div>
                            <div className="div flex-shrink-0">Nama Pemesan</div>
                            <div className="div flex-shrink-0">Tanggal</div>
                        </div>
                        <div className="text-black text-xl font-normal font-['Montserrat'] leading-10 ml-5">
                            <div className="div flex-shrink-0">: 001 </div>
                            <div className="div flex-shrink-0">: Hasan</div>
                            <div className="div flex-shrink-0">: 23/10/2023</div>
                        </div>
                    </div>
                    <TableLihatLaporanPemesanan data={data} />
                </div>
            </div>
        </>
    )
}