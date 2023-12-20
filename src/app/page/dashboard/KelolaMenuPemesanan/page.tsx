'use client';

import { Button, Modal } from 'flowbite-react';
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import Image from "next/image";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import SvgEditKelolaPemesanan from "@/app/components/SvgEditKelolaPemesanan"
import SvgDeleteKelolaPemesanan from "@/app/components/SvgDeleteKelolaPemesanan"
import AlertHapusData from "@/app/components/AlertHapusData"
import Link from "next/link";
import axios from 'axios';
import { useAxiosAuth } from '@/app/hooks/useAxiosAuth';
import { useLocalStorage } from 'usehooks-ts';
import useSWR, { mutate } from 'swr';
import { RouteKind } from 'next/dist/server/future/route-kind';
import { useRouter } from 'next/navigation';
import { Tooltip } from 'flowbite-react';

interface MenuItem {
    img?: string;
    id: string;
    name?: string;
    price?: string;
    stock?: string;
    gambar?: string | undefined;
}


export default function KelolaMenuPemesanan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [menuMinuman, setMenuMinuman] = useState<MenuItem[]>([]);
    const [menuMakanan, setMenuMakanan] = useState<MenuItem[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');

    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axiosAuth.get('/api/menu/allItemMakanan').then((res) => {
            setMenuMakanan(res.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
        axiosAuth.get('/api/menu/allItemMinuman').then((res) => {
            setMenuMinuman(res.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }, [])

    const [showAlertHapusData, setShowAlertHapusData] = useState(false);
    const router = useRouter();
    const [dataModal, setDataModal] = useState()
    const [id, setId] = useState("")

    const inputchange = (e: any) => {
        setId(e.target.value);
        console.log(e.target.value);
    }

    const handleFromDelete = async (id: string) => {
        setShowAlertHapusData(true);
        try {
            await axiosAuth.put(`/api/menu/deleteItem/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            // mutate('/api/menu/allItem');
            // console.log(id);
            setTimeout(() => {
                setShowAlertHapusData(false);
            }, 3000);
        } catch (e) {
            console.log(e);
        }
    }

    const checkId = (id: string) => {
        setId(id);
        // console.log(id);
    }

    const [openModal, setOpenModal] = useState(false);
    const [openModalMakanan, setOpenModalMakanan] = useState(false);

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
                    <div className="flex justify-end -mt-4 gap-4">
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618]">
                                <Link href="/page/dashboard/TambahItemMenu">
                                    <div className=" flex p-2.5 gap-2 justify-center items-center m-auto text-center text-black">
                                        <div className="flex flex-col justify-center">
                                            +
                                        </div>
                                        <div className="flex items-center">
                                            Tambah Item
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <div className="flex justify-between relative ">
                            <div className="m-2 text-[24px] absolute">Makanan</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl">
                                {menuMakanan.map((item) => (
                                    <div className="max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className="flex flex-col items-center justify-center m-auto w-24 h-24 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image
                                                        src={`${item.gambar}`}
                                                        alt={`order-${item.id}`}
                                                        width={60}
                                                        height={60}
                                                        layout="fixed"
                                                        className="mt-2 w-full h-full rounded-full p-3"
                                                    />
                                                </div>
                                                <div className="text-[14px] ml-2  font-medium text-gray-900 dark:text-white">{item.name}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {item.price}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {item.stock}</span></div>
                                                <div className="flex mt-1 gap-0.5 w-full">
                                                    <div className="w-[50%]">
                                                        <Tooltip content="Edit Menu" style="dark" className='bg-black'>
                                                            <Link href="/[EditItemMenu]" as={`/page/dashboard/KelolaMenuPemesanan/${item.id}`} className="px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849] w-full flex justify-center items-center cursor-pointer">
                                                                <SvgEditKelolaPemesanan />
                                                            </Link>
                                                        </Tooltip>
                                                    </div>
                                                    <div className="w-[50%]">
                                                        <Tooltip content="Delete Menu" style="dark" className='bg-black'>
                                                            <Link defaultValue={item.id} onClick={() => { checkId(item.id); setOpenModalMakanan(true); }} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-full flex justify-center items-center rounded-br-lg">
                                                                <SvgDeleteKelolaPemesanan />
                                                            </Link>
                                                        </Tooltip>
                                                    </div>
                                                    <Modal show={openModalMakanan} size="md" onClose={() => setOpenModalMakanan(false)} popup className='backdrop-blur-lg pt-[10%]'>
                                                        <Modal.Header />
                                                        <Modal.Body>
                                                            <div className="text-center m-auto">
                                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                                    Yakin Ingin Menghapus Menu Makanan Ini ???
                                                                    Anda Akan Kehilangan Semua Data Pada Menu Ini...
                                                                </h3>
                                                                <div className="flex justify-center gap-4">
                                                                    <Button className='bg-[#C79618] hover:bg-[#F8A849] text-white' onClick={() => setOpenModalMakanan(false)}>
                                                                        Tidak
                                                                    </Button>
                                                                    <Button value={item.id} onChange={inputchange} className='bg-[#F30101] hover:bg-[#950000] text-white' color="white"
                                                                        // onClick={() => handleFromDelete(order.id)}
                                                                        onClick={() => {
                                                                            handleFromDelete(id);
                                                                            setOpenModalMakanan(false);
                                                                            window.location.reload()
                                                                        }}>

                                                                        Ya Hapus
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="ml-[52%] m-2 text-[24px] absolute">Minuman</div>
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#EFEFFF] w-[49%] p-2 rounded-lg shadow-xl h-full">
                                {menuMinuman.map((order) => (
                                    <div className="max-w-full rounded-lg">
                                        <div className="w-full max-w-sm rounded-lg shadow  bg-white">
                                            <div className="div">
                                                <div className="flex flex-col items-center justify-center m-auto w-24 h-24 mt-2 mb-2 rounded-full shadow-lg">
                                                    <Image
                                                        src={`${order.gambar}`}
                                                        alt={`order-${order.id}`}
                                                        width={60}
                                                        height={60}
                                                        layout="fixed"
                                                        className="mt-2 w-full h-full rounded-full p-3"
                                                    />
                                                </div>
                                                <div className="text-[14px] ml-2 font-medium text-gray-900 dark:text-white">{order.name}</div>
                                                <span className="text-[14px] ml-2 text-gray-500 dark:text-gray-400">Rp. {order.price}</span>
                                                <div className="text-[10px] ml-2 text-gray-500 dark:text-gray-400">Stok : <span> {order.stock}</span></div>
                                                <div className="flex mt-1 gap-0.5 w-full">
                                                    <div className="w-[50%]">
                                                        <Tooltip content="Edit Menu" style="dark" className='bg-black'>
                                                            <Link href="/[EditItemMenu]" as={`/page/dashboard/KelolaMenuPemesanan/${order.id}`} className=" px-1 py-1 text-sm font-medium text-center text-white rounded-bl-lg bg-[#C79618] hover:bg-[#F8A849] w-full flex justify-center items-center ">
                                                                <SvgEditKelolaPemesanan />
                                                            </Link>
                                                        </Tooltip>
                                                    </div>
                                                    <div className="w-[50%]">
                                                        <Tooltip content="Edit Menu" style="dark" className='bg-black'>
                                                            <Link onClick={() => { checkId(order.id); setOpenModal(true); }} href="#" className=" px-1 py-1 text-sm font-medium text-center text-gray-900 bg-[#F30101] hover:bg-[#950000] w-full flex justify-center items-center rounded-br-lg">
                                                                <SvgDeleteKelolaPemesanan />
                                                            </Link>
                                                        </Tooltip>
                                                    </div>
                                                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup className='backdrop-blur-lg pt-[10%]'>
                                                        <Modal.Header />
                                                        <Modal.Body>
                                                            <div className="text-center m-auto">
                                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                                    Yakin Ingin Menghapus Menu Minuman ???
                                                                    Anda Akan Kehilangan Semua Data Pada Menu Ini..."
                                                                </h3>
                                                                <div className="flex justify-center gap-4">
                                                                    <Button className='bg-[#C79618] hover:bg-[#F8A849] text-white' onClick={() => setOpenModal(false)}>
                                                                        Tidak
                                                                    </Button>
                                                                    <Button className='bg-[#F30101] hover:bg-[#950000] text-white' color="white"
                                                                        // onClick={() => handleFromDelete(order.id)}
                                                                        onClick={() => {
                                                                            // console.log(id);
                                                                            handleFromDelete(id);
                                                                            setOpenModal(false);
                                                                            window.location.reload()
                                                                        }}>
                                                                        Ya Hapus
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}