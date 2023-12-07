"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
// import { Montserrat } from "next/font/google";
import Navbars from "@/app/components/Navbars";
import AlertInputEmail from "@/app/components/AlertInputEmail"
import SuccessOTP from "@/app/components/SuccessOTP";

import axios, { AxiosError } from 'axios';
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import { axiosInstance } from "@/app/utils/axios";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

interface DataFecth {
  id: string;
  email: string;
  otp: string;
}

export default function ForgotPassword() {
  const initialData: DataFecth = {
    id: "",
    email: "",
    otp: "",
  };

  const [email, setEmail] = useState(initialData.email);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showSuccessOTPSend, setshowSuccessOTPSend] = useState(false);

  const router = useRouter();
  const axiosAuth = useAxiosAuth();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const [refreshToken, setrefreshToken] = useLocalStorage('refreshToken', '');
  const [id, setId] = useLocalStorage('id', '')
  const [otp,setOtp] = useLocalStorage('otp', '');

  const handleFormSubmit = async () => {
    if (!email) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (email) {
      if (email.includes('@gmail.com')) {
        const userData = { email };
        console.log('User Data:', JSON.stringify(userData));
        try {
          const response = await axios.post('/api/auth/otp', { email });
          const data = response.data;
          setId(data.id);
          setOtp(data.otp);
          console.log('====================================');
          console.log('Register Success', data);
          console.log('====================================');
          setshowSuccessOTPSend(true);
          setTimeout(() => {
            setshowSuccessOTPSend(false);
          }, 3000);
          router.push('/page/landingPage/kodeOTP')
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log('====================================');
            console.log('error: ' + error.message);
            alert('Gagal Terkirim');
            console.log('====================================');
          }
        }
      } else {
        alert('Use @gmail.com in email');
      }
    }

    if (isEmailEmpty) {
      setShowEmailAlert(true);
      setTimeout(() => {
        setShowEmailAlert(false);
      }, 3000);
    }
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
              <div className="mb-7 text-[25px] md:text-[32px] font-medium">
                Lupa Password
              </div>
              <div className="text-black">
                <div className="mb-[30px]">
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Email"
                    required
                    type="email"
                  />
                </div>
              </div>
              {showEmailAlert && (
                <div className="fixed mt-20 md:mt-20 ml-20 md:ml-60">
                  <AlertInputEmail />
                </div>
              )}
              {showSuccessOTPSend && (
                <div className="fixed mt-20 md:mt-20 ml-20 md:ml-40 w-[70%] md:w-[50%]">
                  <SuccessOTP />
                </div>
              )}
              <button
                type="button"
                onClick={handleFormSubmit}
                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
              >
                Kirim Kode OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}