"use client";
import Image from "next/image";
import Link from "next/link";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile";
import Input from "@/app/components/Input";
import { useState } from 'react';

export default function DaftarBerkas() {
  const [fileStatus, setFileStatus] = useState("Tidak ada file.");

  const handleFileChange = (e) => {
    const input = e.target;
    if (input.files.length > 0) {
      setFileStatus(input.files[0].name);
    } else {
      setFileStatus("Tidak ada file.");
    }
  };

  return (
    <>
    <nav className="flex justify-between items-center py-3 px-10 bg-[#FFE4C4] fixed top-0 w-full z-10 shadow-xl">
        <Link href="https://nextjs.org/docs/api-reference/next/link#with-url-object">
          <Image
            src="/images/logoKedai.png"
            alt="logo Kedai"
            className="drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            width={90}
            height={90}
            priority
          />
        </Link>

        <ul className="flex gap-7 items-center font">
          <li>
            <Link className="text-slate-800 hover:text-gray-50" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-slate-800 hover:text-gray-50" href="/profil">
              Profil
            </Link>
          </li>
          <li>
            <Link className="text-slate-800 hover:text-gray-50" href="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="text-slate-800 hover:text-gray-50" href="/kontak">
              Kontak
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-800 hover:text-green-50 font-bold"
              href="/perekrutan_pegawai"
            >
              Perekrutan Pegawai
            </Link>
          </li>
        </ul>
      </nav>
    <div className="w-full overflow-x-hidden pt-16">
      <div className="flex justify-start items-start">
        <div className="text-start justify-start items-start ml-5">
          <div className="mt-16 mb-4 w-52 bg-[#FFE4C4] shadow-md rounded-lg">
            <div className="flex p-3 gap-5">
              <div className="w-[20%] flex justify-end items-end">
                <SvgDashboardProfile />
              </div>
              <div className="w-[70%] flex flex-col justify-start pl-2">
                Selamat Datang, User
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 w-full text-[32px] ml-12 mb-0">Daftar Berkas</div>
      <div className="flex justify-center">
        <div className="border-b border-neutral-950/10 pb-12 m-4 w-full text-[32px] ml-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use valid data for further processing for registration.</p>
          <div className="m-4 w-full flex">
            <div className="w-1/2 pr-40">
              <form className="space-y-4">
                <div>
                  <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan Nama"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="nik" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    NIK
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan NIK"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="no_hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No. HP
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan No. HP"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan Email"
                    required
                    type="text"
                  />
                </div>
              </form>
            </div>

            <div className="w-1/2 pr-60">
              <form className="space-y-4">
                <div>
                  <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan Alamat"
                    required
                    type="text"
                  />
                </div>
                <div className="w-1/2 pr-10">
                  <label htmlFor="jenis_kelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                    Jenis Kelamin
                  </label>
                  <select id="jenis_kelamin" name="jenis_kelamin" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm">
                    <option selected>-</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="w-1/2 pr-24">
                  <label htmlFor="umur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Umur
                  </label>
                  <Input
                    onChange={(e) => { console.log("test") }}
                    placeholder="Masukkan Umur"
                    required
                    type="text"
                  />
                </div>
                <div className="w-1/1 pr-1">
                  <label htmlFor="ijazah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ijazah
                  </label>
                  <label
                    htmlFor="ijazahStatus"
                    className="bg-[#F8A849] hover:bg-[#8B6A56] text-white hover:text-white inline-flex items-center px-4 py-1.5 rounded-md cursor-pointer text-sm rounded-xl drop-shadow-2xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3H19" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18 13L12 7L6 13" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 7V21" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="ml-1">Unggah File</span>
                  </label>
                  <span id="ijazahStatus" className="text-black text-sm w-1 text-center ml-3">
                    {fileStatus}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
