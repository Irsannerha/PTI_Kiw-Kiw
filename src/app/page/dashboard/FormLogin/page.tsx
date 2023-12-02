"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Tolkit from "@/app/components/Tolkit";
import AlertInputEmail from "@/app/components/AlertInputEmail"
import AlertInputPassword from "@/app/components/AlertInputPassword"
import AlertLoginSucces from "@/app/components/AlertLoginSucces"
import AlertFailedLogin from "@/app/components/AlertFailedLogin"
import axios, { AxiosError } from 'axios';
import { axiosInstance } from "@/app/utils/axios";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";

interface DataFecth {
    email: string;
    password: string;
}

export default function landingPage() {
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
    const [showInvalidLogin,setshowInvalidLogin] = useState(false)

    const router = useRouter();

    const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
    const [refreshToken, setrefreshToken] = useLocalStorage('refreshToken', '');


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

        if (password.length > 8) {
            console.error('Password length should not exceed 8 characters');
            alert('Password Tidak Boleh Lebih dari 8');
            return;
        }

        if (email && password) {
            if (email.includes('@gmail.com')) {
                // if (email === "kiwkiw@gmail.com" && password === "kiwkiw") {
                //     setshowSuccesLoginAlert(true);
                //     window.location.href = '/page/dashboard';
                // }
                // Log email and password as JSON for backend readability
                const userData = { email, password };
                try {
                    const response = await axiosInstance.post('/api/auth/login', { email, password });
                    const data = response.data;
                    console.log('Login successful:', data);
                    setAccessToken(data?.data.access_token);
                    setrefreshToken(data?.data.refresh_token);
                    setshowSuccesLoginAlert(true);
                    router.push('/page/dashboard');
                    
                }catch (error) {
                    if (error instanceof AxiosError) {
                        if(error?.response?.status === 401){
                            setshowInvalidLogin(true);
                            setTimeout(() => {
                                setshowInvalidLogin(false);
                            }, 3000);
                        }else{
                            
                        }
                    }
                }
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

    const handleReset = () => {
        setEmail("");
        setPassword("");
        setIsEmailEmpty(false);
        setIsPasswordEmpty(false);
    };

    return (
        <>
            <div className="m-0 box-border flex h-screen w-full bg-slate-500 p-0">
                <div className="left flex w-1/2 flex-col bg-white items-center justify-center">
                    <Image
                        src="/images/logo-dashboard.png"
                        alt="logo-dashboard"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-1/2">
                    <div className="relative h-screen flex flex-col items-center justify-center">
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
                            <div className="mb-7 style={{ fontFamily: 'Montserrat' }} text-[32px] font-medium">
                                Login
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
                                    {/* {isPasswordEmpty && <p className="text-red-500">Password is required</p>} */}
                                </div>
                            </div>
                            {/* {isEmailEmpty && isPasswordEmpty && <div className="absolute mt-[120px] ml-60"> <Tolkit /></div>} */}
                            {/* {isEmailEmpty && password && <div className="absolute mt-[120px] ml-60"><AlertInputEmail /></div>} */}
                            {/* {email && isPasswordEmpty && <div className="absolute mt-[120px] ml-60"><AlertInputPassword /></div>} */}
                            {showInputEmailPassword && (
                                <div className="absolute mt-[120px] ml-60">
                                    <Tolkit />
                                </div>
                            )}

                            {showPasswordAlert && (
                                <div className="absolute mt-[120px] ml-60">
                                    <AlertInputPassword />
                                </div>
                            )}

                            {showInvalidLogin && (
                                <div className="absolute mt-[120px] ml-60">
                                    <AlertFailedLogin/>
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
                            <Link href="/page/dashboard/ForgotPassword">
                                <div className="flex justify-end mb-5 text-black text-[14px] opacity-50">
                                    Forget Password
                                </div>
                            </Link>
                            {/* <Link href="/page/dashboard"> */}
                            <button
                                type="button"
                                onClick={handleFormSubmit}
                                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
                            >
                                Login
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

