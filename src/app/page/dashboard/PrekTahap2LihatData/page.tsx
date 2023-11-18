"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";

import TablePrekPegawai from "@/app/components/TablePrekPegawaiTahap1"

import axios from 'axios';


interface UserData {
    id?: number;
    nik?: string;
    nama?: string;
    noHp?: string;
    email?: string;
    alamat?: string;
    jenisKelamin?: string;
    usia?: string;
    ijazah?: string;
    // validate?: string;
}

const initialUserData: UserData = {};


export default function PrekTahap1LihatData() {
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
    const [userData, setUserData] = useState<UserData>(initialUserData);

    useEffect(() => {
        // Fetch data from the backend API endpoint using Axios
        axios.get('http://localhost:3001/api/fetchData')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                                <Link href="/page/dashboard/PrekTahap2">
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

                    <div className="mb-5 w-full text-[32px]">Perekrutan Pegawai Tahap 2</div>
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
                        </div>
                        <div className="text-black text-xl font-normal font-['Montserrat'] leading-10 ml-5">
                            <div className="flex-shrink-0">: {userData.nik || 'Loading...'} </div>
                            <div className="flex-shrink-0">: {userData.nama || 'Loading...'}</div>
                            <div className="flex-shrink-0">: {userData.noHp || 'Loading...'}</div>
                            <div className="flex-shrink-0">: {userData.email || 'Loading...'}</div>
                            <div className="flex-shrink-0">: {userData.alamat || 'Loading...'}</div>
                            <div className="flex-shrink-0">: {userData.jenisKelamin || 'Loading...'}</div>
                            <div className="flex-shrink-0">: {userData.usia || 'Loading...'}</div>

                            <div className="ml-auto">:
                                <div className={`-mt-10 ml-3 mb-4 w-full bg-[#F8A849] shadow-lg rounded-xl hover:bg-[#C79618] ${userData.ijazah ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                    <div className="flex justify-center gap-2 text-center m-auto">
                                        <svg className='flex items-center text-[16px] w-full mt-2' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5 17.7083V3.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.25 11.458L12.5 17.708L18.75 11.458" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.7913 21.875H5.20801" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className={`text-[16px] w-full pr-4 ${userData.ijazah ? 'text-black' : 'text-black opacity-50'}`}>
                                            {userData.ijazah ? (
                                                <a href={userData.ijazah} download className='cursor-pointer'>
                                                    Unduh
                                                </a>
                                            ) : (
                                                'Unduh'
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mt-2">: {userData.jenisKelamin || 'Diterima'}</div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


