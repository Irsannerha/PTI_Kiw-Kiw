"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";


export default function TambahItemMenu() {
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
                                <Link href="/page/dashboard/TambahItemMenu">
                                    <div className=" flex p-2 gap-2 justify-center items-center m-auto text-center text-white">
                                        <div className="flex flex-col justify-center">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 23.75L6.25 15L15 6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M23.75 15H6.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <Link href="/page/dashboard/KelolaMenuPemesanan">
                                            <div className="flex items-center text-black">
                                                Kembali
                                            </div>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 w-full text-[32px]">Tambah Pesanan</div>
                    <div className="text-[24px]">Nama Item</div>
                    <Input
                        onChange={(e) => { console.log("test") }}
                        placeholder="Masukkan nama item"
                        required
                        type="text"
                    />
                    <div className="justify-between items-center grid grid-cols-3 md:grid-cols-3 gap-2 w-full mt-2">
                        <div className="w-[175px]">
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
                        <div className="-ml-[30%] w-[100%]">
                            <div className="text-[24px]">Kategori</div>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <select id="countrssies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Pilih Kategori</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className="-ml-[60%]">
                            <div className="text-[24px]">Stok</div>
                            <div className="flex gap-3">
                                <Input
                                    onChange={(e) => { console.log("test") }}
                                    placeholder="100"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="gap-2 w-full mt-2">
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
                                        className="bg-[#FA8F21] hover:bg-[#8B6A56] text-black hover:text-black inline-block mr-2 px-4 py-2 h-9 rounded-md cursor-pointer"
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
                </div>
                <Link href="/page/dashboard">
                    <button
                        type="button"
                        // onClick={handleFormSubmit}
                        className="-ml-32 mt-[35%] absolute text-black w-[8%] bg-[#F8A849] hover:bg-[#8B6A56] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none flex justify-center items-center shadow-lg"
                    >
                        Simpan
                    </button>
                </Link>
            </div >

        </>
    )
}


