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

export interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity?: number;
}

export default function Pemesanan() {
    const [activeCart, setActiveCart] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchValue, setSearchValue] = useState("");
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [namaLengkap, setNamaLengkap] = useState("");
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleAddToCart = (itemData: Product) => {
        const existingItem = cartItems.find((item) => item.id === itemData.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 0) + 1;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { ...itemData, quantity: 1 }]);
        }
    };

    const filteredFoodData = () => {
        if (selectedCategory === "Semua") {
            return FoodData.filter(food => food.name.toLowerCase().includes(searchValue.toLowerCase()));
        } else {
            return FoodData.filter((food) => food.category === selectedCategory);
        }
    };

    const handleQuantityChange = (index: number, action: 'add' | 'subtract') => {
        const updatedCartItems = [...cartItems];
        const updatedItem = { ...updatedCartItems[index] };
        if (action === 'add') {
            updatedItem.quantity = (updatedItem.quantity || 0) + 1;
        } else if (action === 'subtract') {
            updatedItem.quantity = Math.max((updatedItem.quantity || 0) - 1, 0);
            if (updatedItem.quantity === 0) {
                updatedCartItems.splice(index, 1);
            }
        }

        updatedCartItems[index] = updatedItem;
        setCartItems(updatedCartItems);
    };

    const handleDeleteItem = (index: number) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
    };

    const handleCheckout = async () => {
        const userData = { cartItems, namaLengkap };
        console.log('User Data:', JSON.stringify(userData));
        try {
            const response = await axios.post('/api/checkout', userData); // Send userData to the backend
            window.location.href = '/page/pemesanan/detailPemesanan';
            console.log('Backend response:', response.data); // Log or handle the response from the backend
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="relative bg-[#E2E2E2] h-screen flex items-center justify-center">
            {loading ? (
                <PacmanLoader color="#F8A849" />
            ) : (
                <>
                    <div className="bg-[#E8E8E8] h-screen max-h-max w-full">
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
                        <div className="rounded-lg grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-center lg:justify-center gap-5 md:gap-5 mx-5 my-5 max-h-[400px] md:max-h-[700px] lg:max-h-[350px] overflow-y-auto overscroll-auto md:pl-10 md:pr-10">
                            {filteredFoodData().map((food) => (
                                <Foo dCard
                                    key={food.id}
                                    id={food.id}
                                    name={food.name}
                                    price={food.price}
                                    desc={food.desc}
                                    img={food.img}
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
                                    value={namaLengkap}
                                    onChange={(e) => setNamaLengkap(e.target.value)}
                                />
                            </div>
                            <div className="scroll-m-10" style={{ maxHeight: "400px", overflowY: "scroll" }}>
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex gap-2 shadow-md rounded-lg p-2 mb-3 bg-white">
                                        <div className="grid grid-cols-3 justify-center items-center gap-2">
                                            <div className="">
                                                <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            </div>
                                            <div className="-ml-12">
                                                <h2 className="font-bold text-gray-800">{item.name}</h2>
                                                <span className="text-[#D2691E] font-bold">
                                                    Rp.
                                                    <span className="ml-1">{item.price * (item.quantity || 0)}</span>
                                                </span>
                                            </div>
                                            <div className="right-0 justify-end items-center m-auto ml-9">
                                                <MdDelete
                                                    onClick={() => handleDeleteItem(index)}
                                                    className="cursor-pointer text-[#D2691E] hover:text-[#D2691E] ml-11" size={20}
                                                />
                                                <div className="flex gap-2 mt-2">
                                                    <PiMinusSquare
                                                        onClick={() => (item.quantity && item.quantity > 1) && handleQuantityChange(index, 'subtract')}
                                                        className={`cursor-pointer text-[#D2691E] ${item.quantity === 1 ? 'opacity-50' : ''}`} size={20}
                                                    />
                                                    <span className="text-[#D2691E]">{item.quantity || 0}</span>
                                                    <FiPlusSquare
                                                        onClick={() => handleQuantityChange(index, 'add')}
                                                        className="cursor-pointer text-[#D2691E] hover:text-[#D2691E]" size={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 bg-white w-full -ml-5 pl-5 pt-2 m-auto">
                                <h3 className="font-semibold text-gray-800">Pesanan :  {cartItems.reduce((total, item) => total + (item.quantity || 0), 0)} </h3>
                                <h3 className="font-semibold text-gray-800">
                                    Total Harga : Rp. {cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)}
                                </h3>
                                <hr className="w-[90vw] lg:w-[18vw] my-2" />
                                <Link href={"/page/pemesanan/detailPemesanan"}>
                                    <button
                                        onClick={handleCheckout}
                                        className="bg-[#D2691E] hover:bg-[#F8A849] font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
                                    >
                                        Pesan Sekarang
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <MdShoppingCart
                            onClick={() => setActiveCart(!activeCart)}
                            className={`rounded-full bg-[#F8A849] shadow text-5xl p-3 fixed bottom-4 right-4 animate-bounce delay-500 transition-all text-white cursor-pointer`}
                        />
                    </div>
                </>
            )}
        </div>
    );
}