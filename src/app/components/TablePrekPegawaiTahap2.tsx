'use client';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Tooltip } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';
import AlertMenolakPegawai1 from "@/app/components/AlertMenolakPegawai1"
import AlertTerimaPegawai1 from "@/app/components/AlertTerimaPegawai1"
import { useAxiosAuth } from '../hooks/useAxiosAuth';
import { useLocalStorage } from 'usehooks-ts';
import { mutate } from 'swr';

interface TableRow {
    id: string
    nama: string;
    nik: string;
}

interface TableProps {
    data: TableRow[];
    itemsPerPage?: number;
}

const Table: React.FC<TableProps> = ({ data, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValue, setFilterValue] = useState('');
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredData = data.filter((row) => {
        return row.nama.toLowerCase().includes(filterValue.toLowerCase()) ||
            row.nik.toLowerCase().includes(filterValue.toLowerCase())
    });

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    // batas
    const [showAlertMenolakPegawai1, setShowAlertMenolakPegawai1] = useState(false);
    const handleFromMenolakPegawai1 = async () => {
        setShowAlertMenolakPegawai1(true)
        setTimeout(() => {
            setShowAlertMenolakPegawai1(false);
        }, 3000);
    }

    const axiosAuth = useAxiosAuth();
    const [accessToken, _] = useLocalStorage("accessToken", "");

    const [showAlertMenolakPegawai2, setShowAlertMenolakPegawai2] = useState(false);
    const handleFromMenolakPegawai2 = async (id: string) => {
        try {
            await axiosAuth.put(`/api/applicant/setStatusRejected`, { id: id }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            mutate('/api/applicant/all/statusPending')
        } catch (e) {
            console.log(e);
        }
    }

    const [showAlertTerimaPegawai1, setShowAlertTerimaPegawai1] = useState(false);
    const handleFromTerimaPegawai1 = async () => {
        setShowAlertTerimaPegawai1(true)
        setTimeout(() => {
            setShowAlertTerimaPegawai1(false);
        }, 3000);
    }

    const [showAlertTerimaPegawai2, setShowAlertTerimaPegawai2] = useState(false);
    const handleFromTerimaPegawai2 = async (id: string) => {
        try {
            await axiosAuth.put(`/api/applicant/setStatusAccepted`, { id: id }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            mutate('/api/applicant/all/statusInterview')
        } catch (e) {
            console.log(e);
        }
    }

    const [openModalTerima, setOpenModalTerima] = useState(false);
    const [openModalTolak, setOpenModalTolak] = useState(false);

    return (
        <>
            <div className="flex justify-between -mt-4 mb-5">
                <div className="text-start justify-start items-start">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterValue}
                        className='rounded-lg'
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </div>
            </div>
            <table className="min-w-full divide-y-2 divide-black">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-bold text-xs text-black uppercase tracking-wider ">
                            No
                        </th>
                        <th scope="col" className="px-12 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Nama
                        </th>
                        <th scope="col" className="px-12 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            NIK
                        </th>
                        <th scope="col" className="px-6 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-black">
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{index + indexOfFirstItem + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.nama}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.nik}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-2">

                                <Tooltip content="Lihat Detail" style="dark" className='bg-black'>
                                    <Link href="/[PrekTahap2LihatData]" as={`/page/dashboard/PrekTahap2/${row.id}`}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="5" fill="#F8A849" fill-opacity="0.5" />
                                            <path d="M5 15C5 15 8 8 15 8C22 8 25 15 25 15C25 15 22 22 15 22C8 22 5 15 5 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </Tooltip>
                                <Tooltip content="Terima Pegawai" style="dark" className='bg-black'>
                                    <Link href="" onClick={() => setOpenModalTerima(true)}>
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.929688" y="0.0537109" width="30" height="30" rx="5" fill="#22EE1E" fill-opacity="0.5" />
                                            <path d="M24.7988 10L12.5621 21L7 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                    <Modal show={openModalTerima} size="md" onClose={() => setOpenModalTerima(false)} popup className='backdrop-blur-lg pt-[10%]'>
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="text-center m-auto">
                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                    Yakin Ingin Menerima Pegawai ???
                                                </h3>
                                                <div className="flex justify-center gap-4">
                                                    <Button className='bg-[#f7c990] hover:bg-[#cea676] text-white' onClick={() => setOpenModalTerima(false)}>
                                                        Kembali
                                                    </Button>
                                                    <Button className='bg-[#90F68E] hover:bg-[#439541] text-white' color="white"
                                                        onClick={() => {
                                                            handleFromTerimaPegawai2(row.id)
                                                            setOpenModalTerima(false);
                                                        }}>
                                                        Ya, Terima Pegawai...
                                                    </Button>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </Tooltip>
                                <Tooltip content="Tolak Pegawai" style="dark" className='bg-black'>
                                    <Link href="" onClick={() => setOpenModalTolak(true)}>
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.929688" y="0.0537109" width="30" height="30" rx="5" fill="#F30101" fill-opacity="0.5" />
                                            <path d="M21.9297 9.05371L9.92969 21.0537" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.92969 9.05371L21.9297 21.0537" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </Link>
                                    <Modal show={openModalTolak} size="md" onClose={() => setOpenModalTolak(false)} popup className='backdrop-blur-lg pt-[10%]'>
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="text-center m-auto">
                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                    Yakin Ingin Menolak Pegawai ???
                                                </h3>
                                                <div className="flex justify-center gap-4">
                                                    <Button className='bg-[#f7c990] hover:bg-[#cea676] text-white' onClick={() => setOpenModalTolak(false)}>
                                                        Kembali
                                                    </Button>
                                                    <Button className='bg-[#F97F7F] hover:bg-[#b75151] text-white' color="white"
                                                        onClick={() => {
                                                            handleFromMenolakPegawai2(row.id);
                                                            setOpenModalTolak(false);
                                                        }}>
                                                        Ya, Tolak Pegawai
                                                    </Button>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                    {showAlertTerimaPegawai2 && (
                        <div className="absolute w-full ml-[45%] -mt-[17%]">
                            <AlertTerimaPegawai1 />
                        </div>
                    )}
                    {showAlertMenolakPegawai2 && (
                        <div className="absolute w-full ml-[45%] -mt-[17%]">
                            <AlertMenolakPegawai1 />
                        </div>
                    )}
                </tbody>
            </table >
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
