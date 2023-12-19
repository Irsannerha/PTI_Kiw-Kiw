'use client'
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PacmanLoader } from "react-spinners";
import { MdShoppingCart } from "react-icons/md";
import NavbarPemesanan from '@/app/components/NavbarPemesanan'
import FoodCard from "../../components/pemesanan/FoodCard";
import FoodData from "./data/FoodData"
import { MdDelete } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { PiMinusSquare } from "react-icons/pi";
import Link from "next/link";
import axios from 'axios';
import Image from "next/image";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { log } from "console";

export interface Product {
    itemId: string;
    name: string;
    price: number;
    img: string;
    qty?: number;
}

interface Makanan {
    itemId: string;
    name: string;
    price: number;
    img: string;
    qty?: number;
}

export default function Pemesanan() {
    const [activeCart, setActiveCart] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchValue, setSearchValue] = useState("");
    const [makanan,setMakanan] = useState<Makanan[]>([]);
    const [data, setdata] = useState<Product[]>([]);
    const [name, setname] = useState("");
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };



    const { data: dataItem, isLoading, error } = useSWR("/api/menu/allItem", async (url) => {
        const res = await axios.get(url)
        const filterData = res.data.map((e: any) => {
            return {
                id: e.id,
                itemId: e.id,
                name: e.name,
                price: e.price,
                img: e.gambar,
                des: e.deskripsi,
                category: e.categoryId,
            }
        })
        // setdata(filterData)
        return filterData
    })


    const handleAddToCart = (itemData: Product) => {
        const existingItem = data.find((item) => item.itemId === itemData.itemId);
        if (existingItem) {
            existingItem.qty = (existingItem.qty || 0) + 1;
            setdata([...data]);
        } else {
            setdata([...data, { ...itemData, qty: 1 }]);
        }
    };

    const { data: dataMakanan, isLoading:lala, error:rara } = useSWR('/api/menu/allItemMakanan', async (url) => {
        const res = await axios.get(url)
        const filterMakanan = res.data.map((e: any) => {
            return {
                id: e.id,
                itemId: e.id,
                name: e.name,
                price: e.price,
                img: e.gambar,
                des: e.deskripsi,
                category: e.categoryId,
            }
        })
        return filterMakanan
    })
    const { data: dataMinuman, isLoading:haha, error:huhu } = useSWR('/api/menu/allItemMinuman', async (url) => {
        const res = await axios.get(url)
        const filterMakanan = res.data.map((e: any) => {
            return {
                id: e.id,
                itemId: e.id,
                name: e.name,
                price: e.price,
                img: e.gambar,
                des: e.deskripsi,
                category: e.categoryId,
            }
        })
        return filterMakanan
    })

    const filteredFoodData = () => {
        if (selectedCategory === "Semua") {
            return dataItem;
        } else if (selectedCategory === "Makanan") {
            // console.log("MAKANAN");
            return dataMakanan;
        }else{
            return dataMinuman
        }
    };

    const handleqtyChange = (index: number, action: 'add' | 'subtract') => {
        const updateddata = [...data];
        const updatedItem = { ...updateddata[index] };
        if (action === 'add') {
            updatedItem.qty = (updatedItem.qty || 0) + 1;
        } else if (action === 'subtract') {
            updatedItem.qty = Math.max((updatedItem.qty || 0) - 1, 0);
            if (updatedItem.qty === 0) {
                updateddata.splice(index, 1);
            }
        }

        updateddata[index] = updatedItem;
        setdata(updateddata);
    };

    const handleDeleteItem = (index: number) => {
        const updateddata = data.filter((_, i) => i !== index);
        setdata(updateddata);
    };

    const route = useParams<{ detailPemesanan: string }>();
    const routess = useRouter()
    const handleCheckout = async () => {
        // const userData = { name, data };
        // console.log('User Data:', JSON.stringify(userData));
        // try {
        //     const response = await axios.post('/api/order/createOrder', userData); // Send userData to the backend
        //     // window.location.href = '/page/pemesanan/detailPemesanan';
        //     console.log('Backend response:', response.data); // Log or handle the response from the backend
        // } catch (error) {
        //     console.error('Error during checkout:', error);
        // }

        const itemsToCheckout = data.map(({ itemId, qty }) => ({ itemId, qty }));

        const userData = { name, data: itemsToCheckout };

        console.log('User Data:', JSON.stringify(userData));

        try {
            const response = await axios.post('/api/order/createOrder', userData);
            console.log('Backend response:', response.data);
            route.detailPemesanan = response.data.id
            const id = response.data.id
            console.log(route.detailPemesanan);
            routess.push(`/page/pemesanan/${id}`);
            // router.push({
            //     pathname: '/page/pemesanan/detailPemesanan/[data]',
            //     query: { data: response.data.id },
            // });
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <div className='h-screen flex flex-col justify-center items-center ' style={{ backgroundImage: 'url("/images/bg-loading.png")' }}>
                        <div className="ml-10 mb-4">
                            <Image
                                src="/images/logokedai.png"
                                alt="Logo Kedai"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="mb-4 mr-6">
                            <PacmanLoader color="#965A36" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className=" bg-[#E2E2E2] h-screen max-h-max w-full">
                        <NavbarPemesanan />
                        <div className="">
                            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden justify-center md:justify-center lg:justify-center">
                                <button
                                    onClick={() => handleCategoryChange("Semua")}
                                    className={`text-white px-3 py-2 bg-[#F8A849] opacity-70 font-bold rounded-lg hover:bg-[#D2691E] hover:text-white ${selectedCategory === "Semua" && "bg-[#D2691E] text-white"}`}
                                >
                                    Semua
                                </button>
                                <button
                                    onClick={() => handleCategoryChange("Makanan")}
                                    className={`text-white px-3 py-2 bg-[#F8A849] opacity-70 font-bold rounded-lg hover:bg-[#D2691E] hover:text-white ${selectedCategory === "Makanan" && "bg-[#D2691E] text-white"}`}
                                >
                                    Makanan
                                </button>
                                <button
                                    onClick={() => handleCategoryChange("Minuman")}
                                    className={`text-white px-3 py-2 bg-[#F8A849] opacity-70 font-bold rounded-lg hover:bg-[#D2691E] hover:text-white ${selectedCategory === "Minuman" && "bg-[#D2691E] text-white"}`}
                                >
                                    Minuman
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-center lg:justify-center mx-5 lg:mx-5">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={handleSearchChange}
                                className='rounded-lg w-full md:w-[80%] lg:w-[40%]'
                            />
                        </div>
                        <div className="rounded-lg grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-center lg:justify-center gap-5 md:gap-5 mx-5 my-5 max-h-[400px] md:max-h-[700px] lg:max-h-[400px] overflow-y-auto overscroll-auto md:pl-10 md:pr-10 mb-10">
                            {filteredFoodData().map((dataItem:any) => (
                                <FoodCard
                                    key={dataItem.id}
                                    itemId={dataItem.id}
                                    name={dataItem.name}
                                    price={dataItem.price}
                                    // desc={dataItem.deskripsi}
                                    img={dataItem.img}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                        <div
                            className={`fixed right-0 top-0 w-full lg:w-[30vw] h-full p-5 bg-[#E8E8E8] mb-3 opacity-90 ${activeCart ? "translate-x-0" : "translate-x-full"
                                } transition-all duration-500 z-10`}
                        >
                            <div className="flex justify-between items-center my-3">
                                <span className="text-xl font-bold text-gray-800">Pesanan Anda</span>
                                <IoMdClose
                                    onClick={() => setActiveCart(!activeCart)}
                                    className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-start md:justify-center lg:justify-center mb-5">
                                <input
                                    type="text"
                                    placeholder="Masukkan Nama Anda"
                                    className='rounded-lg w-full'
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                            </div>
                            <div className="scroll-m-10" style={{ maxHeight: "400px", overflowY: "scroll" }}>
                                {data.map((dataItem, index) => (
                                    <div key={index} className="flex gap-2 shadow-md rounded-lg p-2 mb-3 bg-white">
                                        <div className="grid grid-cols-3 justify-center items-center gap-2">
                                            <div className="">
                                                <img src={dataItem.img} alt={dataItem.name} className="w-12 h-12 object-cover rounded" />
                                            </div>
                                            <div className="-ml-12">
                                                <h2 className="font-bold text-gray-800">{dataItem.name}</h2>
                                                <span className="text-[#D2691E] font-bold">
                                                    Rp.
                                                    <span className="ml-1">{dataItem.price * (dataItem.qty || 0)}</span>
                                                </span>
                                            </div>
                                            <div className="right-0 justify-end items-center m-auto ml-9">
                                                <MdDelete
                                                    onClick={() => handleDeleteItem(index)}
                                                    className="cursor-pointer text-[#D2691E] hover:text-[#D2691E] ml-11" size={20}
                                                />
                                                <div className="flex gap-2 mt-2">
                                                    <PiMinusSquare
                                                        onClick={() => (dataItem.qty && dataItem.qty > 1) && handleqtyChange(index, 'subtract')}
                                                        className={`cursor-pointer text-[#D2691E] ${dataItem.qty === 1 ? 'opacity-50' : ''}`} size={20}
                                                    />
                                                    <span className="text-[#D2691E]">{dataItem.qty || 0}</span>
                                                    <FiPlusSquare
                                                        onClick={() => handleqtyChange(index, 'add')}
                                                        className="cursor-pointer text-[#D2691E] hover:text-[#D2691E]" size={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 bg-white w-full -ml-5 pl-5 pt-2 m-auto">
                                <h3 className="font-semibold text-gray-800">Pesanan :  {data.reduce((total, item) => total + (item.qty || 0), 0)} </h3>
                                <h3 className="font-semibold text-gray-800">
                                    Total Harga : Rp. {data.reduce((total, item) => total + (item.price * (item.qty || 1)), 0)}
                                </h3>
                                <hr className="w-[90vw] lg:w-[18vw] my-2" />
                                {/* <Link href={'/page/pemesanan/detaiPemesanan'}> */}
                                <button
                                    onClick={handleCheckout}
                                    className="bg-[#D2691E] hover:bg-[#F8A849] font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
                                >
                                    Pesan Sekarang
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                        <MdShoppingCart
                            onClick={() => setActiveCart(!activeCart)}
                            className={`rounded-full bg-[#F8A849] shadow text-5xl p-3 fixed bottom-4 right-4 animate-bounce delay-500 transition-all text-white cursor-pointer`}
                        />
                    </div>
                </>
            )}
        </>
    );
}