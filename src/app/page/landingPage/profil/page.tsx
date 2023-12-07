// Di file profilRekrutan.js

"use client";
import Link from "next/link";
import { useState } from 'react';
import Navbars from "../../../components/Navbars";
import axios from "axios";

export default function ProfilRekrutan() {
  const [formData, setFormData] = useState({
    nama: "Muhammad Saiful",
    no_hp: "08742747172",
    email: "saiful@example.com",
    alamat: "Bandar Lampung",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Permintaan API
      const response = await axios.post('/api/submit-data', formData);

      if (response.status === 200) {
        // Tambahkan logika atau pembaruan state yang diperlukan setelah berhasil
        console.log('Data berhasil disimpan:', response.data);
      } else {
        console.error('Gagal mengirimkan data:', response.status);
      }
    } catch (error) {
      console.error('Error mengirimkan data:', error);
      alert('Tidak dapat mengirimkan data');
    }

    // Tampilkan data yang akan dikirim ke API di console
    console.log('User Data:', JSON.stringify(formData));
  };

  return (
    <>
      <div className="nav">
        <Navbars />
      </div>
      <div className="w-full overflow-x-hidden pt-28 md:pt-28">
        <div className="flex justify-center">
          <div className="p-6 rounded-2xl bg-[#FFF7ED] border border-amber-500 dark:border-neutral-950 shadow-md w-auto">
            <div className="flex items-center mb-4">
              <Link href={"/page/landingPage/dashboardRekrut"}>
                <button className=" bg-[#F8A849] rounded-lg flex items-center text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 23.75L6.25 15L15 6.25" stroke="#616161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 15H6.25" stroke="#616161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="0.5" y="0.5" width="29" height="29" stroke="#F8A849" strokeOpacity="0.2" />
                  </svg>
                </button>
              </Link>
              <div className="text-sm font-medium text-center ml-3">User Profile</div>
            </div>
            <div className="flex items-center flex-col mb-4">
              <div className="w-24 h-24 rounded-full  overflow-hidden">
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55 0C24.6169 0 0 24.6169 0 55C0 85.3831 24.6169 110 55 110C85.3831 110 110 85.3831 110 55C110 24.6169 85.3831 0 55 0ZM55 21.2903C65.7782 21.2903 74.5161 30.0282 74.5161 40.8064C74.5161 51.5847 65.7782 60.3226 55 60.3226C44.2218 60.3226 35.4839 51.5847 35.4839 40.8064C35.4839 30.0282 44.2218 21.2903 55 21.2903ZM55 97.5806C41.9819 97.5806 30.3165 91.6814 22.5101 82.4556C26.6794 74.6048 34.8407 69.1936 44.3548 69.1936C44.8871 69.1936 45.4194 69.2823 45.9294 69.4375C48.8125 70.369 51.8286 70.9677 55 70.9677C58.1714 70.9677 61.2097 70.369 64.0706 69.4375C64.5806 69.2823 65.1129 69.1936 65.6452 69.1936C75.1593 69.1936 83.3206 74.6048 87.4899 82.4556C79.6835 91.6814 68.0181 97.5806 55 97.5806Z" fill="black" />
                </svg>
              </div>
              <p className="text-gray-900  dark:text-white font-medium text-lg mt-2">Muhammad Saiful</p>
            </div>
            <div className="m-4 w-full flex">
              <div>
                <form className="md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-16">
                  <div>
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nama
                    </label>
                    <input
                      name="nama"
                      placeholder="Muhammad Saiful"
                      required
                      type="text"
                      className="border border-1 border-yellow-600 rounded-md"
                      value={formData.nama}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="no_hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      No hp
                    </label>
                    <input
                      name="no_hp"
                      placeholder="08742747172"
                      required
                      type="text"
                      className="border border-1 border-yellow-600 rounded-md"
                      readOnly
                      value={formData.no_hp}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      E-mail
                    </label>
                    <input
                      name="email"
                      placeholder="saiful@example.com"
                      required
                      type="text"
                      className="border border-1 border-yellow-600 rounded-md"
                      readOnly
                      value={formData.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Alamat
                    </label>
                    <input
                      name="alamat"
                      placeholder="Bandar Lampung"
                      required
                      type="text"
                      className="border border-1 border-yellow-600 rounded-md"
                      readOnly
                      value={formData.alamat}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <label
                htmlFor="ubah"
                className="bg-[#F8A849] hover:bg-[#D2691E] font-medium text-black hover:text-white inline-flex items-center px-6 py-1.5 cursor-pointer text-sm rounded-xl shadow-lg"
                onClick={handleSubmit}
              >
                <span className="ml-1">Simpan</span>
              </label>
            </div>
            <div className="flex justify-end items-center mt-5">
              <label
                htmlFor="logout"
                className="bg-[#F8A849] hover:bg-[#D2691E] font-medium text-black hover:text-white inline-flex items-center px-6 py-1.5 cursor-pointer text-sm rounded-xl shadow-md"
              >
                <span className="ml-1">Log Out</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
