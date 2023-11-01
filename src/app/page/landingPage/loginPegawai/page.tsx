"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Tolkit from "@/app/components/Tolkit";
import AlertInputEmail from "@/app/components/AlertInputEmail"
import AlertInputPassword from "@/app/components/AlertInputPassword"
import AlertLoginSucces from "@/app/components/AlertLoginSucces"

// Deklarasikan tipe data terlebih dahulu
interface DataFecth {
    email: string;
    password: string;
}

export default function LandingPage() {
    // Inisialisasi state dan variabel yang diperlukan
    const initialData: DataFecth = {
        email: "",
        password: ""
    };

    const [email, setEmail] = useState(initialData.email);
    const [password, setPassword] = useState(initialData.password);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const [showPasswordAlert, setShowPasswordAlert] = useState(false);
    const [showEmailAlert, setShowEmailAlert] = useState(false);
    const [showSuccesLoginAlert, setshowSuccesLoginAlert] = useState(false);

    // Fungsi untuk menangani pengiriman formulir
    const handleFormSubmit = async () => {
        if (!email) {
            setIsEmailEmpty(true);
        } else {
            setIsEmailEmpty(false);
        }
        if (!password) {
            setIsPasswordEmpty(true);
        } else {
            setIsPasswordEmpty(false);
        }
        if (email && password) {
            if (email.includes('@gmail.com')) {
                console.log('email: ', email);
                console.log('password: ', password);
                if (email === "test@gmail.com" && password === "test") {
                    setshowSuccesLoginAlert(true);
                }
                handleReset();
            } else {
                alert('Use @gmail.com in email');
            }
        }

        if (email && isPasswordEmpty) {
            setShowPasswordAlert(true);
        } else if (password && isEmailEmpty) {
            setShowEmailAlert(true);
        }
    };

    // Fungsi untuk mereset formulir
    const handleReset = () => {
        setEmail("");
        setPassword("");
        setIsEmailEmpty(false);
        setIsPasswordEmpty(false);
    };

    return (
        <>
             <nav className="flex justify-between items-center py-3 px-10 bg-[#FFE4C4] fixed top-0 w-full z-10 shadow-xl">
                <Link href="https://nextjs.org/docs/api-reference/next/link#with-url-object">
                    <Image
                        src="/images/logoKedai.png"
                        alt="logo Kedai"
                        className="drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
                        width={90}
                        height={90}
                        priority
                    />
                </Link>

                <ul className="flex gap-7 items-center font">
                    <li>
                        <Link className="text-slate-800 hover:text-gray-50" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-800 hover:text-gray-50" href="/profil">
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-800 hover:text-gray-50" href="/menu">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-800 hover:text-gray-50" href="/kontak">
                            Kontak
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-slate-800 hover:text-green-50 font-bold"
                            href="/perekrutan_pegawai"
                        >
                            Perekrutan Pegawai
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="m-0 box-border flex h-screen w-full bg-slate-500 p-0">
                <div className="left flex w-1/2 flex-col bg-white items-center justify-center">
                    <Image
                        src="/images/logo-dashboard.png"
                        alt="logo-dashboard"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-1/2 relative">
                    <div className="h-screen flex flex-col items-center justify-center">
                        <Image
                            src="/images/bg-login.png"
                            alt="logo-dashboard"
                            layout="fill"
                            objectFit="cover"
                            className="h-full w-full object-cover absolute inset-0 z-0"
                        />
                        <div className="z-20 -mt-10">
                            <Image
                                src="/images/logokedai.png"
                                alt="Logo Kedai"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[60%] rounded-xl drop-shadow-2xl">
                            <div className="mb-7">
                                <div className="mb-7 text-[32px] font-medium">LOGIN</div>
                            </div>
                            <div className="text-black">
                                <div className="mb-[20px]">
                                    <Input
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        placeholder="Masukkan Email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div className="mb-[2px]">
                                    <Input
                                        onChange={(e) => { setPassword(e.target.value); }}
                                        placeholder="Masukkan Password"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>
                            {isEmailEmpty && isPasswordEmpty && <div className="absolute mt-[120px] ml-60"><Tolkit /></div>}
                            {showPasswordAlert && (
                                <div className="absolute mt-[120px] ml-60">
                                    <AlertInputPassword />
                                </div>
                            )}

                            {showEmailAlert && (
                                <div className="absolute mt-[120px] ml-60">
                                    <AlertInputEmail />
                                </div>
                            )}

                            {showSuccesLoginAlert && (
                                <div className="absolute mt-[120px] ml-60 w-[50%]">
                                    <AlertLoginSucces />
                                </div>
                            )}
                            <Link href="/forget-password-base">
                                <div className="flex justify-end mb-5 text-black text-[14px] opacity-50">
                                    Forget Password
                                </div>
                            </Link>
                            <button
                                type="button"
                                onClick={handleFormSubmit}
                                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
