"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import TableLaporanPerekrutan from "@/app/components/TableLaporanPerekrutan"
import axios from 'axios';
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import useSWR from "swr";

export default function LaporanPerekrutan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [data, setData] = useState([]);
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

    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");


    // cara pake swr buat fetch data yang butuh header
    const { data: datatest, isLoading, error } = useSWR("/api/applicant/all", async (url) => {
        const res = await axiosAuth.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const filterData = res.data.map((e: any) => {
            return {
                id: e?.id,
                nama: e?.name,
                nik: e?.nik,
                status: e?.status
            }
        })
        return filterData;
    });

    const dataLoading = [
        { id: '-1', nama: 'loading...', nik: 'loading...' , status: 'loading...' },
    ];

    const noData = [
        { id: '-1', nama: 'No Data', nik: 'No Data', status: 'No Data' },
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
                    <div className="div">
                        <div className="mb-5 w-full text-[32px]">Laporan Perekrutan</div>
                        <div className="container mx-auto mt-8 text-cent0002r">
                        {
                            isLoading ? <TableLaporanPerekrutan data={dataLoading} /> : error ? <TableLaporanPerekrutan data={dataLoading} /> : <TableLaporanPerekrutan data={datatest.length !== 0 ? datatest : noData } />
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}