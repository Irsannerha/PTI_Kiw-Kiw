"use client";
import Image from "next/image";
import Link from "next/link";
import Input from "@/app/components/Input";
import { useState } from 'react';


export default function profilPrekrutan() {
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
  <div className="w-full overflow-x-hidden pt-48">
  <div className="flex justify-center">
  <div className="p-6 rounded-2xl bg-[#FFF7ED] border border-amber-500 dark:border-neutral-950 shadow-md w-auto">
    <div className="flex items-center mb-4">
      <button className=" bg-[#F8A849] rounded-lg flex items-center text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 23.75L6.25 15L15 6.25" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.75 15H6.25" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="0.5" y="0.5" width="29" height="29" stroke="#F8A849" stroke-opacity="0.2"/>
        </svg>
      </button>
      <div className="text-sm font-medium text-center ml-3">User Profile</div>
    </div>
    <div className="flex items-center flex-col mb-4">
  <div className="w-24 h-24 rounded-full  overflow-hidden">
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55 0C24.6169 0 0 24.6169 0 55C0 85.3831 24.6169 110 55 110C85.3831 110 110 85.3831 110 55C110 24.6169 85.3831 0 55 0ZM55 21.2903C65.7782 21.2903 74.5161 30.0282 74.5161 40.8064C74.5161 51.5847 65.7782 60.3226 55 60.3226C44.2218 60.3226 35.4839 51.5847 35.4839 40.8064C35.4839 30.0282 44.2218 21.2903 55 21.2903ZM55 97.5806C41.9819 97.5806 30.3165 91.6814 22.5101 82.4556C26.6794 74.6048 34.8407 69.1936 44.3548 69.1936C44.8871 69.1936 45.4194 69.2823 45.9294 69.4375C48.8125 70.369 51.8286 70.9677 55 70.9677C58.1714 70.9677 61.2097 70.369 64.0706 69.4375C64.5806 69.2823 65.1129 69.1936 65.6452 69.1936C75.1593 69.1936 83.3206 74.6048 87.4899 82.4556C79.6835 91.6814 68.0181 97.5806 55 97.5806Z" fill="black"/>
</svg>

  </div>
  <p className="text-gray-900 dark:text-white font-medium text-lg mt-2">Muhammad Saiful</p>
  </div>
    <div className="m-4 w-full flex" >
      <div className="w-full sm:w-2/3 pr-36">
        <form className="space-y-4">
          <div>
            <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nama
            </label>
            <Input
              onChange={(e) => { console.log("test") }}
              placeholder="Muhammad Saiful"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="nik" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              NO. HP
            </label>
            <Input
              onChange={(e) => { console.log("test") }}
              placeholder="081234567890"
              required
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="w-full sm:w-2/3 pr-36">
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              E-mail
            </label>
            <Input
              onChange={(e) => { console.log("test") }}
              placeholder="saiful@example.com"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Alamat
            </label>
            <Input
              onChange={(e) => { console.log("test") }}
              placeholder="Bandar Lampung"
              required
              type="text"
            />
          </div>
           <div className="flex items-center overflow-hidden">
      <label
        htmlFor="ubah"
        className="bg-[#F8A849] hover:bg-[#8B6A56] font-medium text-black hover:text-white inline-flex items-center px-6 py-1.5 cursor-pointer text-sm rounded-xl shadow-2xl"
      >
        <span className="ml-1">Ubah</span>
      </label>
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
