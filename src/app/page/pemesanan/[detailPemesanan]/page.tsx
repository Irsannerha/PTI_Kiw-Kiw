'use client'
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import Image from "next/image";
import TableLihatPemesanan from "@/app/components/pemesanan/TableLihatPemesanan"
import axios from "axios";
import Link from "next/link";

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

interface TableProps {
    data: TableRow[];
    itemsPerPage?: number;
}

export default function DetailPemesanan({ params }: { params: { itemId: string } }) {
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        const itemId = params.itemId;
        axios.get(`YOUR_BACKEND_API_ENDPOINT/${itemId}`)
            .then(response => {
                setOrder(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

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
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    });

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
                            <div className="text-center text-[14px]">Nama: {order?.customerName}</div>
                            <div className="text-center text-[#646464] text-[14px]">Id Pemesanan : </div>
                            <div className="text-center text-[26px] font-bold">{order?.id}</div>
                            <div className="border-t-2 border-[#C79618]"></div>
                            <TableLihatPemesanan data={order?.items || []} />
                        </div>
                    </div>
                    <Link href={"/page/pemesanan"}>
                        <button
                            className="bg-[#D2691E] hover:bg-[#F8A849] font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[20vw] lg:w-[18vw] mb-5 bottom-0 left-4 md:left-72 lg:left-[525px] absolute"
                        >
                            Back To Menu
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
};
