'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { usePathname } from 'next/navigation'
import { PacmanLoader } from "react-spinners";
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Kedai Bu Titin',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  const [accessToken, _] = useLocalStorage('accessToken', '');
  const [refreshToken, __] = useLocalStorage('refreshToken', '');
  const [id,setPemesanan] = useLocalStorage("idPemesanan","")
  const pathname = usePathname()


  useEffect(() => {
    // console.log(pathname);\
    if (pathname === '/page/dashboard/FormLogin' || pathname === '/page/dashboard/ForgotPassword' || pathname === '/page/dashboard/CodeOTP' || pathname === '/page/dashboard/NewPassword' || pathname === '/page/pemesanan' || pathname === '/page/landingPage' || pathname === '/page/pemesanan/DetailPemesanan' || pathname === '/page/landingPage' || pathname === '/page/landingPage/loginPegawai' || pathname === '/page/landingPage/home' || pathname === '/page/landingPage/buatPassword' || pathname === '/page/landingPage/kodeOTP' || pathname === '/page/landingPage/lupaPassword' || pathname === '/page/landingPage/loginPrekrutan' || pathname === '/page/pemesanan/detaiPemesanan' || pathname === '{/page/pemesanan/detaiPemesanan}' || pathname === `/page/pemesanan/${id}`) {
      setCheck(true);
      return
    }
    
    if (!accessToken) {
      setCheck(false);
      if (pathname === '/page/landingPage/dashboardRekrut' || pathname === '/page/landingPage/cekStatus' || pathname === '/page/landingPage/profil') {
        router.push('/page/landingPage/loginPegawai');
      } else {
        router.push('/page/dashboard/FormLogin');
      }
    } else {
      setCheck(true);
    }
    return () => {
    }
  }, [pathname, accessToken, refreshToken]);

  if( id === "") {
    router.push('/page/pemesanan')
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>KiwKiw</title>
        <link rel="icon" href="/public/logoNavbar.ico" />
      </head>
      <body className={montserrat.className}>
        {loading ? (
          <>
            <div className='h-screen flex flex-col justify-center items-center ' style={{ backgroundImage: 'url("/images/bg-loading.png")' }}>
              <div className="ml-10 mb-4">
                <Image
                  src="/images/logokedai.png"
                  alt="Logo Kedai"
                  width={150}
                  height={150}
                />
              </div>
              <div className="mb-4 mr-6">
                <PacmanLoader color="#965A36" />
              </div>
            </div>
          </>
        ) : (
          check && children
        )}
        {/* {children} */}
      </body>
    </html>
  )
}
