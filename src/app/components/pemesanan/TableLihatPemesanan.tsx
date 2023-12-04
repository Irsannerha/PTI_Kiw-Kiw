// components/Table.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from '../PaginationTable';

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

    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPrice = data.reduce((acc, row) => acc + parseInt(row.harga), 0);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <table className="min-w-full divide-y-2 divide-black">
                <tbody className="bg-white text-[12px] border-none">
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td className="px-2 py-4 whitespace-nowrap">{row.produk}</td>
                            <td className="px-2 py-4 whitespace-nowrap ">{row.jumlah} Qty</td>
                            <td className="px-2 py-4 whitespace-nowrap ">Rp. {row.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="border-t-2 border-[#C79618]"></div>
            <div className="flex justify-between mt-2 text-[12px] font-semibold">
                <div className="text-black">Total Pembayaran</div>
                <div className="text-black">Rp. {totalPrice}</div>
            </div>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
