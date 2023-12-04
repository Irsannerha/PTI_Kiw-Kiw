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

const Table: React.FC<TableProps> = ({ data, itemsPerPage = 3 }) => {
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

    // Calculate the total price of all products
    const totalPrice = data.reduce((acc, row) => acc + parseInt(row.harga), 0);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <table className="w-full relative divide-y-2 divide-black">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="px-6 py-2 font-bold text-xs text-black uppercase tracking-wider ">
                            Produk
                        </th>
                        <th scope="col" className="px-6 py-2 font-bold text-xs text-black uppercase tracking-wider">
                            Jumlah
                        </th>
                        <th scope="col" className="px-6 py-2 font-bold text-xs text-black uppercase tracking-wider">
                            Harga
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {currentItems.map((row, index) => (
                        <tr key={index} className='text-center text-sm'>
                            <td className="px-6 py-2 whitespace-nowrap">{row.produk}</td>
                            <td className="px-6 py-2 whitespace-nowrap ">{row.jumlah} Qty</td>
                            <td className="px-6 whitespace-nowrap ">Rp. {row.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='border-b-2 border-black w-full font-bold text-black'>
            </div>
            <div className="text-sm flex justify-end items-end gap-24 mr-[10%]">
                <div className="font-bold">TOTAL</div>
                <div className="font-bold">Rp. {totalPrice}</div>
            </div>
            <div className="">
                <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </div>
        </>
    );
};

export default Table;
