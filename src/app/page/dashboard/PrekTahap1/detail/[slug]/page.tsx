"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import axios from 'axios';
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import useSWR from "swr";

import { BsEmojiHeartEyes } from "react-icons/bs";

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

export default function Page({ params }: { params: { slug: string } }) {
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
    // const [userData, setUserData] = useState<UserData>(initialUserData);

    // useEffect(() => {
    //     console.log('Data Pengguna:', JSON.stringify(userData));
    //     // Fetch data from the backend API endpoint using Axios
    //     axios.get('http://localhost:3001/api/fetchData')
    //         .then(response => {
    //             setUserData(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    const handleFileChange = (e: any) => {
        const input = e.target;
        if (input.files.length > 0) {
            setFileStatus(input.files[0].name);
        } else {
            setFileStatus("Tidak ada gambar.");
        }
    };

    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");

    const { data: userData, isLoading, error } = useSWR(`/api/applicant/one/${params.slug}`, async (url) => {
        const res = await axiosAuth.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return res.data
    });

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {userData && (
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
                                            {/* {params.PrekTahap1LihatData} */}
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
                                    <Link href="/page/dashboard/PrekTahap1">
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

                        <div className="mb-5 w-full text-[32px]">Perekrutan Pegawai Tahap 1</div>
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
                                <div className="flex-shrink-0">: {userData?.nik} </div>
                                <div className="flex-shrink-0">: {userData?.name}</div>
                                <div className="flex-shrink-0">: {userData?.noHp}</div>
                                <div className="flex-shrink-0">: {userData?.email}</div>
                                <div className="flex-shrink-0">: {userData?.alamat}</div>
                                <div className="flex-shrink-0">: {userData?.jenisKelamin}</div>
                                <div className="flex-shrink-0">: {userData?.usia}</div>

                                <div className="ml-auto">:
                                    <div className={`-mt-10 ml-3 mb-4 w-full bg-[#F8A849] shadow-lg rounded-xl hover:bg-[#C79618] ${userData?.url_berkas ? 'text-black' : 'text-black opacity-50'}`}>
                                        <a href={userData?.url_berkas} download className='cursor-pointer'>
                                            <div className="flex justify-center gap-2 text-center m-auto">
                                                <BsEmojiHeartEyes className="w-10 h-10 pl-2" />
                                                <div className={`text-[16px] w-full pr-4 `}>
                                                    {userData?.url_berkas ? (
                                                        // <a href={userData?.url_berkas} download className='cursor-pointer'>
                                                        <div className="div">Lihat Data</div>
                                                        // </a>
                                                    ) : (
                                                        'Lihat'
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="mt-2">: {userData.jenisKelamin || 'Diterima'}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}