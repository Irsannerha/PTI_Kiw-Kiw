"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import TableLaporanPerekrutan from "@/app/components/TableLaporanPerekrutan"
import axios from 'axios';

export default function LaporanPerekrutan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pegawai'); 
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.error('Error fetching data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
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
    const [fileStatus, setFileStatus] = useState("Tidak ada gambar.");
    const handleFileChange = (e: any) => {
        const input = e.target;
        if (input.files.length > 0) {
            setFileStatus(input.files[0].name);
        } else {
            setFileStatus("Tidak ada gambar.");
        }
    };

    const datadumy = [
        { id: "1", nama: 'budi', nik: "8958945798759", status: "diterima" },
        { id: "2", nama: 'ando', nik: "8958945798759", status: "diterima" },
        { id: "3", nama: 'affan', nik: "8958945798759", status: "ditolak" },
        { id: "4", nama: 'fahmi', nik: "8958945798759", status: "diterima" },
        { id: "5", nama: 'tara', nik: "8958945798759", status: "ditolak" },
        { id: "6", nama: 'carin', nik: "8958945798759", status: "diterima" },
        { id: "7", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "8", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "9", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "10", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "11", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "12", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "13", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "14", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "15", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "16", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "17", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "18", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "19", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "20", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "21", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "22", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "23", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
        { id: "24", nama: 'budi budi', nik: "8958945798759", status: "diterima" },
        { id: "25", nama: 'budi budi', nik: "8958945798759", status: "ditolak" },
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
                            <TableLaporanPerekrutan data={datadumy} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}