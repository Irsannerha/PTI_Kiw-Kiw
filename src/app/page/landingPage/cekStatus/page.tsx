"use client";
import { Tooltip } from 'flowbite-react';
import { useState, useEffect } from "react";
import Link from "next/link";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile";
import Navbars from "@/app/components/Navbars";
import axios from "axios";
import { useAxiosAuth } from "@/app/hooks/useAxiosAuth";
import { useLocalStorage } from "usehooks-ts";
import useSWR from "swr";

interface UserData {
  name?: string;
  nik?: string;
  status?: string;
}
const initialUserData: UserData = {};

enum TAHAP {
  TAHAP1 = 1,
  TAHAP2 = 2,
  TAHAP3 = 3,
  TAHAP4 = 4,
}

export default function CekStatus() {
  const axiosAuth = useAxiosAuth();
  const [accessToken, __] = useLocalStorage("accessToken", "");
  const [idUser, _] = useLocalStorage("idUser", "");
  const [tahap, setTahap] = useState<TAHAP>(TAHAP.TAHAP1);
  const { data: dataUs, isLoading, error } = useSWR(`/api/applicant/oneUser/${idUser}`, async (url) => {
    const res = await axiosAuth.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.data.status === "pending") {
      setTahap(TAHAP.TAHAP2);
    } else if (res.data.status === "interview") {
      setTahap(TAHAP.TAHAP3);
    } else if (res.data.status === "accepted") {
      setTahap(TAHAP.TAHAP4);
    }
    return res.data;
  })

  const [currentStep, setCurrentStep] = useState(1); // Inisialisasi dengan langkah pertama
  const [showAlertDaftarSukses, setShowAlertDaftarSukses] = useState(false);

  const getBackgroundColor = () => {
    switch (currentStep) {
      case 1:
        return "#F8A849"; // Warna langkah pertama
      case 2:
        return "#FFD8A9"; // Warna langkah kedua
      default:
        return "#FFD8A9"; // Warna default
    }
  };

  console.log(tahap);

  const styleActive = "flex items-center justify-center w-16 h-16 bg-[#F8A849] rounded-full lg:h-16 lg:w-16 hover:bg-[#F8A849] dark:bg-gray-700 shrink-0 shadow-2xl";
  const styleNormal = "flex items-center justify-center w-16 h-16 bg-[#FFD8A9] rounded-full lg:h-16 lg:w-16 hover:bg-[#FFD8A9] dark:bg-gray-700 shrink-0 shadow-2xl"


  return (
    <>
      <div className="flex w-full items-center" style={{ backgroundColor: getBackgroundColor() }}>
        <Navbars />
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {dataUs && (
        <div className="w-full overflow-x-hidden">
          <div className="flex justify-start items-start mt-20">
            <div className="text-start justify-start items-start ml-5">
              <div className="mt-8 mb-4">
                <div className="flex p-3 gap-5">
                  <div className="flex items-center mb-4">
                    <Link href={"/page/landingPage/dashboardRekrut"}>
                      <button className="bg-[#F8A849] rounded-lg flex items-center hover:bg-[#FBD09C] text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 23.75L6.25 15L15 6.25" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M23.75 15H6.25" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <rect x="0.5" y="0.5" width="29" height="29" stroke="#F8A849" stroke-opacity="0.2" />
                        </svg>
                        <span className="text-sm font-medium text-center mx-3">Kembali</span>
                      </button>
                    </Link>
                  </div>
                  <div className="w-[20%] flex justify-end items-end">
                    <Link href={"/page/landingPage/profil"}>
                      <Tooltip content="Profile" style="dark" className='bg-black'>
                        <SvgDashboardProfile />
                      </Tooltip>
                    </Link>
                  </div>
                  <div className="w-[70%] flex flex-col justify-start pl-2">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Selamat Datang, User</p>}
                    {!isLoading && !error && (
                      <p>Selamat Datang, {dataUs?.name || "User"}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 w-full text-[32px] ml-12">Status</div>
          <div className="flex justify-center">
            <div className="border-b border-neutral-950/10 pb-12 m-4 w-full text-[32px]">
              <div className="max-w-6xl mx-auto flex items-center justify-center">
                <ol className="mb-4 flex items-center justify-center w-full sm:mb-5">

                  <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-amber-500 after:border-4 after:inline-block dark:after:border-blue-800">
                    <div className={TAHAP.TAHAP1 <= tahap ? styleActive : styleNormal}>
                      <Tooltip content="Mulai" style="dark" className='bg-black'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.6667 20H5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M26.6667 30H5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.6667 10H5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M35.0007 30V13.3333C35.0007 12.4493 34.6495 11.6014 34.0243 10.9763C33.3992 10.3512 32.5514 10 31.6673 10H23.334" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M26.6673 13.3333L23.334 10L26.6673 6.66666" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Tooltip>
                    </div>
                  </li>
                  <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-amber-500 after:border-4 after:inline-block dark:after:border-gray-700">
                    <div className={TAHAP.TAHAP2 <= tahap ? styleActive : styleNormal}>
                      <Tooltip content="Tahap 1" style="dark" className='bg-black'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33.334 13.3333H16.6673C14.8264 13.3333 13.334 14.8257 13.334 16.6667V33.3333C13.334 35.1743 14.8264 36.6667 16.6673 36.6667H33.334C35.1749 36.6667 36.6673 35.1743 36.6673 33.3333V16.6667C36.6673 14.8257 35.1749 13.3333 33.334 13.3333Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M6.66732 26.6667C4.83398 26.6667 3.33398 25.1667 3.33398 23.3333V6.66667C3.33398 4.83333 4.83398 3.33333 6.66732 3.33333H23.334C25.1673 3.33333 26.6673 4.83333 26.6673 6.66667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Tooltip>
                    </div>
                  </li>
                  <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-amber-500 after:border-4 after:inline-block dark:after:border-gray-700">
                    <div className={TAHAP.TAHAP3 <= tahap ? styleActive : styleNormal}>
                      <Tooltip content="Tahap 2" style="dark" className='bg-black'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 25L23.3333 28.3333L30 21.6667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M33.334 13.3333H16.6673C14.8264 13.3333 13.334 14.8257 13.334 16.6667V33.3333C13.334 35.1743 14.8264 36.6667 16.6673 36.6667H33.334C35.1749 36.6667 36.6673 35.1743 36.6673 33.3333V16.6667C36.6673 14.8257 35.1749 13.3333 33.334 13.3333Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M6.66732 26.6667C4.83398 26.6667 3.33398 25.1667 3.33398 23.3333V6.66667C3.33398 4.83333 4.83398 3.33333 6.66732 3.33333H23.334C25.1673 3.33333 26.6673 4.83333 26.6673 6.66667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Tooltip>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className={TAHAP.TAHAP4 <= tahap ? styleActive : styleNormal}>
                      <Tooltip content="Selesai" style="dark" className='bg-black'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.6673 18.4667V20C36.6653 23.594 35.5015 27.0911 33.3495 29.9697C31.1976 32.8483 28.1728 34.9541 24.7262 35.9732C21.2797 36.9922 17.5961 36.8698 14.2248 35.6243C10.8535 34.3788 7.97508 32.0768 6.01892 29.0618C4.06276 26.0467 3.13364 22.4801 3.37011 18.8939C3.60659 15.3076 4.996 11.8939 7.33112 9.16179C9.66624 6.4297 12.822 4.52564 16.3276 3.73358C19.8333 2.94152 23.5011 3.30389 26.784 4.76667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M36.6667 6.66667L20 23.35L15 18.35" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Tooltip>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-base font-bold leading-7 text-gray-900">Detail Data Pegawai</h2>
              </div>
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#FFD8A9] shadow-md rounded-xl drop-shadow-2xl p-5 w-[40%]">
                  <div className="flex p-1">
                    <div className="flex justify-end items-end">
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-base font-semibold leading-7 text-gray-900">NAMA</span>
                      <span className="text-base font-medium leading-7 text-gray-900">: {dataUs.name || 'Loading...'}</span>
                      <span className="text-base font-semibold leading-7 text-gray-900">NIK</span>
                      <span className="text-base font-medium leading-7 text-gray-900">: {dataUs.nik || 'Loading...'}</span>
                      <span className="text-base font-semibold leading-7 text-gray-900">Status</span>
                      <span className="text-base font-medium leading-7 text-gray-900">: {dataUs.status || 'Loading...'}</span>
                      <span className="text-base font-semibold leading-7 text-gray-900">Keterangan</span>
                      <span className="text-base font-medium leading-7 text-gray-900">: {dataUs.status === 'accepted' ? 'Status anda diterima, silahkan untuk menghubungi +62 853-6661-5817 untuk informasi lebih lanjut' : dataUs.keterangan
                        || dataUs.status === 'pending' ? 'Status anda pending, silahkan untuk Menunggu Proses paling lama 2 hari..' : dataUs.keterangan
                          || dataUs.status === 'rejected' ? 'Status anda Ditolak, silahkan untuk coba lagi..' : dataUs.keterangan
                            || dataUs.status === 'interview' ? 'Status anda intervew, anda berhasil melalui tahap 1 (seleksi) berkas. Silahkan untuk datang langsung ke Kedai atau hubungi +62 853-6661-5817 untuk seleksi wawancara.' : dataUs.keterangan
                      || 'Loading...'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
