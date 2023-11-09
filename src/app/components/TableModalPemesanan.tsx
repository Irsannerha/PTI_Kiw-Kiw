// components/Table.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';
import ModalOrderLihat from './ModalOrderLihat';

interface TableRow {
    uid: string;
    namaPemesan: string;
}

interface TableProps {
    data: TableRow[];
    itemsPerPage?: number;
}

const TableModalPemesanan: React.FC<TableProps> = ({ data, itemsPerPage = 5 }) => {
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
        return row.namaPemesan.toLowerCase().includes(filterValue.toLowerCase()) ||
            row.uid.toLowerCase().includes(filterValue.toLowerCase());
    });

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <>
            <div className="flex justify-between -mt-4 mb-4">
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
                        <th scope="col" className="font-bold text-xs text-black uppercase tracking-wider ">
                            No
                        </th>
                        <th scope="col" className="font-bold text-xs text-black uppercase tracking-wider">
                            UID
                        </th>
                        <th scope="col" className="font-bold text-xs text-black uppercase tracking-wider">
                            Nama Pemesan
                        </th>
                        <th scope="col" className="font-bold text-xs text-black uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-black text-center">
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            {/* <ModalOrderAccordion/> */}
                            <td className="px-6 py-2 whitespace-nowrap"> {index + indexOfFirstItem + 1}</td>
                            <td className="px-6 py-2 whitespace-nowrap">{row.uid}</td>
                            <td className="px-6 py-2 whitespace-nowrap">{row.namaPemesan}</td>
                            <td className="px-6 py-2 whitespace-nowrap flex justify-center items-center ">
                                {/* <button className="text-blue-500">Edit</button> */}
                                <ModalOrderLihat />
                                {/* <button className="text-red-500 ml-2">Hapus</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default TableModalPemesanan;
