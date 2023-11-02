"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";
import AlertInputData from "@/app/components/AlertInputData";
import AlertSimpanData from "@/app/components/AlertSimpanData";

interface DataFecth {
    namaItem: string;
    harga: string;
    kategori: string;
    stok: string;
    // gambar: any;
}

export default function TambahItemMenu() {

    const initialData: DataFecth = {
        namaItem: "",
        harga: "",
        kategori: "",
        stok: "",
        // gambar: "",
    };

    const [namaItem, setnamaItem] = useState(initialData.namaItem);
    const [harga, setharga] = useState(initialData.harga);
    const [kategori, setkategori] = useState(initialData.kategori);
    const [stok, setstok] = useState(initialData.stok);
    // const [gambar, setgambar] = useState(initialData.gambar);

    const [isnamaItemEmpty, setIsnamaItemEmpty] = useState(false);
    const [ishargaEmpty, setIshargaEmpty] = useState(false);
    const [iskategoriEmpty, setIskategoriEmpty] = useState(false);
    const [isstokEmpty, setIsstokEmpty] = useState(false);
    // const [isgambarEmpty, setIsgambarEmpty] = useState(false);

    const [showAlertInputData, setShowAlertInputData] = useState(false);
    const [showAlertSimpanData, setShowAlertSimpanData] = useState(false);

    const handleFormSubmit = async () => {
        if (!namaItem) {
            setIsnamaItemEmpty(true);
        } else {
            setIsnamaItemEmpty(false);
        }
        if (!harga) {
            setIshargaEmpty(true);
        } else {
            setIshargaEmpty(false);
        }
        if (!kategori) {
            setIskategoriEmpty(true);
        } else {
            setIskategoriEmpty(false);
        }
        if (!stok) {
            setIsstokEmpty(true);
        } else {
            setIsstokEmpty(false);
        }
        // if (!gambar) {
        //     setIsgambarEmpty(true);
        // } else {
        //     setIsgambarEmpty(false);
        // }

        // if (namaItem && harga) {
        //     if (namaItem.includes('@gmail.com')) {
        //         console.log('namaItem: ', namaItem);
        //         console.log('harga: ', harga);
        //         if (namaItem === "test@gmail.com" && harga === "test") {
        //             setshowSuccesLoginAlert(true);
        //             window.location.href = '/page/dashboard';
        //         }
        //         handleReset();
        //     } else {
        //         alert('Use @gmail.com in namaItem');
        //     }
        // }

        if (isnamaItemEmpty || ishargaEmpty || iskategoriEmpty || isstokEmpty) {
            setShowAlertInputData(true);
            setTimeout(() => {
                setShowAlertInputData(false);
            }, 5000);
        } else if (namaItem && harga && kategori && stok) {
            setShowAlertSimpanData(true);
            setTimeout(() => {
                setShowAlertSimpanData(false);
            }, 5000);
        }

        // if (namaItem && ishargaEmpty) {
        //     setShowhargaAlert(true);
        //     setTimeout(() => {
        //         setShowhargaAlert(false);
        //     }, 3000);
        // } else if (harga && isnamaItemEmpty) {
        //     setShownamaItemAlert(true);
        //     setTimeout(() => {
        //         setShownamaItemAlert(false);
        //     }, 3000);
        // } else if (isnamaItemEmpty && ishargaEmpty) {
        //     setshowInputnamaItemharga(true);
        //     setTimeout(() => {
        //         setshowInputnamaItemharga(false);
        //     }, 3000);
        // } else if (isnamaItemEmpty && ishargaEmpty && iskategoriEmpty && isstokEmpty) {
        //     setShowAlertInputData(true);
        //     setTimeout(() => {
        //         setShowAlertInputData(false);
        //     }, 3000);
        // }

    };

    const handleReset = () => {
        setnamaItem("");
        setharga("");
        setkategori("");
        setstok("");
        // setgambar("");
        setIsnamaItemEmpty(false);
        setIshargaEmpty(false);
        setIskategoriEmpty(false);
        setIsstokEmpty(false);
        // setIsgambarEmpty(false);
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
                                <Link href="/page/dashboard/KelolaMenuPemesanan">
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

                    <div className="mb-5 w-full text-[32px]">Tambah Pesanan</div>
                    <div className="text-[24px]">Nama Item</div>
                    <Input
                        onChange={(e) => { setnamaItem(e.target.value); }}
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
                                    onChange={(e) => { setharga(e.target.value); }}
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
                                    <select onChange={(e) => { setkategori(e.target.value); }} id="countrssies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
                                    onChange={(e) => { setstok(e.target.value); }}
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


