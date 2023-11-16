import Image from "next/image"
import Link from "next/link"

import SvgDashboardProfile from '@/app/components/SvgDashboardProfile';
import Navbars from "@/app/components/Navbars";
export default function DashboardRekrut() {
  return (
    <>
      <div className="nav">
        <Navbars />
      </div>
      <div className="w-full overflow-x-hidden pt-14">
        <div className="flex justify-start items-start">
          <div className="text-start justify-start items-start ml-5">
            <div className="mt-8 mb-2">
              <Link href={"/page/landingPage/profil"}>
                <div className="flex p-3 gap-5">
                  <div className="w-[20%] flex justify-end items-end">
                    <SvgDashboardProfile />
                  </div>
                  <div className="w-[70%] flex flex-col justify-start pl-2">
                    Selamat Datang, User
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 w-full text-[22px] md:text-[32px] ml-12">Dashboard Perekrutan</div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Link href={"/page/landingPage/daftarBerkas"}>
          <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-xl rounded-lg">
            <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M120.833 16.6667H50.0002C45.5799 16.6667 41.3407 18.4226 38.215 21.5482C35.0894 24.6738 33.3335 28.9131 33.3335 33.3333V166.667C33.3335 171.087 35.0894 175.326 38.215 178.452C41.3407 181.577 45.5799 183.333 50.0002 183.333H150C154.42 183.333 158.66 181.577 161.785 178.452C164.911 175.326 166.667 171.087 166.667 166.667V62.5L120.833 16.6667Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M116.667 16.6667V66.6667H166.667" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M133.333 108.333H66.6665" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M133.333 141.667H66.6665" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M83.3332 75H66.6665" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex pb-4">
              <div className="justify-center items-center flex text-center m-auto text-white font-bold">
                Daftar Berkas
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/page/landingPage/cekStatus"}>
          <div className="m-4 w-72 bg-[#BA937C] hover:bg-[#F8A849] shadow-xl rounded-lg">
            <div className="rounded-t-lg text-xl p-3 pl-4 justify-center items-center flex">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.6667 41.6667H33.3333C28.731 41.6667 25 45.3976 25 50V83.3333C25 87.9357 28.731 91.6667 33.3333 91.6667H66.6667C71.269 91.6667 75 87.9357 75 83.3333V50C75 45.3976 71.269 41.6667 66.6667 41.6667Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25 141.667L41.6667 158.333L75 125" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M108.333 50H175" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M108.333 100H175" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M108.333 150H175" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex pb-4">
              <div className="justify-center items-center flex text-center m-auto text-white font-bold">
                Cek Status
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}