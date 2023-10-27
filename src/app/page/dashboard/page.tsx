"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';
import Link from "next/link";

import SvgDashboardProfile from "@/app/components/SvgDashboardProfile"
import SvgDashboardKalender from "@/app/components/SvgDashboardKalender"

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString('id-ID');
  return (
    <>
      <div style={{ display: 'flex' }}>
        <DashboardSideBar />
        <div style={{ marginLeft: '280px', padding: '20px' }} className="w-[77%]">
          <div className="flex justify-between">
            <div className="text-start justify-start items-start">
              <div className="mt-4 mb-4 w-44 bg-[#FFE4C4] shadow-lg rounded-lg">
                <div className="flex p-3">
                  <div className="flex flex-col justify-center">
                    <SvgDashboardKalender />
                  </div>
                  <div className="w-full">
                    <div className="justify-end items-end flex">{formattedDate}</div>
                    <div className="justify-end items-end flex">{formattedTime}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end justify-end items-end">
              <div className="mt-4 mb-4 w-52 bg-[#FFE4C4] shadow-lg rounded-lg">
                <div className="flex p-3 gap-5">
                  <div className="w-[80%] flex flex-col justify-center">
                    Selamat Datang, Admin
                  </div>
                  <div className="w-[20%] flex justify-end items-end">
                    <SvgDashboardProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-4 w-full text-[32px]">Selamat Datang di Dashboard</div>
          <div className="flex justify-center">
            <Link href="/page/dashboard/KelolaMenuPemesanan">
              <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex"><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66.6668 8.3335L57.0835 17.9168C54.7931 20.2534 53.5103 23.3949 53.5103 26.6668C53.5103 29.9387 54.7931 33.0802 57.0835 35.4168L64.5835 42.9168C66.9201 45.2072 70.0616 46.49 73.3335 46.49C76.6054 46.49 79.7469 45.2072 82.0835 42.9168L91.6668 33.3335" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M62.5001 62.5L13.7501 13.75C12.0871 15.3794 10.766 17.3242 9.86405 19.4706C8.96212 21.617 8.49756 23.9218 8.49756 26.25C8.49756 28.5782 8.96212 30.883 9.86405 33.0294C10.766 35.1758 12.0871 37.1206 13.7501 38.75L44.1668 69.1667C47.0834 72.0833 52.5001 72.0833 55.8334 69.1667L62.5001 62.5ZM62.5001 62.5L91.6668 91.6667" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.75 90.8335L35.4167 64.5835" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M79.1667 20.8335L50 50.0002" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div className="flex pb-4">
                  <div className="justify-center items-center flex text-center m-auto text-white">
                    Menu Pesanan
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/page/dashboard/PerekrutanPegawai">
              <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.6668 87.5V79.1667C66.6668 74.7464 64.9109 70.5072 61.7853 67.3816C58.6597 64.256 54.4204 62.5 50.0002 62.5H25.0002C20.5799 62.5 16.3407 64.256 13.215 67.3816C10.0894 70.5072 8.3335 74.7464 8.3335 79.1667V87.5" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37.5002 45.8333C46.7049 45.8333 54.1668 38.3714 54.1668 29.1667C54.1668 19.9619 46.7049 12.5 37.5002 12.5C28.2954 12.5 20.8335 19.9619 20.8335 29.1667C20.8335 38.3714 28.2954 45.8333 37.5002 45.8333Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M91.6665 87.4998V79.1665C91.6637 75.4737 90.4347 71.8864 88.1722 68.9678C85.9097 66.0492 82.742 63.9647 79.1665 63.0415" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M66.6665 13.0415C70.2516 13.9594 73.4292 16.0444 75.6983 18.9678C77.9675 21.8912 79.1992 25.4866 79.1992 29.1873C79.1992 32.888 77.9675 36.4835 75.6983 39.4069C73.4292 42.3303 70.2516 44.4153 66.6665 45.3332" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className="flex pb-4">
                  <div className="justify-center items-center flex text-center m-auto text-white">
                    Perekrutan Pegawai
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="#">
              <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79.1667 12.5H20.8333C16.231 12.5 12.5 16.231 12.5 20.8333V79.1667C12.5 83.769 16.231 87.5 20.8333 87.5H79.1667C83.769 87.5 87.5 83.769 87.5 79.1667V20.8333C87.5 16.231 83.769 12.5 79.1667 12.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 37.4998C12.5 35.2897 13.378 33.1701 14.9408 31.6073C16.5036 30.0445 18.6232 29.1665 20.8333 29.1665H79.1667C81.3768 29.1665 83.4964 30.0445 85.0592 31.6073C86.622 33.1701 87.5 35.2897 87.5 37.4998" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 45.8335H25C28.3333 45.8335 31.6667 47.0835 33.75 49.5835L38.3333 53.3335C45 60.0002 55.4167 60.0002 62.0833 53.3335L66.6667 49.5835C68.75 47.5002 72.0833 45.8335 75.4167 45.8335H87.5" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className="flex pb-4">
                  <div className="justify-center items-center flex text-center m-auto text-white">
                    Laporan Pesanan
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-lg rounded-lg">
                <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6665 81.2502V18.7502C16.6665 15.9875 17.764 13.338 19.7175 11.3845C21.671 9.43096 24.3205 8.3335 27.0832 8.3335H83.3332V91.6668H27.0832C24.3205 91.6668 21.671 90.5694 19.7175 88.6159C17.764 86.6624 16.6665 84.0128 16.6665 81.2502ZM16.6665 81.2502C16.6665 78.4875 17.764 75.838 19.7175 73.8845C21.671 71.931 24.3205 70.8335 27.0832 70.8335H83.3332" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className="flex pb-4">
                  <div className="justify-center items-center flex text-center m-auto text-white">
                    Laporan Perekrutan
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}


