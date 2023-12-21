'use client';
import { Tooltip } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PaginationTable from './PaginationTable';

interface TableRow {
    id: string;
    uid: string;
    tanggal: string;
    name: string;
    total: string;
    status: string;
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
        return row.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            row.uid.toLowerCase().includes(filterValue.toLowerCase()) || row.tanggal.toLowerCase().includes(filterValue.toLowerCase());
    });

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePrint = (id: string) => {
        const selectedData = data.find((row) => row.id === id);
        console.log(selectedData);
        if (!selectedData) {
            console.error(`Data with UID ${id} not found.`);
            return;
        }
        const printableData = {
            UID: selectedData.uid,
            Tanggal: selectedData.tanggal,
            'Nama Pemesan': selectedData.name,
            Harga: selectedData.total,
            Status: selectedData.status
        };
        const printContent = `
    <img src="/images/logoNavbar.png" width="80" height="80" className="justify-center" alt="Logo Kedai Bu Titin" />
    <div className="text-[18px] font-bold">Kedai Bu Titin</div>
    <h2 className="mb-6 text-2xl font-bold">Laporan Pemesanan</h2>
    ${Object.entries(printableData)
                .map(([key, value]) => `<div className="mb-4"><span class="font-bold">${key}:</span> ${value}</div>`)
                .join('')}
  `;
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
      <html>
        <head>
          <title>Print Document</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              padding: 20px;
            }
            .mb-4 {
              margin-bottom: 1rem;
            }
            .font-bold {
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
            printWindow.document.close();
            printWindow.print();
            printWindow.onafterprint = () => {
                printWindow.close();
            };
        } else {
            console.error('Window for printing is null.');
        }
    };

    return (
        <>
            <div className="flex justify-between -mt-4 mb-4">
                <div className="text-start justify-start items-start">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterValue}
                        className='rounded-lg h-full'
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </div>
                <div className="text-end justify-end items-end relative">
                    <Link href={"/page/dashboard/LaporanPemesanan/OrderSaatIni"}>
                        <div className="w-full bg-[#F8A849] shadow-lg rounded-lg hover:bg-[#C79618] cursor-pointer">
                            <div className="flex pl-2 pb-2 pt-2 gap-2 justify-end items-center m-auto text-center text-black">
                                <div className="flex items-center pr-2">
                                    Order Saat Ini
                                </div>
                                <span className="flex h-3 w-3 absolute mb-10">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2691E] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D2691E]"></span>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <table className="min-w-full divide-y-2 divide-black">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider ">
                            No
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            UID
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Tanggal
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Nama Pemesan
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Harga
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className=" py-3 font-bold text-xs text-black uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-black">
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td className="px-9 py-4 whitespace-nowrap">{index + indexOfFirstItem + 1}</td>
                            <td className="px-9 py-4 whitespace-nowrap">{row.uid}</td>
                            <td className="px-9 py-4 whitespace-nowrap">{row.tanggal}</td>
                            <td className="px-9 py-4 whitespace-nowrap">{row.name}</td>
                            <td className="px-9 py-4 whitespace-nowrap ">{row.total}</td>
                            <td className="px-9 py-4 whitespace-nowrap">{row.status}</td>
                            <td className="px-9 py-4 whitespace-nowrap flex justify-center items-center gap-2">
                                {/* <button className="text-blue-500">Edit</button> */}
                                {/* <Link href="/page/dashboard/LaporanPemesanan/"> */}
                                <Tooltip content="Lihat Detail" style="dark" className='bg-black'>
                                    <Link href="/[ViewLaporanPemesanan]" as={`/page/dashboard/LaporanPemesanan/${row.id}`}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="5" fill="#F8A849" fill-opacity="0.5" />
                                            <path d="M5 15C5 15 8 8 15 8C22 8 25 15 25 15C25 15 22 22 15 22C8 22 5 15 5 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </Tooltip>
                                <Tooltip content="Print/Cetak" style="dark" className='bg-black'>
                                    <Link href="/" passHref>
                                        <div onClick={(e) => {
                                            e.preventDefault();
                                            handlePrint(row.id);
                                        }}>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="30" height="30" rx="5" fill="#F8A849" />
                                                <path d="M9 12V5H21V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V14C5 13.4696 5.21071 12.9609 5.58579 12.5858C5.96086 12.2107 6.46957 12 7 12H23C23.5304 12 24.0391 12.2107 24.4142 12.5858C24.7893 12.9609 25 13.4696 25 14V19C25 19.5304 24.7893 20.0391 24.4142 20.4142C24.0391 20.7893 23.5304 21 23 21H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21 17H9V25H21V17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
};

export default Table;
