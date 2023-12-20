"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"
import Link from "next/link";
import TableLihatLaporanPemesanan from "@/app/components/TableLihatLaporanPemesanan"
import axios from 'axios';
import LihatDetailPemesanan from "@/app/components/LihatDetailPemesanan";

import useSWR from "swr";
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import { RouteKind } from "next/dist/server/future/route-kind";
import { useRouter } from "next/navigation";

import { MdFavoriteBorder } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Button, Modal } from 'flowbite-react';

interface dataUser {
    noInvoice: string,
    name: string,
    orderDate: string
}

export default function LaporanPemesanan({ params }: { params: { Detail: string } }) {
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
    const [invoiceData, setInvoiceData] = useState({
        noInvoice: '',
        namaPemesan: '',
        tanggal: '',
    });

    const router = useRouter()
    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");
    const [loading, setLoading] = useState(false);
    const [dataOr, setDataOr] = useState<dataUser>();

    const { data: dataOrder, isLoading, error } = useSWR(`/api/order/allOrderDetailByOrderId/${params.Detail}`, async (url) => {
        const res = await axiosAuth.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        // console.log(res.data);
        const filterData = res.data.map((e: any) => {
            return {
                produk: e?.item,
                jumlah: e?.quantity,
                harga: e?.subTotal,
            }
        })
        return filterData
    })



    const handleFileChange = (e: any) => {
        const input = e.target;
        if (input.files.length > 0) {
            setFileStatus(input.files[0].name);
        } else {
            setFileStatus("Tidak ada gambar.");
        }
    };

    const dataLoading = [
        { produk: 'loading', jumlah: 'loading', harga: 'loading' }
    ]

    useEffect(() => {
        setLoading(true);

        axiosAuth.get(`/api/order/oneOrder/${params.Detail}`).then((res) => {
            setDataOr(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [])

    const data = [
        { produk: 'Ayam Geprek', jumlah: "1", harga: "10000" },
        { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        // { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        // { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        // { produk: 'Es Teh Manis', jumlah: "1", harga: "20000" },
        // Tambahkan data lainnya sesuai kebutuhan
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/laporanPemesanan');
            // Assuming your backend response structure has keys like noInvoice, namaPemesan, tanggal
            setInvoiceData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleTerimaPesanan = async () => {
        try {
            const response = await axiosAuth.put(`/api/order/setStatusAccepted/${params.Detail}`);
            // console.log('Order accepted:', response.data);
            router.push('/page/dashboard/LaporanPemesanan')
        } catch (error) {
            console.error('Error accepting order:', error);
        }
    };

    const handleTolakPesanan = async () => {
        try {
            const response = await axiosAuth.put(`/api/order/setStatusRejected/${params.Detail}`);
            console.log('Order rejected:', response.data);
            router.push('/page/dashboard/LaporanPemesanan')
        } catch (error) {
            console.error('Error rejecting order:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const [openModalDiterima, setOpenModalDiterima] = useState(false);
    const [openModalDitolak, setOpenModalDitolak] = useState(false);

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
                                <Link href="/page/dashboard/LaporanPemesanan/OrderSaatIni">
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
                    <div className="space-y-2">
                        <div className="flex justify-start">
                            <div className=" text-black text-md font-bold font-['Montserrat'] leading-10">
                                <div className="flex-shrink-0">No Invoice</div>
                                <div className="flex-shrink-0">Nama Pemesan</div>
                                <div className="flex-shrink-0">Tanggal</div>
                            </div>
                            <div className="text-black text-xl font-normal font-['Montserrat'] leading-10 ml-5">
                                <div className="flex-shrink-0">: {loading ? 'Loading...' : dataOr?.noInvoice}  </div>
                                <div className="flex-shrink-0">: {loading ? 'Loading...' : dataOr?.name}</div>
                                <div className="flex-shrink-0">: {loading ? 'Loading...' : dataOr?.orderDate}</div>
                            </div>
                        </div>
                        {
                            isLoading ? <LihatDetailPemesanan data={dataLoading} /> : <LihatDetailPemesanan data={dataOrder} />
                        }
                    </div>
                    <div className="flex justify-center items-center mt-5 gap-5">
                        <Button color="gray" className='bg-[#F8A849]'
                            onClick={() => {
                                setOpenModalDiterima(true);
                            }}>
                            Terima Pesanan
                        </Button>
                        <Button color="gray" className='bg-[#D2691E]'
                            onClick={() => {
                                setOpenModalDitolak(true);
                            }}>
                            Tolak Pesanan
                        </Button>
                </div>
            </div>
        </div >

            <Modal show={openModalDiterima} size="md" onClose={() => setOpenModalDiterima(false)} popup className='backdrop-blur-lg pt-[10%]'>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center m-auto">
                        <MdFavoriteBorder className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Pesanan Diterima ?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Link href={"/page/pemesanan"}>
                                <Button className='bg-[#C79618] hover:bg-[#F8A849] text-white' color="white"
                                    onClick={handleTerimaPesanan}>
                                    Ok
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={openModalDitolak} size="md" onClose={() => setOpenModalDitolak(false)} popup className='backdrop-blur-lg pt-[10%]'>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center m-auto">
                        <ImCross className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Pesanan Ditolak ?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Link href={"/page/pemesanan"}>
                                <Button className='bg-[#F30101] hover:bg-[#950000] text-white' color="white"
                                    onClick={handleTolakPesanan}>
                                    Ok
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}