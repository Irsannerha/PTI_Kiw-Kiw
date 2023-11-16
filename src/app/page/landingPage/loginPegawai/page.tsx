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
import Navbars from "@/app/components/Navbars";

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
    const [showInputEmailPassword, setshowInputEmailPassword] = useState(false);

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
                if (email === "kiwkiw@gmail.com" && password === "kiwkiw") {
                    setshowSuccesLoginAlert(true);
                    window.location.href = '/page/landingPage/dashboardRekrut';
                } else {
                    alert('Login Gagal')
                }
                // handleReset();
            } else {
                alert('Use @gmail.com in email');
            }
        }

        if (email && isPasswordEmpty) {
            setShowPasswordAlert(true);
            setTimeout(() => {
                setShowPasswordAlert(false);
            }, 3000);
        } else if (password && isEmailEmpty) {
            setShowEmailAlert(true);
            setTimeout(() => {
                setShowEmailAlert(false);
            }, 3000);
        } else if (isEmailEmpty && isPasswordEmpty) {
            setshowInputEmailPassword(true);
            setTimeout(() => {
                setshowInputEmailPassword(false);
            }, 3000);
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
            <div className="nav">
                <Navbars />
            </div>
            <div className="m-0 box-border md:flex h-screen w-full bg-slate-500">
                <div className="left w-full md:w-1/2 flex-col bg-white items-center justify-center hidden md:flex md:mt-20">
                    <Image
                        src="/images/logo-dashboard.png"
                        alt="logo-dashboard"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full md:w-1/2 relative">
                    <div className="h-screen flex flex-col items-center justify-center">
                        <Image
                            src="/images/bg-login.png"
                            alt="logo-dashboard"
                            layout="fill"
                            objectFit="cover"
                            className="h-full w-full object-cover absolute inset-0 z-0"
                        />
                        <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[90%] md:w-[70%] rounded-xl drop-shadow-2xl md:mt-20">
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
                            {showInputEmailPassword && <div className="fixed mt-40 md:mt-40 ml-24 md:ml-60"><Tolkit /></div>}
                            {showPasswordAlert && (
                                <div className="fixed mt-40 md:mt-40 ml-24 md:ml-60">
                                    <AlertInputPassword />
                                </div>
                            )}

                            {showEmailAlert && (
                                <div className="fixed mt-40 md:mt-40 ml-24 md:ml-60">
                                    <AlertInputEmail />
                                </div>
                            )}

                            {showSuccesLoginAlert && (
                                <div className="fixed mt-40 md:mt-40 ml-24 md:ml-60">
                                    <AlertLoginSucces />
                                </div>
                            )}
                            <Link href="/page/landingPage/lupaPassword">
                                <div className="flex justify-end mb-2 text-black text-[14px] opacity-50">
                                    Lupa Password?
                                </div>
                            </Link>
                            <div className="mb-3 text-[14px]">Belum punya akun? <Link href={"/page/landingPage/loginPrekrutan"} className="text-[14px]">Buat baru</Link></div>

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
