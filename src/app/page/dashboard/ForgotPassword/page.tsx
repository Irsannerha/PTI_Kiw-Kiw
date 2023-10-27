"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import AlertInputEmail from "@/app/components/AlertInputEmail"
import SuccessOTP from "@/app/components/SuccessOTP"

interface DataFecth {
  email: string;
  password: string;
}

export default function ForgotPassword() {
  const initialData: DataFecth = {
    email: "",
    password: ""
  };

  const [email, setEmail] = useState(initialData.email);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showSuccessOTPSend, setshowSuccessOTPSend] = useState(false);

  const handleFormSubmit = async () => {
    if (!email) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (email) {
      if (email.includes('@gmail.com')) {
        console.log('email: ', email);
        setshowSuccessOTPSend(true);
        window.location.href = '/page/dashboard/CodeOTP';
        handleReset();
      } else {
        alert('Use @gmail.com in email');
      }
    }

    if (isEmailEmpty) {
      setShowEmailAlert(true);
    } 
  };

  const handleReset = () => {
    setEmail("");
    setIsEmailEmpty(false);
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
            <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[60%] rounded-xl drop-shadow-2xl">
              <div className="mb-7 style={{ fontFamily: 'Montserrat' }} text-[32px] font-medium">
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
                <div className="absolute mt-[150px] ml-64">
                  <AlertInputEmail />
                </div>
              )}
              {showSuccessOTPSend && (
                <div className="absolute mt-[150px] ml-16 w-full">
                  <SuccessOTP />
                </div>
              )}
              {/* <Link href="/forget-password-base"> */}
              <button
                type="button"
                onClick={handleFormSubmit}
                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
              >
                Kirim Kode OTP
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

