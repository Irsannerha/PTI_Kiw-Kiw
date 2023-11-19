"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import SuccessOTP from "@/app/components/SuccessOTP"
import AlertInputOTP from "@/app/components/AlertInputOTP"
import AlertWrongOTP from "@/app/components/AlertWrongOTP";
import axios from 'axios';

interface DataFecth {
  otp?: number;
}

export default function ForgotPassword() {
  const initialData: DataFecth = {
    otp: 0,
  };

  // const [otp, setotp] = useState(initialData.otp);
  const [isotpEmpty, setIsotpEmpty] = useState(false);
  const [otp, setotp] = useState<number | string>(0);

  const [showSuccessOTPSend, setshowSuccessOTPSend] = useState(false);
  const [showInputOTP, setshowInputOTP] = useState(false);
  const [showWrongOTP, setshowWrongOTP] = useState(false);

  const handleFormSubmit = async () => {
    if (!otp) {
      setIsotpEmpty(true);
    } else {
      setIsotpEmpty(false);
    }

    if (otp) {
      if (typeof otp === 'number' && /^\d{6}$/.test(otp.toString())) {
        // Rest of your code remains unchanged
        const userData = { otp };
        console.log('User Data:', JSON.stringify(userData));
        try {
          const response = await axios.post('/api/login', { otp });

          if (response.status === 200) {
            const data = response.data;
            console.log('OTP successful:', data);
            setshowSuccessOTPSend(true);
            setTimeout(() => {
              setshowWrongOTP(false);
            }, 3000);
            window.location.href = '/page/dashboard/NewPassword';
          } else {
            console.error('OTP Gagal:', response.status);
            setshowWrongOTP(true);
            setTimeout(() => {
              setshowWrongOTP(false);
            }, 3000)
          }
        } catch (error) {
          console.error('Error OTP:', error);
          alert('Tidak Dapat Data API');
          setshowWrongOTP(true);
          setTimeout(() => {
            setshowWrongOTP(false);
          }, 3000);
        }
      } else {
        alert('OTP harus berupa number angka dengan panjang 6.');
      }
    } else {
      if (isotpEmpty) {
        setshowInputOTP(true);
        setTimeout(() => {
          setshowInputOTP(false);
        }, 3000);
      }
      alert('OTP Tidak Boleh Kosong dan Harus Angka.');

    }
  };


  const handleReset = () => {
    setotp(45678);
    setIsotpEmpty(false);
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
                Kode OTP
              </div>
              <div className="text-black">
                <div className="mb-[30px]">
                  <Input
                    onChange={(e) => { setotp(Number(e.target.value)); }}
                    placeholder="Masukkan Kode OTP"
                    required
                    type="password"
                  />
                </div>
              </div>
              {showInputOTP && (
                <div className="absolute mt-[150px] ml-64">
                  <AlertInputOTP />
                </div>
              )}
              {showSuccessOTPSend && (
                <div className="absolute mt-[150px] ml-64 w-[50%]">
                  <SuccessOTP />
                </div>
              )}
              {showWrongOTP && (
                <div className="absolute mt-[150px] ml-64 w-[50%]">
                  <AlertWrongOTP />
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

