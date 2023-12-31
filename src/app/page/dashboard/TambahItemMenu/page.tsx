"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect, EffectCallback, SetStateAction } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";
import AlertInputData from "@/app/components/AlertInputData";
import AlertSimpanData from "@/app/components/AlertSimpanData";
import axios, { Axios } from "axios";

import { Button, Card, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from "../../../../../firebaseConfig"
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import useSWR, { SWRResponse } from "swr";
import { log } from "console";
import TambahKategori from "../TambahKategori/page";
import { axiosInstance } from "@/app/utils/axios";
import { RouteKind } from "next/dist/server/future/route-kind";
import { useRouter } from "next/navigation";

interface DataFecth {
    name: string;
    price: string;
    categoryId: string;
    stock: string;
    gambar: File | string;
}

interface kategori {
    id: string,
    name: string
}

interface ListKategori {
    data: kategori[]
}

export default function TambahItemMenu() {
    const initialData: DataFecth = {
        name: "",
        price: "",
        categoryId: "",
        stock: "",
        gambar: "",
    };
    const [name, setnamaItem] = useState(initialData.name);
    const [price, setharga] = useState(initialData.price);
    const [categoryId, setkategori] = useState(initialData.categoryId);
    const [stock, setstok] = useState(initialData.stock);
    const [gambar, setgambar] = useState<string | File | undefined>(/* initial value */);

    const [isnamaItemEmpty, setIsnamaItemEmpty] = useState(false);
    const [ishargaEmpty, setIshargaEmpty] = useState(false);
    const [iskategoriEmpty, setIskategoriEmpty] = useState(false);
    const [isstokEmpty, setIsstokEmpty] = useState(false);
    const [isgambarEmpty, setIsgambarEmpty] = useState(false);

    const [showAlertInputData, setShowAlertInputData] = useState(false);
    const [showAlertSimpanData, setShowAlertSimpanData] = useState(false);

    const [kat, setkat] = useState([]);
    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true);

        axiosAuth.get("/api/menu/allCategory").then((res) => {
            setkat(res.data)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }, [])

    const handleFormSubmit = async () => {
        setIsnamaItemEmpty(false);
        setIshargaEmpty(false);
        setIskategoriEmpty(false);
        setIsstokEmpty(false);
        setIsgambarEmpty(false);
        if (!name.trim()) {
            setIsnamaItemEmpty(true);
        } else {
            setIsnamaItemEmpty(false);
        }
        if (!price.trim()) {
            setIshargaEmpty(true);
        } else {
            setIshargaEmpty(false);
        }
        if (!categoryId.trim()) {
            setIskategoriEmpty(true);
        } else {
            setIskategoriEmpty(false);
        }
        if (!stock.trim()) {
            setIsstokEmpty(true);
        } else {
            setIsstokEmpty(false);
        }
        if (!gambar) {
            setIsgambarEmpty(true);
        } else {
            setIsgambarEmpty(false);
        }
        if (isnamaItemEmpty || ishargaEmpty || isstokEmpty) {
            setShowAlertInputData(true);
            setTimeout(() => {
                setShowAlertInputData(false);
            }, 5000);
        } else if (name && price && stock) {
            try {
                const namaItemRegex = /^[A-Za-z\s]{1,20}(\s[A-Za-z\s]{1,20}){0,3}$/;
                if (!namaItemRegex.test(name)) {
                    alert('Nama item harus berupa huruf, tidak lebih dari 20 karakter, dan maksimal 4 kalimat');
                    return;
                }
                if (parseInt(stock) > 1000) {
                    alert('Stok tidak boleh lebih dari 1000');
                    return;
                }
                if (isNaN(parseInt(stock))) {
                    alert('Stok harus berupa angka');
                    return;
                }
                if (isNaN(parseInt(price))) {
                    alert('Inputan Harga harus berupa angka');
                    return;
                }
                if (parseInt(price) > 1000000) {
                    alert('Inputan Harga tidak boleh lebih dari Rp. 100.000');
                    return;
                }
                if (imageFile) {
                    await handleUploadFile();
                }

                const response = await axiosAuth.post("/api/menu/createItem", {
                    name,
                    price,
                    stock,
                    gambar: downloadURL,
                    categoryId
                });
                console.log(response);
                setShowAlertSimpanData(true);
                setTimeout(() => {
                    setShowAlertSimpanData(false);
                }, 5000);
                router.push('/page/dashboard/KelolaMenuPemesanan');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
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

    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');
    // Batas

    const [imageFile, setImageFile] = useState<File>()
    const [downloadURL, setDownloadURL] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [progressUpload, setProgressUpload] = useState(0)
    const [fileStatus, setFileStatus] = useState("Tidak ada gambar.");
    const handleSelectedFile = (files: any) => {
        if (files && files[0].size < 10000000) {
            setImageFile(files[0]);
            setFileStatus(files[0].name);
            console.log(files[0]);
        } else {
            message.error('File size too large');
        }
    };
    const handleUploadFile = async () => {
        if (imageFile) {
            const name = imageFile.name;
            const storageRef = ref(storage, `image/${name}`);
            const uploadTask = uploadBytesResumable(storageRef, imageFile);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgressUpload(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    message.error(error.message);
                },
                async () => {
                    try {
                        const url = await getDownloadURL(uploadTask.snapshot.ref);
                        setDownloadURL(url);
                        setFileStatus(imageFile.name);
                    } catch (error) {
                        console.error('Error getting download URL:', error);
                    }
                },
            );
        } else {
            message.error('File not found');
        }
    };
    const handleRemoveFile = () => {
        setImageFile(undefined);
        setFileStatus("Tidak ada gambar");
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
                    <div className="mb-5 w-full text-[32px]">Tambah Menu</div>
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
                                        {/* <option>Pilih Kategori</option> */}
                                        {kat.map((item: { id: string, name: string }) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
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
                        <div className="col-lg-8 offset-lg-2">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div className="inline-block text-left w-96 relative rounded-md text-[14px]">
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            name="imageFile"
                                            className="absolute opacity-0 cursor-pointer "
                                            onChange={(files) => handleSelectedFile(files.target.files)}
                                            placeholder="Select file to upload"
                                            accept="image/png"
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
                            <div className="mt-5">
                                <Card>
                                    {imageFile && (
                                        <>
                                            <List.Item
                                                extra={[
                                                    <Button
                                                        key="btnRemoveFile"
                                                        onClick={handleRemoveFile}
                                                        type="text"
                                                        icon={<i className="fas fa-times text-black"></i>}
                                                    />,
                                                ]}
                                            >
                                                <List.Item.Meta
                                                // title={imageFile.name}
                                                // description={`Size: ${imageFile.size}`}
                                                />
                                            </List.Item>
                                            <div className="text-right mt-3">
                                                <Button
                                                    loading={isUploading}
                                                    // type="primary"
                                                    onClick={handleUploadFile}
                                                    className="opacity-50 bg-white"
                                                >
                                                    Upload
                                                </Button>
                                                <Progress percent={progressUpload} />
                                            </div>
                                        </>
                                    )}
                                    {downloadURL && (
                                        <>
                                            <Image
                                                src={downloadURL}
                                                alt={downloadURL}
                                                style={{ width: 200, height: 200, objectFit: 'cover' }}
                                            />
                                            {/* <p>{downloadURL}</p> */}
                                        </>
                                    )}
                                    <p></p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Batas */}
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


