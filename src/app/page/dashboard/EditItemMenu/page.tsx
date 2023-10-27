"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";


export default function EditItemMenu() {
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

                    <div className="mb-5 w-full text-[32px]">Ubah Pesanan</div>
                    <div className="text-[24px]">Nama Item</div>
                    <Input
                        onChange={(e) => { console.log("test") }}
                        placeholder="Masukkan nama item"
                        required
                        type="text"
                    />
                    <div className="justify-between items-center grid grid-cols-3 md:grid-cols-3 gap-2 w-full p-2 mt-2">
                        <div className="div">
                            <div className="text-[24px]">Harga</div>
                            <div className="flex gap-3">
                                <div className="text-center flex justify-center items-center">Rp.</div>
                                <Input
                                    onChange={(e) => { console.log("test") }}
                                    placeholder="10.000"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="-ml-[10%] w-[50%]">
                            <div className="text-[24px]">Gambar</div>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div className="inline-block text-left  w-96 relative rounded-md text-[14px]">
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            name="imageFile"
                                            className="absolute opacity-0 cursor-pointer "
                                            onChange={handleFileChange}
                                        />
                                        <label
                                            htmlFor="imageUpload"
                                            className="bg-[#FA8F21] hover:bg-dodgerblue text-white hover:text-white inline-block mr-2 px-4 py-1.5 h-9 rounded-md cursor-pointer"
                                        >
                                            Masukkan Gambar
                                        </label>
                                        <span id="imageStatus" className="text-black">
                                            {fileStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-[20%]">
                            <div className="text-[24px]">Stok Item</div>
                            <div className="flex gap-3">
                                <div className="flex p-2 rounded">
                                    <label className="relative inline-flex items-center w-full cursor-pointer">
                                        {/* <Input type="checkbox" value="" className="sr-only peer"> */}
                                        <input
                                            type="checkbox"
                                            id="imageUpload"
                                            name="imageFile"
                                            className="sr-only peer"
                                            onChange={(e) => { console.log("test") }}
                                        />
                                        <div className="w-12 h-5 bg-[#F30101] peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#22EE1E]"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Tidak Tersedia</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/page/dashboard">
                    <button
                        type="button"
                        // onClick={handleFormSubmit}
                        className="-ml-32 mt-[35%] absolute text-white w-[8%] bg-[#F8A849] hover:bg-[#8B6A56] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none flex justify-center items-center"
                    >
                        Simpan
                    </button>
                </Link>
            </div >

        </>
    )
}


