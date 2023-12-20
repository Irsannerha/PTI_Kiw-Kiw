'use client'
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import Image from "next/image";
import TableLihatPemesanan from "@/app/components/pemesanan/TableLihatPemesanan"
import axios from "axios";
import Link from "next/link";
import { error, log } from "console";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";

import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Modal } from 'flowbite-react';
import { useLocalStorage } from "usehooks-ts";

interface TableRow {
    produk: string;
    jumlah: string;
    harga: string;
}

interface Order {
    id: string;
    customerName: string;
    items: TableRow[];
}

interface dataOrder {
    name: string;
    noInvoice: string;
}

interface TableProps {
    data: TableRow[];
    itemsPerPage?: number;
}

export default function DetailPemesanan({ params }: { params: { detailPemesanan: string } }) {
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order | null>(null);
    const [data, setData] = useState<dataOrder>()
    const pathname = usePathname()
    const [pemesanan,setPemesanan] = useLocalStorage("idPemesanan","")

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        const itemId = params.detailPemesanan;
        const data = axios.get(`/api/order/oneOrder/${itemId}`).then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error);
            setLoading(false)
        })
    }, []);

    const id = params.detailPemesanan

    const axiosAuth = useAxiosAuth()
    const { data: dataItem, isLoading, error } = useSWR(`/api/order/allOrderDetailByOrderId/${id}`, async (url) => {
        const res = await axios.get(url)
        const filterData = res.data.map((e: any) => {
            return {
                produk: e?.item,
                jumlah: e?.quantity,
                harga: e?.subTotal,
            }
        })
        return filterData
    })

    const dataDumy = [
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
    ];

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    });

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="relative bg-[#E2E2E2] h-screen flex items-center justify-center w-full">
            {loading ? (
                <PacmanLoader color="#F8A849" />
            ) : (
                <>
                    <div className="absolute top-0 left-0 bg-[#F8A849] h-[40%] bg-[url('/images/navbarDetailPemesanan.svg')] w-full bg-cover">
                    </div>
                    <div className="bg-white absolute w-[80%] md:w-[60%] lg:w-[50%] h-[70%] md:h-[50%] lg:h-[70%] rounded-lg shadow-2xl">
                        <div className="m-5">
                            <div className="m-auto items-center justify-start text-center flex">
                                <Image src="/images/logoNavbar.png" width={80} height={80} className="justify-start" alt="Logo Kedai Bu Titin" />
                                <div className="text-[18px] font-bold">Kedai Bu Titin</div>
                            </div>
                            <div className="flex justify-end text-right text-[10px] text-[#646464] -mt-2">{formattedTime}</div>
                            <div className="border-t-2 border-[#C79618]"></div>
                            <div className="text-center text-[14px]">Nama: {data?.name}</div>
                            <div className="text-center text-[#646464] text-[14px]">Id Pemesanan : </div>
                            <div className="text-center text-[26px] font-bold">{data?.noInvoice}</div>
                            <div className="border-t-2 border-[#C79618]"></div>
                            {isLoading ? <TableLihatPemesanan data={dataDumy}></TableLihatPemesanan> : <TableLihatPemesanan data={dataItem}></TableLihatPemesanan>}
                        </div>
                    </div>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-[#D2691E] hover:bg-[#F8A849] font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[20vw] lg:w-[18vw] mb-5 bottom-0 left-4 md:left-72 lg:left-[525px] absolute"
                    >
                        Back To Menu
                    </button>

                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup className='backdrop-blur-lg pt-[10%]'>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center m-auto">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Yakin Ingin Kembali ke menu pemesanan ?
                                    Pesanan anda akan hilang jika anda klik tombol ya..
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button className='bg-[#C79618] hover:bg-[#F8A849] text-white' onClick={() => setOpenModal(false)}>
                                        Tidak
                                    </Button>
                                    <Link href={"/page/pemesanan"}>
                                        <Button className='bg-[#F30101] hover:bg-[#950000] text-white' color="white"
                                            onClick={() => {
                                                setOpenModal(false);
                                                setPemesanan("")
                                            }}>
                                            Ya
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </div>
    );
};
