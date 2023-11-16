"use client";
import Image from "next/image";
import Link from "next/link";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile";
import Input from "@/app/components/Input";
import { useState } from 'react';
import Navbars from "@/app/components/Navbars";
import AlertInputDataPerlu from "@/app/components/AlertInputDataPerlu"
import AlertDaftarSukses from "@/app/components/AlertDaftarSukses"

interface DataFecth {
  nama?: string;
  alamat?: string;
  nik?: string;
  jenisKelamin?: string;
  noHp?: string;
  email?: string;
  umur?: string;
  // ijazah?: string;
}

export default function DaftarBerkas() {
  const initialData: DataFecth = {
    nama: "",
    alamat: "",
    nik: "",
    jenisKelamin: "",
    noHp: "",
    email: "",
    umur: "",
  }

  const [nama, setNama] = useState(initialData.nama);
  const [alamat, setAlamat] = useState(initialData.alamat);
  const [nik, setNik] = useState(initialData.nik);
  const [jenisKelamin, setJenisKelamin] = useState(initialData.jenisKelamin);
  const [noHp, setNoHp] = useState(initialData.noHp);
  const [email, setEmail] = useState(initialData.email);
  const [umur, setUmur] = useState(initialData.umur);


  const [isNamaEmpty, setIsNamaEmpty] = useState(false);
  const [isAlamatEmpty, setIsAlamatEmpty] = useState(false);
  const [isNikEmpty, setIsNikEmpty] = useState(false);
  const [isJenisKelaminEmpty, setIsJenisKelaminEmpty] = useState(false);
  const [isNoHpEmpty, setIsNoHpEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isUmurEmpty, setIsUmurEmpty] = useState(false);

  const [showAlertDaftarSukses, setshowAlertDaftarSukses] = useState(false);

  const [showInputDataPerlu, setshowInputDataPerlu] = useState(false);

  const handleFormSubmit = async () => {
    if (!nama) {
      setIsNamaEmpty(true);
    } else {
      setIsNamaEmpty(false);
    }
    if (!alamat) {
      setIsAlamatEmpty(true);
    } else {
      setIsAlamatEmpty(false);
    }
    if (!nik) {
      setIsNikEmpty(true);
    } else {
      setIsNikEmpty(false);
    }
    if (!jenisKelamin) {
      setIsJenisKelaminEmpty(true);
    } else {
      setIsJenisKelaminEmpty(false);
    }
    if (!noHp) {
      setIsNoHpEmpty(true);
    } else {
      setIsNoHpEmpty(false);
    }
    if (!email) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if (!umur) {
      setIsUmurEmpty(true);
    } else {
      setIsUmurEmpty(false);
    }


    if (nama && alamat && nik && jenisKelamin && noHp && email && umur) {
      if (email.includes('@gmail.com')) {
        console.log('email: ', email);
        if (nama && alamat && nik && jenisKelamin && noHp && email && umur) {
          setshowAlertDaftarSukses(true);
          window.location.href = '/page/landingPage/loginPegawai';
        }
        handleReset();
      } else {
        alert('Use @gmail.com in email');
      }
    }

    if (isNamaEmpty && isAlamatEmpty && isJenisKelaminEmpty && isNikEmpty && isNoHpEmpty && isEmailEmpty && isUmurEmpty) {
      setshowInputDataPerlu(true);
      setTimeout(() => {
        setshowInputDataPerlu(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setNama("");
    setAlamat("");
    setJenisKelamin("");
    setNoHp("");
    setNik("");
    setEmail("");
    setUmur("");

    setIsNamaEmpty(false);
    setIsAlamatEmpty(false);
    setIsJenisKelaminEmpty(false);
    setIsNoHpEmpty(false);
    setIsNikEmpty(false);
    setIsEmailEmpty(false);
    setIsUmurEmpty(false);
  };

  const [fileStatus, setFileStatus] = useState("Tidak ada file.");

  const handleFileChange = (e: any) => {
    const input = e.target;
    if (input.files.length > 0) {
      setFileStatus(input.files[0].name);
    } else {
      setFileStatus("Tidak ada gambar.");
    }
  };

  return (
    <>
      <div className="nav">
        <Navbars />
      </div>
      <div className="w-full overflow-x-hidden pt-14">
        <div className="flex justify-start items-start">
          <div className="text-start justify-start items-start ml-5">
            <div className="mt-8 mb-2">
              <div className="flex p-3 gap-5">
                <div className="w-[20%] flex justify-end items-end">
                  <Link href={"/page/landingPage/profil"}>
                    <SvgDashboardProfile />
                  </Link> 
                </div>
                <div className="w-[70%] flex flex-col justify-start pl-2">
                  Selamat Datang, User
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-[32px] ml-4 md:ml-12 mb-0">Daftar Berkas</div>
        <div className="flex justify-center">
          <div className="border-b border-neutral-950/10 pb-12 m-4 w-full text-[32px] ml-4">
            <div>
              <form className="md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-5 md:pl-8 md:pr-8">
                <div className="">
                  <label htmlFor="nama" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama
                  </label>
                  <Input
                    onChange={(e) => { setNama(e.target.value); }}
                    placeholder="Masukkan Nama"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="alamat" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Alamat"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="nik" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    NIK
                  </label>
                  <Input
                    onChange={(e) => { setNik(e.target.value); }}
                    placeholder="Masukkan NIK"
                    required
                    type="text"
                  />
                </div>
                <div className="md:w-[40%]">
                  <label htmlFor="jenis_kelamin" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white ">
                    Jenis Kelamin
                  </label>
                  <select id="jenis_kelamin" name="jenis_kelamin" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm" onChange={(e) => { setJenisKelamin(e.target.value); }}>
                    <option selected>-</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="no_hp" className="block mb-2 mt-2 md:mt-0 text-sm font-medium text-gray-900 dark:text-white">
                    No. HP
                  </label>
                  <Input
                    onChange={(e) => { setNoHp(e.target.value); }}
                    placeholder="Masukkan No. HP"
                    required
                    type="text"
                  />
                </div>
                <div className="md:w-[30%]">
                  <label htmlFor="umur" className="block mb-2 mt-2 md:mt-0 text-sm font-medium text-gray-900 dark:text-white">
                    Umur
                  </label>
                  <Input
                    onChange={(e) => { setUmur(e.target.value); }}
                    placeholder="Masukkan Umur"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 mt-2 md:mt-0 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Email"
                    required
                    type="text"
                  />
                </div>
                <div className="w-1/1 pr-1">
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageFile"
                    className="absolute opacity-0 cursor-pointer bg-green-300 w-[10%]"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="ijazah" className="block mb-2 mt-2 md:mt-0 text-sm font-medium text-gray-900 dark:text-white">
                    Ijazah
                  </label>
                  <label
                    htmlFor="imageUpload"
                    className="bg-[#F8A849] hover:bg-[#D2691E] text-white hover:text-white inline-flex items-center px-4 py-1.5 cursor-pointer text-sm rounded-xl drop-shadow-2xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3H19" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18 13L12 7L6 13" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 7V21" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="ml-1">Unggah File</span>
                  </label>
                  <span id="imageStatus" className="text-black text-sm w-1 text-center ml-3">
                    {fileStatus}
                  </span>
                </div>
              </form>
            </div>
            {showInputDataPerlu && (
              <div className="md:fixed  md:ml-[70%]">
                <AlertInputDataPerlu />
              </div>
            )}
            {showAlertDaftarSukses && (
              <div className="md:fixed  md:ml-[70%]">
                <AlertDaftarSukses />
              </div>
            )}
            <div className="flex mt-5 justify-end items-center">
              <label htmlFor="kirim" onClick={handleFormSubmit} className="bg-[#D2691E] hover:bg-[#F8A849] font-medium text-white hover:text-white inline-flex items-center px-14 py-1.5 cursor-pointer text-sm rounded-md shadow-lg">
                <span className="ml-1">Kirim</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
