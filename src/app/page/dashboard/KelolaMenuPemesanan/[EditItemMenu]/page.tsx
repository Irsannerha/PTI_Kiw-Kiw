"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Input from "@/app/components/Input";
import AlertUbahData from "@/app/components/AlertUbahData"
import axios from "axios";

import { Button, Card, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from "../../../../../../firebaseConfig"
import { useRouter } from "next/navigation";
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import useSWR from "swr";

interface DataFecth {
    namaItem: string;
    harga: string;
    kategori: string;
    stok: string;
    gambar: File | string;
}

export default function EditItemMenu({ params }: { params: { EditItemMenu: string } }) {

    const { data: dataItem, isLoading, error } = useSWR(`/api/menu/oneItem/${params.EditItemMenu}`, async (url) => {
        const res = await axiosAuth.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return res.data
    })
    const initialData: DataFecth = {
        namaItem: dataItem?.name,
        harga: dataItem?.price,
        kategori: dataItem?.categoryId,
        stok: dataItem?.stock,
        gambar: dataItem?.gambar,
    };

    const [namaItem, setnamaItem] = useState(initialData.namaItem);
    const [harga, setharga] = useState(initialData.harga);
    const [kategori, setkategori] = useState(initialData.kategori);
    const [stok, setstok] = useState(initialData.stok);
    const [gambar, setgambar] = useState<string | File | undefined>();

    const [isnamaItemEmpty, setIsnamaItemEmpty] = useState(false);
    const [ishargaEmpty, setIshargaEmpty] = useState(false);
    const [iskategoriEmpty, setIskategoriEmpty] = useState(false);
    const [isstokEmpty, setIsstokEmpty] = useState(false);
    const [isgambarEmpty, setIsgambarEmpty] = useState(false);

    const [showAlertInputData, setShowAlertInputData] = useState(false);
    const [showAlertUbahData, setShowAlertUbahData] = useState(false);
    const [kat, setkat] = useState([])
    const [loading, setIsLoading] = useState(false)
    const router = useRouter();
    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");

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
    // Batas
    const [imageFile, setImageFile] = useState<File>()
    const [downloadURL, setDownloadURL] = useState<string>(initialData.gambar as string)
    const [isUploading, setIsUploading] = useState(false)
    const [progressUpload, setProgressUpload] = useState(0)


    const imageName = typeof initialData.gambar === 'string' ? initialData.gambar.split('/').pop() : "Tidak ada gambar.";

    const [fileStatus, setFileStatus] = useState(imageName);

    const deleteExistingImage = async (imageUrl: string) => {
        try {
            const existingImageRef = ref(storage, imageUrl);
            await deleteObject(existingImageRef);
            console.log('Existing image deleted successfully');
        } catch (error) {
            console.error('Error deleting existing image:', error);
        }
    };
    const uploadNewImage = async (imageFile: File) => {
        const name = imageFile.name;
        const storageRef = ref(storage, `image/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
    };
    const handleSelectedFile = (files: any) => {
        if (files && files[0].size < 10000000) {
            if (typeof initialData.gambar === 'string') {
                deleteExistingImage(initialData.gambar);
            }
            uploadNewImage(files[0]);
            setImageFile(files[0]);
            setFileStatus(files[0].name);
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
        setFileStatus(imageFile?.name || "Tidak ada gambar");
    };
    const handleRemoveFile = () => {
        setImageFile(undefined);
        setFileStatus("Tidak ada gambar");
    };


    const handleFormSubmit = async () => {
        // setIsnamaItemEmpty(false);
        // setIshargaEmpty(false);
        // setIskategoriEmpty(false);
        // setIsstokEmpty(false);
        // setIsgambarEmpty(false);
        // // Check for empty fields
        // if (!namaItem.trim()) {
        //     setIsnamaItemEmpty(true);
        // } else {
        //     setIsnamaItemEmpty(false);
        // }
        // if (!harga.trim()) {
        //     setIshargaEmpty(true);
        // } else {
        //     setIshargaEmpty(false);
        // }
        // if (!kategori.trim()) {
        //     setIskategoriEmpty(true);
        // } else {
        //     setIskategoriEmpty(false);
        // }
        // if (!stok.trim()) {
        //     setIsstokEmpty(true);
        // } else {
        //     setIsstokEmpty(false);
        // }
        // if (!gambar) {
        //     setIsgambarEmpty(true);
        // } else {
        //     setIsgambarEmpty(false);
        // }
        // // If any field is empty, show the alert and return
        // if (isnamaItemEmpty || ishargaEmpty || isstokEmpty) {
        //     setShowAlertInputData(true);
        //     setTimeout(() => {
        //         setShowAlertInputData(false);
        //     }, 5000);
        // } else if (namaItem && harga && stok) {
        //     try {
        //         const namaItemRegex = /^[A-Za-z\s]{1,20}(\s[A-Za-z\s]{1,20}){0,3}$/;
        //         if (!namaItemRegex.test(namaItem)) {
        //             alert('Nama item harus berupa huruf, tidak lebih dari 20 karakter, dan maksimal 4 kalimat');
        //             return;
        //         }
        //         if (parseInt(stok) > 1000) {
        //             alert('Stok tidak boleh lebih dari 1000');
        //             return;
        //         }
        //         if (isNaN(parseInt(stok))) {
        //             alert('Stok harus berupa angka');
        //             return;
        //         }
        //         if (isNaN(parseInt(harga))) {
        //             alert('Inputan Harga harus berupa angka');
        //             return;
        //         }
        //         if (parseInt(harga) > 1000000) {
        //             alert('Inputan Harga tidak boleh lebih dari Rp. 100.000');
        //             return;
        //         }
        //         // Upload the file if it exists
        //         if (imageFile) {
        //             await handleUploadFile();
        //         }

        // Log input data to console
        console.log('Input Data:', {
            namaItem,
            harga,
            stok,
            gambar: downloadURL,
        });
        try {
            const response = await axiosAuth.put(`/api/menu/editItem/${params.EditItemMenu}`, {
                name: namaItem,
                price: harga,
                stock: stok,
                gambar: downloadURL,
            });
            console.log(response.data);
            setShowAlertUbahData(true);
            setTimeout(() => {
                setShowAlertUbahData(false);
            }, 5000);
            router.push('/page/dashboard/KelolaMenuPemesanan');
        } catch (err) {
            console.log(err);
        }

        // const response = await axios.post('YOUR_BACKEND_API/menu', {
        //     namaItem,
        //     harga,
        //     kategori,
        //     stok,
        //     gambar: downloadURL,
        // });
        // if (response.status === 200) {
        //     setShowAlertUbahData(true);
        //     setTimeout(() => {
        //         setShowAlertUbahData(false);
        //     }, 5000);
        //     // Log input data to console
        //     console.log('Input Data:', {
        //         namaItem,
        //         harga,
        //         kategori,
        //         stok,
        //         gambar: downloadURL,
        //     });
        //     // Reset form fields
        //     setnamaItem("");
        //     setharga("");
        //     setkategori("");
        //     setstok("");
        //     setgambar("");
        // } else {
        //     // Handle other response statuses or errors

        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }
    }
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Erorrrr..</div>}
            {dataItem && (
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
                        <div className="mb-5 w-full text-[32px]">Ubah Menu</div>
                        <div className="text-[24px]">Nama Item</div>
                        <Input
                            onChange={(e) => { setnamaItem(e.target.value); }}
                            placeholder={dataItem?.name}
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
                                        placeholder={dataItem?.price}
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
                                            {kat.map((kat: { id: number, name: string }) => (
                                                <option key={kat.id} value={kat.id}>
                                                    {kat.name}
                                                </option>
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
                                        placeholder={dataItem?.stock}
                                        required
                                        type="text"
                                        value={stok}
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
                                                        title={imageFile.name}
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
                    </div>
                    {showAlertUbahData && (
                        <div className="absolute mt-[40%] ml-[78%]">
                            <AlertUbahData />
                        </div>
                    )}
                    <div className="div">
                        <button
                            type="button"
                            onClick={handleFormSubmit}
                            className="-ml-32 mt-[35%] absolute text-black w-[8%] bg-[#F8A849] hover:bg-[#8B6A56] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none flex justify-center items-center shadow-lg"
                        >
                            Ubah
                        </button>
                    </div >
                </div>
            )}
        </>
    )
}


