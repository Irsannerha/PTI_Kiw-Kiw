
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import ModalTabelOrderLihat from './ModalTabelOrderLihat';



function ModalOrderLihat() {
    const [openModal, setOpenModal] = useState(false);

    const data = [
        { produk: 'Ayam Geprek', jumlah: "1 Qty", harga: "Rp. 10.000" },
        { produk: 'Es Teh Manis', jumlah: "1 Qty", harga: "Rp. 20.000" },
        { produk: 'Ayam Geprek', jumlah: "1 Qty", harga: "Rp. 10.000" },
    ];

    return (
        <>
            <div className='border-none cursor-pointer' onClick={() => setOpenModal(true)}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="5" fill="#F8A849" fill-opacity="0.5" />
                    <path d="M5 15C5 15 8 8 15 8C22 8 25 15 25 15C25 15 22 22 15 22C8 22 5 15 5 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <Modal className='w-full pl-[25%] pr-[25%] pt-[1%] justify-center items-center m-auto backdrop-blur-sm' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Detail Pesanan</Modal.Header>
                <Modal.Body>
                    <div className="space-y-2">
                        <div className="flex justify-start">
                            <div className=" text-black text-md font-bold font-['Montserrat'] leading-10">
                                <div className="flex-shrink-0">No Invoice</div>
                                <div className="flex-shrink-0">Nama Pemesan</div>
                                <div className="flex-shrink-0">Tanggal</div>
                            </div>
                            <div className="text-black text-md font-normal font-['Montserrat'] leading-10 ml-5">
                                <div className="flex-shrink-0">: 001 </div>
                                <div className="flex-shrink-0">: Hasan</div>
                                <div className="flex-shrink-0">: 23/10/2023</div>
                            </div>
                        </div>
                        <ModalTabelOrderLihat data={data} />
                    </div>
                </Modal.Body>
                <Modal.Footer className='gap-2 -mt-5'>
                    <Button color="gray" className='bg-[#F8A849]' onClick={() => setOpenModal(false)}>Terima Pesanan</Button>
                    <Button color="gray" className='bg-[#D2691E]' onClick={() => setOpenModal(false)}>
                        Tolak Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOrderLihat;