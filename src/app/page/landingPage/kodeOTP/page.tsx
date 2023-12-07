"use client";
import Input from "@/app/components/Input";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import SuccessOTP from "@/app/components/SuccessOTP"
import AlertInputOTP from "@/app/components/AlertInputOTP"
import AlertWrongOTP from "@/app/components/AlertWrongOTP";
import Navbars from "@/app/components/Navbars";
import axios, { AxiosError } from 'axios';
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import { axiosInstance } from "@/app/utils/axios";
import { useRouter } from "next/navigation";
import { log } from "console";

interface DataFecth {
  otp: string;
  id: string;
}

export default function ForgotPassword() {
  const initialData: DataFecth = {
    otp: "",
    id: ""
  };

  // const [otp, setotp] = useState(initialData.otp);
  const [isotpEmpty, setIsotpEmpty] = useState(false);
  const [otp, setotp] = useState<number | string>(0);

  const [showSuccessOTPSend, setshowSuccessOTPSend] = useState(false);
  const [showInputOTP, setshowInputOTP] = useState(false);
  const [showWrongOTP, setshowWrongOTP] = useState(false);

  const router = useRouter();
  const axiosAuth = useAxiosAuth();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const [refreshToken, setrefreshToken] = useLocalStorage('refreshToken', '');
  const [id, setId] = useLocalStorage('id', '')
  const [otpP,__] = useLocalStorage('otp', '') 

  const handleFormSubmit = async () => {
    if (!otp) {
      setIsotpEmpty(true);
    } else {
      setIsotpEmpty(false);
    }

    if (otp) {
      if (typeof otp === 'string' && /^\d{6}$/.test(otp.toString())) {
        try {
          const userData = {
            otp,
          }
          if (otp === otpP) {  
          console.log('User Data:', JSON.stringify(userData));
          const response = await axiosInstance.post('/api/auth/verify/' + id, { otp });
          const data = response.data;
            // console.log(data)
            setshowSuccessOTPSend(true);
            setTimeout(() => {
              setshowWrongOTP(false);
            }, 3000);
            router.push('/page/landingPage/buatPassword');
          } else {
             setshowWrongOTP(true);
            setTimeout(() => {
              setshowWrongOTP(false);
            }, 3000);
          }
          // if (otp === response.data) {
          //   console.log('====================================');
          //   console.log("OTP Success", data);
          //   console.log('====================================');
          //   setshowSuccessOTPSend(true);
          //   setTimeout(() => {
          //     setshowWrongOTP(false);
          //   }, 3000);
          //   router.push('/page/landingPage/buatPassword');
          // } else {
          //   setshowWrongOTP(true);
          //   setTimeout(() => {
          //     setshowWrongOTP(false);
          //   }, 3000);
          // }
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log('====================================');
            console.log('error: ' + error.message);
            alert('Tidak Dapat Data API');
            setshowWrongOTP(true);
            setTimeout(() => {
              setshowWrongOTP(false);
            }, 3000);
            console.log('====================================');
          }
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
    setotp(456789);
    setIsotpEmpty(false);
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
                Kode OTP
              </div>
              <div className="text-black">
                <div className="mb-[30px]">
                  <Input
                    onChange={(e) => { setotp(e.target.value); }}
                    placeholder="Masukkan Kode OTP"
                    required
                    type="password"
                  />
                </div>
              </div>
              {showInputOTP && (
                <div className="fixed mt-20 md:mt-20 ml-20 md:ml-60">
                  <AlertInputOTP />
                </div>
              )}
              {showSuccessOTPSend && (
                <div className="fixed mt-20 md:mt-20 ml-20 md:ml-60 md:w-[50%]">
                  <SuccessOTP />
                </div>
              )}
              {showWrongOTP && (
                <div className="fixed mt-20 md:mt-20 ml-20 md:ml-60 md:w-[50%]">
                  <AlertWrongOTP />
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
