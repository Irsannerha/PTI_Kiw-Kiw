"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Navbars from "@/app/components/Navbars";
import AlertInputDataPerlu from "@/app/components/AlertInputDataPerlu"
import AlertRegistrasiSukses from "@/app/components/AlertRegistrasiSukses"
import AlertInputPasssamaRe from "@/app/components/AlertInputPasssamaRe"
import axios from 'axios';

// Deklarasikan tipe data terlebih dahulu
interface DataFecth {
    nama?: string;
    email?: string;
    newPassword?: string;
    reNewPassword?: string;
}

export default function LandingPage() {
    const initialData: DataFecth = {
        nama: "",
        email: "",
        newPassword: "",
        reNewPassword: "",
    };

    const [nama, setName] = useState(initialData.nama);
    const [email, setEmail] = useState(initialData.email);
    const [newPassword, setNewPassword] = useState(initialData.newPassword);
    const [reNewPassword, setReNewPassword] = useState(initialData.reNewPassword);

    const [isNamaEmpty, setIsNamaEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isNewPasswordEmpty, setIsNewPasswordEmpty] = useState(false);
    const [isReNewPasswordEmpty, setIsReNewPasswordEmpty] = useState(false);

    const [showInputDataPerlu, setShowInputDataPerlu] = useState(false);
    const [showSuccesRegistrasiAlert, setShowSuccesRegistrasiAlert] = useState(false);
    const [showAlertInputPasssamaRe, setShowAlertInputPasssamaRe] = useState(false);

    const handleFormSubmit = async () => {
        setIsNamaEmpty(!nama);
        setIsEmailEmpty(!email);
        setIsNewPasswordEmpty(!newPassword);
        setIsReNewPasswordEmpty(!reNewPassword);

       if (nama && email && newPassword && reNewPassword) {
            if (email.includes('@gmail.com')) {
                if (newPassword === reNewPassword) {
                    try {
                        const userData = {
                            nama,
                            email,
                            newPassword,
                            reNewPassword,
                        };

                        console.log('User Data:', JSON.stringify(userData));

                        const response = await axios.post('/api/login', userData);

                        if (response.status === 200) {
                            const data = response.data;
                            console.log('Pendaftaran successfully:', data);
                            setShowSuccesRegistrasiAlert(true);
                            // Ganti dengan penggunaan router Next.js
                            // router.push('/page/dashboard');
                        } else {
                            console.error('Pendaftaran Gagal:', response.status);
                            alert('Pendaftaran Gagal');
                        }
                    } catch (error) {
                        console.error('Error during Pendaftaran:', error);
                        alert('Terjadi kesalahan saat Pendaftaran');
                    }
                } else {
                    setShowAlertInputPasssamaRe(true);
                    setTimeout(() => {
                        setShowAlertInputPasssamaRe(false);
                    }, 3000);
                }
                handleReset();
            } else {
                alert('Gunakan @gmail.com pada email');
            }
        } else {
            setShowInputDataPerlu(true);
            setTimeout(() => {
                setShowInputDataPerlu(false);
            }, 3000);
        }
    };
    const handleReset = () => {
        setNewPassword("");
        setReNewPassword("");
        setIsNewPasswordEmpty(false);
        setIsReNewPasswordEmpty(false);
    };


  return (
    <>
      <div className="nav">
        <Navbars />
      </div>
      <div className="m-0 box-border flex h-screen w-full bg-slate-500 p-0">
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
            <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[90%] md:w-[60%] rounded-xl drop-shadow-2xl md:mt-20">
              <div className="mb-7 style={{ fontFamily: 'Montserrat' }} text-[25px] md:text-[32px] font-medium">
                Buat Akun
              </div>
              <div className="text-black">
                <div className="mb-[20px]">
                  <Input
                    onChange={(e) => { setName(e.target.value); }}
                    placeholder="Masukkan Nama"
                    required
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Email"
                    required
                    type="email"
                  />
                </div>
                <div className="mb-[20px]">
                  <Input
                    onChange={(e) => { setNewPassword(e.target.value); }}
                    placeholder="Masukkan password baru"
                    required
                    type="password"
                  />
                </div>
                <div className="mb-[40px]">
                  <Input
                    onChange={(e) => { setReNewPassword(e.target.value); }}
                    placeholder="Masukkan ulang password baru"
                    required
                    type="password"
                  />
                  {/* {isPasswordEmpty && <p className="text-red-500">Password is required</p>} */}
                </div>
              </div>
              {showSuccesRegistrasiAlert && (
                <div className="fixed mt-20 md:mt-5 ml-24 md:ml-60">
                  <AlertRegistrasiSukses />
                </div>
              )}
              {showInputDataPerlu && (
                <div className="fixed mt-20 md:mt-5 ml-24 md:ml-60">
                  <AlertInputDataPerlu />
                </div>
              )}
              {showAlertInputPasssamaRe && (
                <div className="fixed mt-20 md:mt-5 ml-24 md:ml-60">
                  <AlertInputPasssamaRe />
                </div>
              )}
              {/* <Link href="/forget-password-base"> */}
              <button
                type="button"
                onClick={handleFormSubmit}
                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
              >
                Kirim
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

