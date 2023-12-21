"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Image from 'next/image'
import AlertInputNewPass from "@/app/components/AlertInputNewPass"
import AlertInputRepeatPass from "@/app/components/AlertInputRepeatPass"
import Navbars from "@/app/components/Navbars";
import AlertSuksesBuatPasswordBaru from "@/app/components/AlertSuksesBuatPasswordBaru"
import AlertInputDataPerlu from "@/app/components/AlertInputDataPerlu"
import AlertInputPasssamaRe from "@/app/components/AlertInputPasssamaRe"

import axios, { AxiosError } from 'axios';
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import { axiosInstance } from "@/app/utils/axios";
import { useRouter } from "next/navigation";

interface DataFecth {
  id: string;
  password: string;
  rePassword: string;
}

export default function landingPage() {
  const initialData: DataFecth = {
    id: "",
    password: "",
    rePassword: "",
  };

  const [password, setpassword] = useState(initialData.password);
  const [rePassword, setrePassword] = useState(initialData.rePassword);

  const [ispasswordEmpty, setIspasswordEmpty] = useState(false);
  const [isrePasswordEmpty, setIsrePasswordEmpty] = useState(false);

  const [showpasswordAlert, setShowpasswordAlert] = useState(false);
  const [showrePasswordAlert, setShowrePasswordAlert] = useState(false);

  const [showSuccesUbahPassAlert, setshowSuccesUbahPassAlert] = useState(false);

  const router = useRouter();
  const axiosAuth = useAxiosAuth();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const [refreshToken, setrefreshToken] = useLocalStorage('refreshToken', '');
  const [id, setId] = useLocalStorage("id", "");
  const [otp,setOtp] = useLocalStorage('otp', "");


  const handleFormSubmit = async () => {
    if (!password) {
      setIspasswordEmpty(true);
    } else {
      setIspasswordEmpty(false);
    }

    if (!rePassword) {
      setIsrePasswordEmpty(true);
    } else {
      setIsrePasswordEmpty(false);
    }

    if (password.length > 6 || rePassword.length > 6) {
      console.error('Password Tidak Boleh Lebih dari 6 Karakter');
      alert('Password Tidak Boleh Lebih dari 6 Karakter');
      return;
    }

    if (password && rePassword) {
      if (password === rePassword) {
        const userData = { password, rePassword };
        console.log('User Data:', JSON.stringify(userData));
        try {
          const response = await axios.post('/api/auth/newPassword', {id, password });
          const data = response.data;
          console.log('====================================');
          console.log('Sukkess', data);
          setshowSuccesUbahPassAlert(true);
          setTimeout(() => {
            setshowSuccesUbahPassAlert(false);
          }, 3000);
          router.push('/page/landingPage/loginPegawai')
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log('====================================');
            console.log('error: ' + error.message);
            alert('Gagal Terkirim');
            console.log('====================================');
          }
        }
      } else {
        alert('Password Harus Sama, Maksimal 6 Karakter');
      }
    }

    if (password && isrePasswordEmpty) {
      setShowrePasswordAlert(true);
      setTimeout(() => {
        setShowrePasswordAlert(false);
      }, 3000);
    } else if (rePassword && ispasswordEmpty) {
      setShowpasswordAlert(true);
      setTimeout(() => {
        setShowpasswordAlert(false);
      }, 3000);
    } else if (ispasswordEmpty && ispasswordEmpty) {
      setShowpasswordAlert(true);
      setTimeout(() => {
        setShowpasswordAlert(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setpassword("");
    setrePassword("");
    setIspasswordEmpty(false);
    setIsrePasswordEmpty(false);
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
                Buat Password Baru
              </div>
              <div className="text-black">
                <div className="mb-[20px]">
                  <Input
                    onChange={(e) => { setpassword(e.target.value); }}
                    placeholder="Masukkan password baru"
                    required
                    type="password"
                  />
                </div>
                <div className="mb-[40px]">
                  <Input
                    onChange={(e) => { setrePassword(e.target.value); }}
                    placeholder="Masukkan ulang password baru"
                    required
                    type="password"
                  />
                  {/* {isPasswordEmpty && <p className="text-red-500">Password is required</p>} */}
                </div>
              </div>
              {showpasswordAlert && (
                <div className="fixed mt-20 md:mt-20 ml-28 md:ml-40 w-[60%] md:w-[70%]">
                  <AlertInputNewPass />
                </div>
              )}

              {showrePasswordAlert && (
                <div className="fixed mt-20 md:mt-20 ml-28 md:ml-40 w-[60%] md:w-[70%]">
                  <AlertInputRepeatPass />
                </div>
              )}

              {showrePasswordAlert && (
                <div className="fixed mt-20 md:mt-20 ml-28 md:ml-40 w-[60%] md:w-[70%]">
                  <AlertInputDataPerlu />
                </div>
              )}

              {showrePasswordAlert && (
                <div className="fixed mt-20 md:mt-20 ml-28 md:ml-40 w-[60%] md:w-[70%]">
                  <AlertSuksesBuatPasswordBaru />
                </div>
              )}

              {showSuccesUbahPassAlert && (
                <div className="fixed mt-20 md:mt-20 ml-28 md:ml-60 md:w-[50%]">
                  {/* <AlertInputPasssamaRe /> */}
                  <AlertSuksesBuatPasswordBaru />
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

