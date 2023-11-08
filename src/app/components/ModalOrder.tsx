
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import TableModalPemesanan from './TableModalPemesanan';

function ModalOrder() {
    const [openModal, setOpenModal] = useState(false);

    const data = [
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        { uid: '0001', namaPemesan: "ando" },
        { uid: '0002', namaPemesan: "andoy" },
        // Tambahkan data lainnya sesuai kebutuhan
    ];

    return (
        <>
            <Button className='p-0.5 shadow-2xl text-black' onClick={() => setOpenModal(true)}>Order Saat Ini</Button>
            <div className="w-full absolute">
                <Modal className='w-full h-full pl-[25%] pr-[25%] pt-[2%] justify-center items-center m-auto backdrop-blur-xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Order Saat Ini</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-2">
                            <TableModalPemesanan data={data} />
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}


export default ModalOrder;