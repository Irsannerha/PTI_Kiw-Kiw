
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function ModalOrderLihat() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal className='w-full h-full pl-[30%] pr-[30%] pt-[10%] justify-center items-center m-auto backdrop-blur-md' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Detail Pesanan</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='gap-2'>
                    <Button color="gray" onClick={() => setOpenModal(false)}>Terima Pesanan</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Tolak Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOrderLihat;