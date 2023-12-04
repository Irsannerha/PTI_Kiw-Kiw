"use client";
import Link from "next/link";
import SvgDashboardProfile from "@/app/components/SvgDashboardProfile";
import Input from "@/app/components/Input";
import { useState } from 'react';
import Navbars from "@/app/components/Navbars";
import AlertInputDataPerlu from "@/app/components/AlertInputDataPerlu"
import AlertDaftarSukses from "@/app/components/AlertDaftarSukses"
import axios from "axios";

import { Button, Card, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from "../../../../../firebaseConfig"

interface DataFetch {
  nama: string;
  alamat: string;
  nik: string;
  jenisKelamin: string;
  noHp: string;
  email: string;
  umur: string;
  ijazah: File | string;
}

export default function DaftarBerkas() {
  const initialData: DataFetch = {
    nama: "",
    alamat: "",
    nik: "",
    jenisKelamin: "",
    noHp: "",
    email: "",
    umur: "",
    ijazah: "", // Initialize ijazah property
  }

  const [nama, setNama] = useState(initialData.nama);
  const [alamat, setAlamat] = useState(initialData.alamat);
  const [nik, setNik] = useState(initialData.nik);
  const [jenisKelamin, setJenisKelamin] = useState(initialData.jenisKelamin);
  const [noHp, setNoHp] = useState(initialData.noHp);
  const [email, setEmail] = useState(initialData.email);
  const [umur, setUmur] = useState(initialData.umur);
  const [ijazah, setijazah] = useState<string | File | undefined>(/* initial value */);

  const [isNamaEmpty, setIsNamaEmpty] = useState(false);
  const [isAlamatEmpty, setIsAlamatEmpty] = useState(false);
  const [isNikEmpty, setIsNikEmpty] = useState(false);
  const [isJenisKelaminEmpty, setIsJenisKelaminEmpty] = useState(false);
  const [isNoHpEmpty, setIsNoHpEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isUmurEmpty, setIsUmurEmpty] = useState(false);
  const [isijazahEmpty, setIsijazahEmpty] = useState(false);

  const [showAlertDaftarSukses, setshowAlertDaftarSukses] = useState(false);
  const [showInputDataPerlu, setshowInputDataPerlu] = useState(false);

  const handleFormSubmit = async () => {
    setIsNamaEmpty(false);
    setIsAlamatEmpty(false);
    setIsNikEmpty(false);
    setIsJenisKelaminEmpty(false);
    setIsNoHpEmpty(false);
    setIsEmailEmpty(false);
    setIsUmurEmpty(false);
    setIsijazahEmpty(false);
    if (!nama.trim()) {
      setIsNamaEmpty(true);
    } else {
      setIsNamaEmpty(false);
    }
    if (!alamat.trim()) {
      setIsAlamatEmpty(true);
    } else {
      setIsAlamatEmpty(false);
    }
    if (!nik.trim()) {
      setIsNikEmpty(true);
    } else {
      setIsNikEmpty(false);
    }
    if (!jenisKelamin.trim()) {
      setIsJenisKelaminEmpty(true);
    } else {
      setIsJenisKelaminEmpty(false);
    }
    if (!noHp.trim()) {
      setIsNoHpEmpty(true);
    } else {
      setIsNoHpEmpty(false);
    }
    if (!email.trim()) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if (!umur.trim()) {
      setIsUmurEmpty(true);
    } else {
      setIsUmurEmpty(false);
    }
    if (!ijazah) {
      setIsijazahEmpty(true);
    } else {
      setIsijazahEmpty(false);
    }
    // Tampilkan peringatan jika semua input kosong
    if (isNamaEmpty && isAlamatEmpty && isJenisKelaminEmpty && isNikEmpty && isNoHpEmpty && isEmailEmpty && isUmurEmpty) {
      setshowInputDataPerlu(true);
      setTimeout(() => {
        setshowInputDataPerlu(false);
      }, 3000);
    } else if (nama && alamat && jenisKelamin && nik && noHp && email && umur) {
      try {
        const namaRegex = /^[A-Za-z\s]{1,20}(\s[A-Za-z\s]{1,20}){0,3}$/;
        if (!namaRegex.test(nama)) {
          alert('Nama harus berupa huruf, tidak lebih dari 20 karakter, dan maksimal 4 kalimat');
          return;
        }
        if (isNaN(parseInt(noHp))) {
          alert('NoHP harus berupa angka');
          return;
        }
        if (email.includes('@gmail.com')) {
          if (imageFile) {
            await handleUploadFile();
          }
          // Log input data to console
          console.log('Input Data:', {
            nama,
            alamat,
            jenisKelamin,
            nik,
            noHp,
            email,
            umur,
            ijazah: downloadURL,
          });
          // Send data to backend
          const response = await axios.post('YOUR_BACKEND_API/menu', {
            nama,
            alamat,
            jenisKelamin,
            nik,
            noHp,
            email,
            umur,
            ijazah: downloadURL,
          });
          if (response.status === 200) {
            setshowAlertDaftarSukses(true);
            setTimeout(() => {
              setshowAlertDaftarSukses(false);
            }, 5000);
            // Log input data to console
            console.log('Input Data:', {
              nama,
              alamat,
              jenisKelamin,
              nik,
              noHp,
              email,
              umur,
              ijazah: downloadURL,
            });
            // Reset form fields
            setNama("");
            setAlamat("");
            setJenisKelamin("");
            setNik("");
            setNoHp("");
            setEmail("");
            setUmur("");
            setijazah("");
          } else {
            // Handle other response statuses or errors
          }
        } else {
          alert('Use @gmail.com in email');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error scenarios
      }
    }
  };

  const handleReset = () => {
    // Mereset semua input dan status kosong
    setNama("");
    setAlamat("");
    setJenisKelamin("");
    setNoHp("");
    setNik("");
    setEmail("");
    setUmur("");
    setijazah("");

    setIsNamaEmpty(false);
    setIsAlamatEmpty(false);
    setIsJenisKelaminEmpty(false);
    setIsNoHpEmpty(false);
    setIsNikEmpty(false);
    setIsEmailEmpty(false);
    setIsUmurEmpty(false);
    setIsijazahEmpty(false);
  };

  // Batas

  const [imageFile, setImageFile] = useState<File>()
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)
  const [fileStatus, setFileStatus] = useState("Tidak ada gambar.");
  const [isUploadButtonPressed, setIsUploadButtonPressed] = useState(false);

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);
      setFileStatus(files[0].name); // Set file name as file status
      setIsUploadButtonPressed(false);
      console.log(files[0]);
    } else {
      message.error('File size too large');
    }
  };
  const handleUploadFile = async () => {
    if (imageFile) {
      setIsUploading(true); // Set status upload menjadi true
      setIsUploadButtonPressed(true);
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressUpload(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          setIsUploading(false); // Set status upload menjadi false saat terjadi error
          message.error(error.message);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setDownloadURL(url);
            setFileStatus(imageFile.name);
            setIsUploading(false); // Set status upload menjadi false setelah selesai
          } catch (error) {
            console.error('Error getting download URL:', error);
            setIsUploading(false); // Set status upload menjadi false saat terjadi error
          }
        },
      );
    } else {
      message.error('File not found');
    }
  };
  const handleRemoveFile = () => {
    setImageFile(undefined);
    setFileStatus("Tidak ada gambar");
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
                    onChange={(e) => { setAlamat(e.target.value); }}
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
                    className="absolute opacity-0 cursor-pointer "
                    onChange={(files) => handleSelectedFile(files.target.files)}
                    placeholder="Select file to upload"
                    accept="image/png"
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
            <div className="mt-5">
              <Card>
                {imageFile && (
                  <>
                    <List.Item
                      extra={[
                        <Button
                          key="btnRemoveFile"
                          onClick={handleRemoveFile}
                          type="text"
                          icon={<i className="fas fa-times text-black"></i>}
                        />,
                      ]}
                    >
                      <List.Item.Meta
                        title={imageFile.name}
                        description={`Size: ${imageFile.size}`}
                      />
                    </List.Item>
                    <div className="text-right mt-3">
                      <Button
                        loading={isUploading}
                        // type="primary"
                        onClick={handleUploadFile}
                        className="opacity-50 bg-white"
                      >
                        Upload
                      </Button>
                      <Progress percent={progressUpload} />
                    </div>
                  </>
                )}
                {downloadURL && (
                  <>
                    <Image
                      src={downloadURL}
                      alt={downloadURL}
                      style={{ width: 200, height: 200, objectFit: 'cover' }}
                    />
                    <p>{downloadURL}</p>
                  </>
                )}
                <p></p>
              </Card>
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
              <button
                type="button"
                onClick={handleFormSubmit}
                className={`bg-[#D2691E] hover:bg-[#F8A849] font-medium text-white hover:text-white inline-flex items-center px-14 py-1.5 cursor-pointer text-sm rounded-md shadow-lg ${isUploadButtonPressed ? '' : 'opacity-50'}`}
                disabled={!isUploadButtonPressed}
              >
                <span className="ml-1">Kirim</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
