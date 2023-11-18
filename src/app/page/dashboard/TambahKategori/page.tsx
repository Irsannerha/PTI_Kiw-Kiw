"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";
import AlertInputData from "@/app/components/AlertInputData";
import AlertSimpanData from "@/app/components/AlertSimpanData";
import axios from "axios";

interface DataFecth {
    nama: string;
}

export default function TambahKategori() {

    const initialData: DataFecth = {
        nama: "",
    };

    const [nama, setnama] = useState(initialData.nama);

    const [isnamaEmpty, setIsnamaEmpty] = useState(false);
    const [showAlertInputData, setShowAlertInputData] = useState(false);
    const [showAlertSimpanData, setShowAlertSimpanData] = useState(false);

    const handleFormSubmit = async () => {
        if (!nama) {
            setIsnamaEmpty(true);
        } else {
            setIsnamaEmpty(false);
        }
        if (isnamaEmpty) {
            setShowAlertInputData(true);
            setTimeout(() => {
                setShowAlertInputData(false);
            }, 5000);
        } else if (nama) {
            setShowAlertSimpanData(true);
            setTimeout(() => {
                setShowAlertSimpanData(false);
            }, 5000);
        }

        if (nama) {
            const userData = { nama };
            console.log('User Data:', JSON.stringify(userData));
            try {
                const response = await axios.post('/api/login', { nama });
                if (response.status === 200) {
                    const data = response.data;
                    console.log('Login successful:', data);
                    setShowAlertSimpanData(true);
                    setTimeout(() => {
                        setShowAlertSimpanData(false);
                    }, 5000);
                    window.location.href = '/page/dashboard';
                } else {
                    console.error('Login Gagal:', response.status);
                    alert('Login Gagal');
                }
            } catch (error) {
                console.error('Error Login:', error);
                alert('Tidak Dapat Data API');
            }
        }
    };

    const handleReset = () => {
        setnama("");
        setIsnamaEmpty(false);
    };

    // Batass
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
                                <Link href="/page/dashboard/Kategori">
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
                    </div>

                    <div className="mb-2 w-full text-[32px]">Tambah Kategori</div>
                    <div className="text-[24px]">Nama Kategori</div>
                    <Input
                        onChange={(e) => { setnama(e.target.value); }}
                        placeholder="Makanan"
                        required
                        type="text"
                    />
                </div>
                {showAlertInputData && (
                    <div className="absolute mt-[40%] ml-[72%]">
                        <AlertInputData />
                    </div>
                )}
                {showAlertSimpanData && (
                    <div className="absolute mt-[40%] ml-[75%]">
                        <AlertSimpanData />
                    </div>
                )}

                {/* <Link href="/page/dashboard"> */}
                <div className="div">
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        // onClick={handleFormSubmit}
                        className="-ml-32 mt-[35%] absolute text-black w-[8%] bg-[#F8A849] hover:bg-[#8B6A56] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none flex justify-center items-center shadow-lg"
                    >
                        Simpan
                    </button>
                    {/* </Link> */}
                </div>
            </div >

        </>
    )
}


