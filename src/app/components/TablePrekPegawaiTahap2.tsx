// components/Table.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';

import AlertMenolakPegawai1 from "@/app/components/AlertMenolakPegawai1"
import AlertTerimaPegawai1 from "@/app/components/AlertTerimaPegawai1"

interface TableRow {
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
        }, 3000); // Example: Hide alert after 3 seconds
    }

    const [showAlertMenolakPegawai2, setShowAlertMenolakPegawai2] = useState(false);
    const handleFromMenolakPegawai2 = async () => {
        setShowAlertMenolakPegawai2(true)
        setTimeout(() => {
            setShowAlertMenolakPegawai2(false);
        }, 3000); // Example: Hide alert after 3 seconds
    }

    const [showAlertTerimaPegawai1, setShowAlertTerimaPegawai1] = useState(false);
    const handleFromTerimaPegawai1 = async () => {
        setShowAlertTerimaPegawai1(true)
        setTimeout(() => {
            setShowAlertTerimaPegawai1(false);
        }, 3000); // Example: Hide alert after 3 seconds
    }

    const [showAlertTerimaPegawai2, setShowAlertTerimaPegawai2] = useState(false);
    const handleFromTerimaPegawai2 = async () => {
        setShowAlertTerimaPegawai2(true)
        setTimeout(() => {
            setShowAlertTerimaPegawai2(false);
        }, 3000); // Example: Hide alert after 3 seconds
    }

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
                                {/* <button className="text-blue-500">Edit</button> */}
                                {/* <Link href="/page/dashboard/PrekTahap2LihatData"> */}
                                <Link href="/[PrekTahap2LihatData]" as={`/page/dashboard/PrekTahap2/${row.nama}`}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="5" fill="#F8A849" fill-opacity="0.5" />
                                        <path d="M5 15C5 15 8 8 15 8C22 8 25 15 25 15C25 15 22 22 15 22C8 22 5 15 5 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Link>
                                <Link href="" onClick={handleFromTerimaPegawai2}>
                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.929688" width="30" height="30" rx="5" fill="#FFA437" />
                                        <path d="M23.9297 9L12.9297 20L7.92969 15" fill="#F8A849" />
                                        <path d="M23.9297 9L12.9297 20L7.92969 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Link>
                                <Link href="" onClick={handleFromMenolakPegawai2}>
                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.929688" width="30" height="30" rx="5" fill="#D86514" />
                                        <path d="M21.9297 9L9.92969 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.92969 9L21.9297 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Link>
                                {/* <button className="text-red-500 ml-2">Hapus</button> */}
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
            </table>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
