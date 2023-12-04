"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import TableLaporanPemesanan from "@/app/components/TableLaporanPemesanan"
import axios from 'axios';

export default function LaporanPemesanan() {
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
        { uid: '0001', tanggal: "23/11/2023", namaPemesan: "ando1", jumlah: "100", harga: "10000" },
        { uid: '0002', tanggal: "24/10/2023", namaPemesan: "ando2", jumlah: "100", harga: "10000" },
        { uid: '0003', tanggal: "25/10/2023", namaPemesan: "ando3", jumlah: "100", harga: "10000" },
        { uid: '0004', tanggal: "26/10/2023", namaPemesan: "ando4", jumlah: "100", harga: "10000" },
        { uid: '0005', tanggal: "27/10/2023", namaPemesan: "ando5", jumlah: "100", harga: "10000" },
        { uid: '0006', tanggal: "28/10/2023", namaPemesan: "ando6", jumlah: "100", harga: "10000" },
        { uid: '0007', tanggal: "29/10/2023", namaPemesan: "ando7", jumlah: "100", harga: "10000" },
        { uid: '0008', tanggal: "30/10/2023", namaPemesan: "ando8", jumlah: "100", harga: "10000" },
        { uid: '0009', tanggal: "1/10/2023", namaPemesan: "ando9", jumlah: "100", harga: "10000" },
        { uid: '0010', tanggal: "2/10/2023", namaPemesan: "ando10", jumlah: "100", harga: "10000" },
        { uid: '0011', tanggal: "3/10/2023", namaPemesan: "ando11", jumlah: "100", harga: "10000" },
        { uid: '0012', tanggal: "4/10/2023", namaPemesan: "ando12", jumlah: "100", harga: "10000" },
        { uid: '0013', tanggal: "5/10/2023", namaPemesan: "ando13", jumlah: "100", harga: "10000" },
        { uid: '0014', tanggal: "6/10/2023", namaPemesan: "ando14", jumlah: "100", harga: "10000" },
        { uid: '0015', tanggal: "7/10/2023", namaPemesan: "ando15", jumlah: "100", harga: "10000" },
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
                        <div className="mb-5 w-full text-[32px]">Laporan Pesanan</div>
                        <div className="container mx-auto mt-8 text-cent0002r">
                            <TableLaporanPemesanan data={datadumy} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}