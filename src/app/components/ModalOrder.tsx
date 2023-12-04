
// 'use client';

// import { Button, Modal } from 'flowbite-react';
// import { useState, useEffect } from 'react';
// import TableModalPemesanan from './TableModalPemesanan';

// import axios from 'axios';

// function ModalOrder() {
//     const [openModal, setOpenModal] = useState(false);

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/api/pegawai'); // Adjust the endpoint as needed
//                 if (response.status === 200) {
//                     setData(response.data);
//                 } else {
//                     console.error('Error fetching data:', response.status);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const datadumy = [
//         { uid: '0001', namaPemesan: "ando1" },
//         { uid: '0002', namaPemesan: "ando2" },
//         { uid: '0003', namaPemesan: "ando3" },
//         { uid: '0004', namaPemesan: "ando4" },
//         { uid: '0005', namaPemesan: "ando5" },
//         { uid: '0006', namaPemesan: "ando6" },
//         { uid: '0001', namaPemesan: "ando1" },
//         { uid: '0002', namaPemesan: "ando2" },
//         { uid: '0003', namaPemesan: "ando3" },
//         { uid: '0004', namaPemesan: "ando4" },
//         { uid: '0005', namaPemesan: "ando5" },
//         { uid: '0006', namaPemesan: "ando6" },
//         { uid: '0001', namaPemesan: "ando1" },
//         { uid: '0002', namaPemesan: "ando2" },
//         { uid: '0003', namaPemesan: "ando3" },
//         { uid: '0004', namaPemesan: "ando4" },
//         { uid: '0005', namaPemesan: "ando5" },
//         { uid: '0006', namaPemesan: "ando6" },
//     ];

//     return (
//         <>
//             <Button className='p-0.5 shadow-2xl text-black' onClick={() => setOpenModal(true)}>Order Saat Ini</Button>
//             <div className="w-full absolute">
//                 <Modal className='w-full h-full pl-[25%] pr-[25%] pt-[5%] justify-center items-center m-auto backdrop-blur-sm' dismissible show={openModal} onClose={() => setOpenModal(false)}>
//                     <Modal.Header>Order Saat Ini</Modal.Header>
//                     <Modal.Body>
//                         <div className="space-y-2">
//                             <TableModalPemesanan data={datadumy} />
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             </div>
//         </>
//     );
// }


// export default ModalOrder;