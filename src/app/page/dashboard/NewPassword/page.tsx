"use client";
import Input from "@/app/components/Input";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import AlertInputNewPass from "@/app/components/AlertInputNewPass"
import AlertInputRepeatPass from "@/app/components/AlertInputRepeatPass"
import SuccessUbahPass from "@/app/components/SuccessUbahPass"
import axios from 'axios';

interface DataFecth {
  newPassword: string;
  reNewPassword: string;
}

export default function landingPage() {
  const initialData: DataFecth = {
    newPassword: "",
    reNewPassword: "",
  };

  const [newPassword, setnewPassword] = useState(initialData.newPassword);
  const [reNewPassword, setreNewPassword] = useState(initialData.reNewPassword);

  const [isnewPasswordEmpty, setIsnewPasswordEmpty] = useState(false);
  const [isreNewPasswordEmpty, setIsreNewPasswordEmpty] = useState(false);

  const [shownewPasswordAlert, setShownewPasswordAlert] = useState(false);
  const [showreNewPasswordAlert, setShowreNewPasswordAlert] = useState(false);

  const [showSuccesUbahPassAlert, setshowSuccesUbahPassAlert] = useState(false);

  const handleFormSubmit = async () => {
    if (!newPassword) {
      setIsnewPasswordEmpty(true);
    } else {
      setIsnewPasswordEmpty(false);
    }

    if (!reNewPassword) {
      setIsreNewPasswordEmpty(true);
    } else {
      setIsreNewPasswordEmpty(false);
    }

    if (newPassword.length > 12 || reNewPassword.length > 12) {
      console.error('Password Tidak Boleh Lebih dari 6 Angka');
      alert('Password Tidak Boleh Lebih dari 6 Angka');
      return;
    }

    if (newPassword && reNewPassword) {
      if (newPassword === reNewPassword) {
        const userData = { newPassword, reNewPassword };
        console.log('User Data:', JSON.stringify(userData));
        try {
          const response = await axios.post('/api/login', { newPassword, reNewPassword });
          if (response.status === 200) {
            const data = response.data;
            console.log('Successful:', data);
            setshowSuccesUbahPassAlert(true);
            setTimeout(() => {
              setshowSuccesUbahPassAlert(false);
            }, 3000);
            window.location.href = '/page/dashboard/FormLogin';
          } else {
            console.error('Gagal:', response.status);
            alert('Gagal');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Tidak Dapat Data API');
        }
      } else {
        alert('Password Harus Sama, Maksimal 12 Terdiri dari huruf dan angka.');
      }
    }

    if (newPassword && isreNewPasswordEmpty) {
      setShowreNewPasswordAlert(true);
      setTimeout(() => {
        setShowreNewPasswordAlert(false);
      }, 3000);
    } else if (reNewPassword && isnewPasswordEmpty) {
      setShownewPasswordAlert(true);
      setTimeout(() => {
        setShownewPasswordAlert(false);
      }, 3000);
    } else if (isnewPasswordEmpty && isnewPasswordEmpty) {
      setShownewPasswordAlert(true);
      setTimeout(() => {
        setShownewPasswordAlert(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setnewPassword("");
    setreNewPassword("");
    setIsnewPasswordEmpty(false);
    setIsreNewPasswordEmpty(false);
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
            <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[70%] rounded-xl drop-shadow-2xl">
              <div className="mb-7 style={{ fontFamily: 'Montserrat' }} text-[32px] font-medium">
                Buat Password Baru
              </div>
              <div className="text-black">
                <div className="mb-[20px]">
                  <Input
                    onChange={(e) => { setnewPassword(e.target.value); }}
                    placeholder="Masukkan password baru"
                    required
                    type="password"
                  />
                </div>
                <div className="mb-[40px]">
                  <Input
                    onChange={(e) => { setreNewPassword(e.target.value); }}
                    placeholder="Masukkan ulang password baru"
                    required
                    type="password"
                  />
                  {/* {isPasswordEmpty && <p className="text-red-500">Password is required</p>} */}
                </div>
              </div>
              {isnewPasswordEmpty && isreNewPasswordEmpty && <div className="absolute mt-[120px] ml-40 w-[70%]"><AlertInputNewPass /></div>}

              {shownewPasswordAlert && (
                <div className="absolute mt-[120px] ml-40 w-[70%]">
                  <AlertInputNewPass />
                </div>
              )}

              {showreNewPasswordAlert && (
                <div className="absolute mt-[120px] ml-40 w-[70%]">
                  <AlertInputRepeatPass />
                </div>
              )}

              {showSuccesUbahPassAlert && (
                <div className="absolute mt-[120px] ml-40 w-[70%]">
                  <SuccessUbahPass />
                </div>
              )}
              <button
                type="button"
                onClick={handleFormSubmit}
                className="text-white w-[50%] bg-[#8B6A56] hover:bg-[#F8A849] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#8B6A56] dark:hover:bg-[#F8A849] focus:outline-none"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

