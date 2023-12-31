"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";
import AlertUbahData from "@/app/components/AlertUbahData"
import axios from "axios";

interface DataFecth {
    namaItem: string;
    harga: string;
    kategori: string;
    stok: string;
    gambar: File | string;
}

export default function TambahItemMenu() {
    const initialData: DataFecth = {
        namaItem: "",
        harga: "",
        kategori: "",
        stok: "",
        gambar: "",
    };

    const [namaItem, setnamaItem] = useState(initialData.namaItem);
    const [harga, setharga] = useState(initialData.harga);
    const [kategori, setkategori] = useState(initialData.kategori);
    const [stok, setstok] = useState(initialData.stok);
    // const [gambar, setgambar] = useState(initialData.gambar);
    const [gambar, setgambar] = useState<string | File | undefined>(/* initial value */);

    const [isnamaItemEmpty, setIsnamaItemEmpty] = useState(false);
    const [ishargaEmpty, setIshargaEmpty] = useState(false);
    const [iskategoriEmpty, setIskategoriEmpty] = useState(false);
    const [isstokEmpty, setIsstokEmpty] = useState(false);
    const [isgambarEmpty, setIsgambarEmpty] = useState(false);

    const [showAlertInputData, setShowAlertInputData] = useState(false);
    const [showAlertUbahData, setShowAlertUbahData] = useState(false);

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
        if (!gambar) {
            setIsgambarEmpty(true);
        } else {
            setIsgambarEmpty(false);
        }

        if (isnamaItemEmpty || ishargaEmpty || iskategoriEmpty || isstokEmpty || isgambarEmpty) {
            setShowAlertInputData(true);
            setTimeout(() => {
                setShowAlertInputData(false);
            }, 5000);

        } else if (namaItem && harga && kategori && stok && gambar) {
            const namaItemRegex = /^[A-Za-z\s]{1,20}(\s[A-Za-z\s]{1,20}){0,3}$/;
            if (!namaItemRegex.test(namaItem)) {
                alert('Nama item harus berupa huruf, tidak lebih dari 20 karakter, dan maksimal 4 kalimat');
                return;
            }

            if (parseInt(stok) > 1000) {
                alert('Stok tidak boleh lebih dari 1000');
                return;
            }
            if (isNaN(parseInt(stok))) {
                alert('Stok harus berupa angka');
                return;
            }
            if (isNaN(parseInt(harga))) {
                alert('Inputan Harga harus berupa angka');
                return;
            }
            if (parseInt(harga) > 1000000) {
                alert('Inputan Harga tidak boleh lebih dari Rp. 100.000');
                return;
            }
            let userData;

            if (typeof gambar === 'string') {
                userData = { namaItem, harga, kategori, stok, gambar };
                // console.log('User Data:', JSON.stringify(userData));
            } else if (gambar instanceof File) {
                userData = { namaItem, harga, kategori, stok, gambar: gambar.name };
                console.log('User Data:', JSON.stringify(userData));

                const formData = new FormData();
                formData.append('namaItem', namaItem);
                formData.append('harga', harga);
                formData.append('kategori', kategori);
                formData.append('stok', stok);
                formData.append('gambar', gambar, gambar.name);

                try {
                    const response = await axios.post('/api/menu', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    if (response.status === 200) {
                        const responseData = response.data;
                        console.log('Data has been sent successfully:', responseData);
                        setShowAlertUbahData(true);
                        setTimeout(() => {
                            setShowAlertUbahData(false);
                        }, 5000);
                    } else {
                        console.error('Failed to send data. Status:', response.status);
                        alert('Gagal menyimpan data');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Tidak Dapat Data API');
                }
            }
            // console.log('User Data:', JSON.stringify(userData));
        }
    };

    const handleReset = () => {
        setnamaItem("");
        setharga("");
        setkategori("");
        setstok("");
        setgambar("");
        setIsnamaItemEmpty(false);
        setIshargaEmpty(false);
        setIskategoriEmpty(false);
        setIsstokEmpty(false);
        setIsgambarEmpty(false);
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];

            // Check if the file has a valid extension
            const allowedExtensions = ['.png', '.jpg', '.jpeg'];
            const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

            if (allowedExtensions.includes(`.${fileExtension}`)) {
                setFileStatus(file.name);
                setgambar(file);
                // Log the file name
                console.log('Selected Image File:', file);
            } else {
                // Invalid file type
                setFileStatus("Hanya file .png atau .jpg yang diizinkan.");
                setgambar(undefined); // or setgambar('') depending on your use case
            }
        } else {
            setFileStatus("Tidak ada gambar.");
            setgambar(undefined); // or setgambar('') depending on your use case
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

                    <div className="mb-5 w-full text-[32px]">Ubah Pesanan</div>
                    <div className="text-[24px]">Nama Item</div>
                    <Input
                        onChange={(e) => { setnamaItem(e.target.value); }}
                        placeholder="Masukkan nama item"
                        required
                        type="text"
                        value={namaItem}
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
                                    value={harga}
                                />
                            </div>
                        </div>
                        <div className="-ml-[30%] w-[100%]">
                            <div className="text-[24px]">Kategori</div>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <select onChange={(e) => { setkategori(e.target.value); }} id="countrssies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Pilih Kategori</option>
                                        <option value="Makanan">Makanan</option>
                                        <option value="Minuman">Minuman</option>
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
                                    value={stok}
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
                                        value={""}
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
                {showAlertUbahData && (
                    <div className="absolute mt-[40%] ml-[78%]">
                        <AlertUbahData />
                    </div>
                )}

                {/* <Link href="/page/dashboard"> */}
                <div className="div">                <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="-ml-32 mt-[35%] absolute text-black w-[8%] bg-[#F8A849] hover:bg-[#8B6A56] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none flex justify-center items-center shadow-lg"
                >
                    Ubah
                </button>
                    {/* </Link> */}
                </div >
            </div>

        </>
    )
}


