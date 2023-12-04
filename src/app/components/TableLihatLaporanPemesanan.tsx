// components/Table.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';

interface TableRow {
    produk: string;
    jumlah: string;
    harga: string;
}

interface TableProps {
    data: TableRow[];
    itemsPerPage?: number;
}

const Table: React.FC<TableProps> = ({ data, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the itemsPerPage
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Adjust currentPage if it goes beyond the total number of pages
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalPrice = data.reduce((acc, row) => acc + parseInt(row.harga), 0);
    return (
        <>
            <table className="min-w-full divide-y-2 divide-black">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-bold text-xs text-black uppercase tracking-wider ">
                            Produk
                        </th>
                        <th scope="col" className="px-12 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Jumlah
                        </th>
                        <th scope="col" className="px-12 py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Harga
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white ">
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td className="px-28 py-4 whitespace-nowrap">{row.produk}</td>
                            <td className="px-28 py-4 whitespace-nowrap ">{row.jumlah} Qty</td>
                            <td className="px-28 py-4 whitespace-nowrap ">Rp. {row.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <hr className=' divide-y divide-black   w-full font-bold text-black' /> */}
            <div className='border-b-2 border-black w-full font-bold text-black'>
                {/* Isi elemen di sini */}
            </div>
            <div className="flex justify-end items-end gap-28 mr-[13%] mt-2">
                <div className="font-semibold">TOTAL</div>
                <div className="font-[18px]">Rp. {totalPrice}</div>
            </div>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
