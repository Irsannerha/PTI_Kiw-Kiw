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
  const [showAlertSuksesBuatPasswordBaru, setShowAlertSuksesBuatPasswordBaru] = useState(false);
  const [showInputDataPerlu, setshowInputDataPerlu] = useState(false);
  const [showAlertInputPasssamaRe, setShowAlertInputPasssamaRe] = useState(false);

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

    if (newPassword && reNewPassword) {
      console.log('newPassword: ', newPassword);
      console.log('reNewPassword: ', reNewPassword);
      if (newPassword && reNewPassword) {
        if (newPassword == reNewPassword) {
          setShowAlertSuksesBuatPasswordBaru(true);
          window.location.href = '/page/landingPage/loginPegawai';
        } else {
          setShowAlertInputPasssamaRe(true);
          setTimeout(() => {
            setShowAlertInputPasssamaRe(false);
          }, 3000);
        }
      }
      handleReset();
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
    } else if (isnewPasswordEmpty && isreNewPasswordEmpty) {
      setshowInputDataPerlu(true);
      setTimeout(() => {
        setshowInputDataPerlu(false);
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
              {shownewPasswordAlert && (
                <div className="fixed mt-20 ml-40 w-[70%]">
                  <AlertInputNewPass />
                </div>
              )}

              {showreNewPasswordAlert && (
                <div className="fixed mt-20 ml-40 w-[70%]">
                  <AlertInputRepeatPass />
                </div>
              )}

              {showInputDataPerlu && (
                <div className="fixed mt-20 ml-40 w-[70%]">
                  <AlertInputDataPerlu />
                </div>
              )}

              {showAlertSuksesBuatPasswordBaru && (
                <div className="fixed mt-20 ml-40 w-[70%]">
                  <AlertSuksesBuatPasswordBaru />
                </div>
              )}

              {showAlertInputPasssamaRe && (
                <div className="fixed mt-20 ml-40">
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

