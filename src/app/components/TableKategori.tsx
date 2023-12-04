// components/Table.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';
import AlertHapusDataKategori from "@/app/components/AlertHapusDataKategori"

interface TableRow {
    nama: string;
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
        return row.nama.toLowerCase().includes(filterValue.toLowerCase())
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
    const handleFormDelete = async () => {
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
            {/* <div className="flex justify-between -mt-4 mb-5">
                <div className="text-start justify-start items-start">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterValue}
                        className='rounded-lg'
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </div>
            </div> */}
            <table className="min-w-full divide-y-2 divide-black -mt-6">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-bold text-xs text-black uppercase tracking-wider ">
                            No
                        </th>
                        <th scope="col" className="px-12 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Nama Kategori
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
                            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-2">
                                {/* <button className="text-blue-500">Edit</button> */}
                                <Link href="/page/dashboard/UbahKategori">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="5" fill="#F8A849" fill-opacity="0.5" />
                                        <path d="M20 6.00015C20.2547 5.69918 20.5697 5.45421 20.925 5.28083C21.2803 5.10745 21.6681 5.00948 22.0636 4.99316C22.4592 4.97684 22.8538 5.04253 23.2224 5.18604C23.5909 5.32954 23.9254 5.54772 24.2043 5.82667C24.4833 6.10562 24.7006 6.43921 24.8425 6.80619C24.9845 7.17317 25.0478 7.56548 25.0286 7.95813C25.0094 8.35077 24.908 8.73513 24.7309 9.08671C24.5538 9.43829 24.3049 9.74938 24 10.0001L10.5 23.5001L5 25.0001L6.5 19.5001L20 6.00015Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 8L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </Link>
                                <Link href="#" onClick={handleFormDelete}>
                                    {/* <a href="#" onClick={handleFormDelete}> */}
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="5" fill="#D86514" />
                                        <path d="M6 9H24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22 9V23C22 24 21 25 20 25H10C9 25 8 24 8 23V9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11 9V7C11 6 12 5 13 5H17C18 5 19 6 19 7V9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13 14V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 14V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    {/* </a> */}
                                </Link>
                                {/* <button className="text-red-500 ml-2">Hapus</button> */}
                            </td>
                        </tr>
                    ))}
                    {showAlertTerimaPegawai1 && (
                        <div className="absolute w-full ml-[45%] -mt-[13%]">
                            <AlertHapusDataKategori />
                        </div>
                    )}

                </tbody>
            </table>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
