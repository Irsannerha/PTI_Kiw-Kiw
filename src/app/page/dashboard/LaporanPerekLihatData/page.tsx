"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"

export default function LaporanPerekLihatData() {
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
                                {/* <Link href="/page/dashboard/TambahItemMenu"> */}
                                <Link href="/page/dashboard/LaporanPerekrutan">
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
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="mb-5 w-full text-[32px]">Perekrutan Pegawai Tahap 1</div> */}
                    <div className="flex justify-start">
                        <div className=" text-black text-xl font-normal font-['Montserrat'] leading-10">
                            <div className="div flex-shrink-0">NIK</div>
                            <div className="div flex-shrink-0">Nama</div>
                            <div className="div flex-shrink-0">No. HP</div>
                            <div className="div flex-shrink-0">Email</div>
                            <div className="div flex-shrink-0">Alamat</div>
                            <div className="div flex-shrink-0">Jenis Kelamin</div>
                            <div className="div flex-shrink-0">Usia</div>
                            <div className="div ml-auto">Ijazah</div>
                            <div className="div ml-auto mt-4">Status</div>
                        </div>
                        <div className="text-black text-xl font-normal font-['Montserrat'] leading-10 ml-5">
                            <div className="div flex-shrink-0">: 1234567890123456 </div>
                            <div className="div flex-shrink-0">: Muhammad Saiful</div>
                            <div className="div flex-shrink-0">: 08123456789123</div>
                            <div className="div flex-shrink-0">: example@gmail.com</div>
                            <div className="div flex-shrink-0">: Bandar Lampung</div>
                            <div className="div flex-shrink-0">: Pria</div>
                            <div className="div flex-shrink-0">: 21 Tahun</div>
                            <div className="div ml-auto">:
                                <div className="-mt-10 ml-3 mb-4 w-[50%] bg-[#F8A849] shadow-lg rounded-xl hover:bg-[#C79618]">
                                    {/* <Link href="/page/dashboard/TambahItemMenu"> */}
                                    <div className="flex gap-2 justify-center items-center m-auto text-center text-black">
                                        <div className="flex flex-col justify-center">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 17.7083V3.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.25 11.458L12.5 17.708L18.75 11.458" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19.7913 21.875H5.20801" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center text-[16px]">
                                            Unduh
                                        </div>
                                        {/* <div className="div">
                                <select
                                    id="filterType"
                                    className="border rounded-md"
                                    value={filterValue}
                                    onChange={(e) => setFilterValue(e.target.value)}
                                >
                                    <option value="ando" >Ando</option>
                                    <option value="andoy">
                                        Andoy
                                    </option>
                                    <option value="minggu">Minggu</option>
                                    <option value="bulan">Bulan</option>
                                </select>
                            </div> */}
                                    </div>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="mt-2">: Diterima</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}