"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function KelolaMenuPemesanan() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('id-ID');



    const menuMinuman = [
        { id: 1, image: '/images/ayamGeprek.png' },
        { id: 2, image: '/images/ayamGeprek.png' },
        { id: 3, image: '/images/ayamGeprek.png' },
        // Add more orders as needed
    ];

    const menuMakanan = [
        { id: 1, image: '/images/ayamGeprek.png' },
        { id: 2, image: '/images/ayamGeprek.png' },
        { id: 3, image: '/images/ayamGeprek.png' },
        // Add more orders as needed
    ];
    return (
        <>
            <div style={{ display: 'flex' }}>
                <DashboardSideBar />
                <div style={{ marginLeft: '280px', padding: '20px', marginTop: '10px' }} className="w-[77%]">
                    <div className="flex justify-between">
                        <div className="text-start justify-start items-start">
                            <div className="mt-4 mb-4  w-72 bg-[#FFE4C4] shadow-lg rounded-lg">
                                <div className="flex p-3">
                                    <div className="flex flex-col justify-center">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.5833 8.3335H10.4167C8.11548 8.3335 6.25 10.199 6.25 12.5002V41.6668C6.25 43.968 8.11548 45.8335 10.4167 45.8335H39.5833C41.8845 45.8335 43.75 43.968 43.75 41.6668V12.5002C43.75 10.199 41.8845 8.3335 39.5833 8.3335Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33.3335 4.1665V12.4998" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.6665 4.1665V12.4998" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.25 20.8335H43.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div className="w-full flex justify-end items-center gap-6">
                                        <div className="">{formattedDate}</div>
                                        <div className="">{formattedTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end justify-end items-end">
                            <div className="mt-4 mb-4  w-72 bg-[#FFE4C4] shadow-lg rounded-lg">
                                <div className="flex p-3">
                                    <div className="w-full flex flex-col justify-center">
                                        Selamat Datang, Admin
                                    </div>
                                    <div className="w-full flex justify-end items-end">
                                        <svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5002 20.5C20.5109 20.5 22.4766 19.9135 24.1485 18.8147C25.8204 17.7159 27.1234 16.1541 27.8929 14.3268C28.6624 12.4996 28.8638 10.4889 28.4715 8.5491C28.0792 6.60929 27.1109 4.82746 25.6891 3.42894C24.2672 2.03041 22.4557 1.078 20.4836 0.692152C18.5114 0.306299 16.4673 0.504333 14.6095 1.26121C12.7518 2.01809 11.164 3.29981 10.0469 4.9443C8.92976 6.58879 8.3335 8.52219 8.3335 10.5C8.3335 13.1522 9.40462 15.6957 11.3112 17.5711C13.2179 19.4464 15.8038 20.5 18.5002 20.5ZM18.5002 5.5C19.5056 5.5 20.4884 5.79325 21.3243 6.34266C22.1603 6.89206 22.8118 7.67296 23.1966 8.58659C23.5813 9.50022 23.682 10.5056 23.4858 11.4755C23.2897 12.4454 22.8055 13.3363 22.0946 14.0355C21.3837 14.7348 20.4779 15.211 19.4919 15.4039C18.5058 15.5969 17.4837 15.4978 16.5549 15.1194C15.626 14.741 14.8321 14.1001 14.2735 13.2779C13.715 12.4556 13.4168 11.4889 13.4168 10.5C13.4168 9.17392 13.9524 7.90215 14.9057 6.96447C15.859 6.02679 17.152 5.5 18.5002 5.5Z" fill="black" />
                                            <path d="M18.5002 25.5C13.7815 25.5 9.25614 27.3437 5.91955 30.6256C2.58297 33.9075 0.708496 38.3587 0.708496 43C0.708496 43.663 0.976279 44.2989 1.45293 44.7678C1.92959 45.2366 2.57607 45.5 3.25016 45.5C3.92425 45.5 4.57074 45.2366 5.04739 44.7678C5.52405 44.2989 5.79183 43.663 5.79183 43C5.79183 39.6848 7.13074 36.5054 9.51401 34.1612C11.8973 31.817 15.1297 30.5 18.5002 30.5C21.8706 30.5 25.103 31.817 27.4863 34.1612C29.8696 36.5054 31.2085 39.6848 31.2085 43C31.2085 43.663 31.4763 44.2989 31.9529 44.7678C32.4296 45.2366 33.0761 45.5 33.7502 45.5C34.4243 45.5 35.0707 45.2366 35.5474 44.7678C36.024 44.2989 36.2918 43.663 36.2918 43C36.2918 38.3587 34.4174 33.9075 31.0808 30.6256C27.7442 27.3437 23.2188 25.5 18.5002 25.5Z" fill="black" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between -mt-4 ">
                        <div className="text-start justify-start items-start">
                            <div className="mt-4 mb-4 w-full bg-[#F8A849] shadow-lg rounded-lg">
                                <div className="flex p-3 gap-5 justify-center items-center m-auto text-center text-white">
                                    <div className="flex flex-col justify-center">
                                        +
                                    </div>
                                    <div className="flex items-center">
                                        Tambah Item
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <div className="flex justify-between relative">
                            <div className="m-4 text-[24px] absolute">Makanan</div>
                            <div className="flex justify-start bg-[#EFEFFF] w-[49%] pt-[5%]">
                                {menuMakanan.map(order => (
                                    <div key={order.id} className="m-4 w-72 shadow-lg rounded-lg h-48 bg-white">
                                        <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                            <Image src={order.image} alt={`order-${order.id}`} width={500} height={400} />
                                        </div>
                                        <div className="flex pb-2">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Ayam Geprek
                                            </div>
                                        </div>
                                        <div className="flex pb-3">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Rp. 10.000
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <div className="justify-between flex w-full gap-1">
                                                <div className="bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 16.6665H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.5 4.1665L15 6.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <div className="bg-[#F30101] p-1 w-[50%] flex justify-center items-center rounded-r-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.5 5H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15.8332 5V16.6667C15.8332 17.5 14.9998 18.3333 14.1665 18.3333H5.83317C4.99984 18.3333 4.1665 17.5 4.1665 16.6667V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.6665 4.99984V3.33317C6.6665 2.49984 7.49984 1.6665 8.33317 1.6665H11.6665C12.4998 1.6665 13.3332 2.49984 13.3332 3.33317V4.99984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="ml-[53%] m-4 text-[24px] absolute z-30">Minuman</div>
                            <div className="flex justify-start bg-[#EFEFFF] w-[49%] pt-[5%]">
                                {menuMinuman.map(order => (
                                    <div key={order.id} className="m-4 w-72 shadow-lg rounded-lg h-48 bg-white">
                                        <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                            <Image src={order.image} alt={`order-${order.id}`} width={500} height={400} />
                                        </div>
                                        <div className="flex pb-2">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Ayam Geprek
                                            </div>
                                        </div>
                                        <div className="flex pb-3">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Rp. 10.000
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <div className="justify-between flex w-full gap-1">
                                                <div className="bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 16.6665H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.5 4.1665L15 6.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <div className="bg-[#F30101] p-1 w-[50%] flex justify-center items-center rounded-r-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.5 5H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15.8332 5V16.6667C15.8332 17.5 14.9998 18.3333 14.1665 18.3333H5.83317C4.99984 18.3333 4.1665 17.5 4.1665 16.6667V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.6665 4.99984V3.33317C6.6665 2.49984 7.49984 1.6665 8.33317 1.6665H11.6665C12.4998 1.6665 13.3332 2.49984 13.3332 3.33317V4.99984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bagian dua */}
                        <div className="flex justify-between">
                            <div className="flex justify-start bg-[#EFEFFF] w-[49%] ">
                                {menuMakanan.map(order => (
                                    <div key={order.id} className="m-4 w-72 shadow-lg rounded-lg h-48 bg-white">
                                        <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                            <Image src={order.image} alt={`order-${order.id}`} width={500} height={400} />
                                        </div>
                                        <div className="flex pb-2">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Ayam Geprek
                                            </div>
                                        </div>
                                        <div className="flex pb-3">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Rp. 10.000
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <div className="justify-between flex w-full gap-1">
                                                <div className="bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 16.6665H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.5 4.1665L15 6.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <div className="bg-[#F30101] p-1 w-[50%] flex justify-center items-center rounded-r-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.5 5H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15.8332 5V16.6667C15.8332 17.5 14.9998 18.3333 14.1665 18.3333H5.83317C4.99984 18.3333 4.1665 17.5 4.1665 16.6667V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.6665 4.99984V3.33317C6.6665 2.49984 7.49984 1.6665 8.33317 1.6665H11.6665C12.4998 1.6665 13.3332 2.49984 13.3332 3.33317V4.99984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start bg-[#EFEFFF] w-[49%]">
                                {menuMinuman.map(order => (
                                    <div key={order.id} className="m-4 w-72 shadow-lg rounded-lg h-48 bg-white">
                                        <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                                            <Image src={order.image} alt={`order-${order.id}`} width={100} height={100} />
                                        </div>
                                        <div className="flex pb-2">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Ayam Geprek
                                            </div>
                                        </div>
                                        <div className="flex pb-3">
                                            <div className="justify-start items-start flex text-left text-black text-[14px] pl-2">
                                                Rp. 10.000
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <div className="justify-between flex w-full gap-1">
                                                <div className="bg-[#C79618] p-1 w-[50%] flex justify-center items-center rounded-l-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 16.6665H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.5 4.1665L15 6.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <div className="bg-[#F30101] p-1 w-[50%] flex justify-center items-center rounded-r-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.5 5H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15.8332 5V16.6667C15.8332 17.5 14.9998 18.3333 14.1665 18.3333H5.83317C4.99984 18.3333 4.1665 17.5 4.1665 16.6667V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.6665 4.99984V3.33317C6.6665 2.49984 7.49984 1.6665 8.33317 1.6665H11.6665C12.4998 1.6665 13.3332 2.49984 13.3332 3.33317V4.99984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


