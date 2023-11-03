"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"

export default function PerekrutanPegawai() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');
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
                                {/* <Link href="/page/dashboard">
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
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-[32px]">Perekrutan Pegawai</div>
                    <div className="flex justify-center mt-[5%]">
                        <Link href="/page/dashboard/PrekTahap1">
                            <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M125 50H62.5C55.5964 50 50 55.5964 50 62.5V125C50 131.904 55.5964 137.5 62.5 137.5H125C131.904 137.5 137.5 131.904 137.5 125V62.5C137.5 55.5964 131.904 50 125 50Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25 100C18.125 100 12.5 94.375 12.5 87.5V25C12.5 18.125 18.125 12.5 25 12.5H87.5C94.375 12.5 100 18.125 100 25" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div className="flex pb-4">
                                    <div className="justify-center items-center flex text-center m-auto text-white">
                                        Tahap 1
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/page/dashboard/PrekTahap2">
                            <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M75 93.75L87.5 106.25L112.5 81.25" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M125 50H62.5C55.5964 50 50 55.5964 50 62.5V125C50 131.904 55.5964 137.5 62.5 137.5H125C131.904 137.5 137.5 131.904 137.5 125V62.5C137.5 55.5964 131.904 50 125 50Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25 100C18.125 100 12.5 94.375 12.5 87.5V25C12.5 18.125 18.125 12.5 25 12.5H87.5C94.375 12.5 100 18.125 100 25" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </div>
                                <div className="flex pb-4">
                                    <div className="justify-center items-center flex text-center m-auto text-white">
                                        Tahap 2
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}


