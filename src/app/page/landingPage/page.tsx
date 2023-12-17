import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import NavbarLandingPage from "@/app/components/NavbarLandingPage"
import CarauselMenuLanding from "@/app/components/CarouselMenuLanding"
{/* <Carausel></Carausel> */ }

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LandingPage() {
  return (
    <>
      {/* Navbar Open */}
      <div className="top-0 left-0 right-0 relative">
        <NavbarLandingPage />
        {/* Navbar Close */}

        {/* Jumbotron pembuka*/}
        {/* Mobile */}
        <div className="md:hidden">
          {/* Ini Jumbotron */}
          <div className="pt-28 pb-10 flex justify-center items-center text-center m-auto bg-[#FFE4C4] w-full overflow-hidden p-5">
            <div className="w-[50%] text-right ">
              <div className="font-bold text-black text-[40px]">KEDAI</div>
              <div className="font-bold text-black text-[35px]">Bu Titin</div>
              <div className="font-normal text-black text-[10px]">Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan.</div>
              <div className="mt-2 flex justify-end items-end">
                <div className=" w-[80%] bg-[#D2691E] shadow-lg rounded-lg hover:bg-[#C79618]">
                  <Link href="#menu">
                    <div className=" flex p-2 gap-2 justify-center items-center m-auto text-center text-white">
                      <div className="flex items-center text-[10px]">
                        Lihat Selengkapnya
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[50%] flex items-center justify-items-center justify-center m-auto">
              <Image src="/images/heroIMG.png" alt="Logo KEDAI Bu Titin" width={170} height={170} />
            </div>
          </div>
          {/* penutup Penutup Jumbotron */}
        </div>
        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          {/* Jumbotron */}
          <div className="pt-28 pb-20 flex justify-center items-center text-center m-auto bg-[#FFE4C4] w-full overflow-hidden p-10">
            <div className="w-[50%] text-right ">
              <div className="font-bold text-black text-[80px]">KEDAI</div>
              <div className="font-bold text-black text-[60px]">Bu Titin</div>
              <div className="font-normal text-black text-[20px]">Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan.</div>
              <div className="mt-2 flex justify-end items-end">
                <div className=" w-[80%] bg-[#D2691E] shadow-lg rounded-lg hover:bg-[#C79618]">
                  <Link href="#menu">
                    <div className=" flex p-2 gap-2 justify-center items-center m-auto text-center text-white">
                      <div className="flex items-center text-[20px]">
                        Lihat Selengkapnya
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[50%] flex items-center justify-items-center justify-center m-auto">
              <Image src="/images/heroIMG.png" alt="Logo KEDAI Bu Titin" width={340} height={340} />
            </div>
          </div>
          {/* Penutup Jumbotron */}
        </div>
        {/* Komputer */}
        <div className="hidden lg:block">
          {/* Ini Jumbotron */}
          <div className="pt-28 pb-20 flex justify-center items-center text-center m-auto bg-[#FFE4C4] py-16 w-full overflow-hidden" id="home">
            <div className="w-[60%] text-right ">
              <div className="font-bold text-black text-[120px]">KEDAI</div>
              <div className="font-bold text-black text-[70px] -mt-10">Bu Titin</div>
              <div className="font-normal text-black text-[24px] pl-24">Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan.</div>
              <div className="mt-5 flex justify-end items-end">
                <div className=" w-[30%] bg-[#D2691E] shadow-lg rounded-lg hover:bg-[#C79618]">
                  <Link href="#menu">
                    <div className=" flex p-2.5 gap-2 justify-center items-center m-auto text-center text-white">
                      <div className="flex items-center">
                        Lihat Selengkapnya
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[40%] flex items-center justify-items-center justify-center">
              <Image src="/images/heroIMG.png" alt="Logo KEDAI Bu Titin" width={400} height={400} />
            </div>
          </div>
          {/* penutup Penutup Jumbotron */}
        </div>
        {/* Jumbotron Penutup */}

        {/* Ini Pembuka Tentang */}

        {/* Mobile */}
        <div className="md:hidden">
          <div className="bg-[#FBD09C] p-5 py-10 w-full" >
            <div className="w-full flex justify-center items-center">
              <Image src="/images/TentangKedaiBuTitin.png" alt="Logo KEDAI Bu Titin" width={170} height={230} />
            </div>

            <div className="w-full">
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem] flex justify-center items-center text-center text-[24px]">
                Tentang Kedai Bu Titin
              </h1>
              <p className="pl-5 pr-5 text-black mt-2 max-w-3xl space-y-60 flex justify-center items-center text-[12px] text-justify">
                Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan. Kedai ini berfokus pada penjualan makanan dan minuman untuk masyarakat sekitar didaerah tersebut. Makanan yang disajikan berupa makanan pokok yang dapat dinikmati oleh masyarakat sekitar dan minuman yang diberikan berbagai rasa seperti jus, jeruk, es teh dan lain-lainnya.
              </p>
            </div>
          </div>
        </div>
        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="bg-[#FBD09C] p-10 py-15 w-full" >
            <div className="w-full flex justify-center items-center">
              <Image src="/images/TentangKedaiBuTitin.png" alt="Logo KEDAI Bu Titin" width={340} height={330} />
            </div>

            <div className="w-full">
              <div className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem] flex justify-center items-center text-center text-[48px]">
                Tentang Kedai Bu Titin
              </div>
              <p className="pl-5 pr-5 text-black mt-6 max-w-3xl space-y-60 flex justify-center items-center text-[24px] text-justify">
                Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan. Kedai ini berfokus pada penjualan makanan dan minuman untuk masyarakat sekitar didaerah tersebut. Makanan yang disajikan berupa makanan pokok yang dapat dinikmati oleh masyarakat sekitar dan minuman yang diberikan berbagai rasa seperti jus, jeruk, es teh dan lain-lainnya.
              </p>
            </div>
          </div>
        </div>
        {/* Komputer */}
        <div className="hidden lg:block">
          {/* Tampilan Ini tengah */}
          <div id="tentang" className="flex items-center justify-between bg-[#FBD09C] p-10 py-20 w-full">
            <div className="flex items-center justify-center m-auto w-[40%] ">
              <Image src="/images/TentangKedaiBuTitin.png" alt="Logo KEDAI Bu Titin" width={320} height={448} />
            </div>
            <div className="w-[60%] -ml-10" >
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]" >
                Tentang Kedai Bu Titin
              </h1>
              <p className="text-black mt-4 max-w-3xl space-y-60 py-5 mr-5">
                Kedai Bu Titin, berlokasi di Jati Agung, Lampung Selatan, merupakan usaha makanan dan minuman dengan fokus pada pelayanan kepada masyarakat setempat. Kedai ini memperkenalkan sistem pemesanan dan perekrutan pegawai sebagai inovasi layanan. Kedai ini berfokus pada penjualan makanan dan minuman untuk masyarakat sekitar didaerah tersebut. Makanan yang disajikan berupa makanan pokok yang dapat dinikmati oleh masyarakat sekitar dan minuman yang diberikan berbagai rasa seperti jus, jeruk, es teh dan lain-lainnya.
              </p>
            </div>
          </div>
          {/* Tampilan Ini contact section */}
        </div>
        {/* Ini penutup tentang */}

        {/* Ini Jumbotron */}
        <div className="pl-10 pr-10 justify-center items-center text-center m-auto bg-[#F8A849] py-8 w-full overflow-hidden" id="menu">
          <div className="text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem] flex justify-center items-center text-center text-[48px]">
            Produk Kami
          </div>
          <CarauselMenuLanding />
          {/* <CarauselMakanan /> */}
        </div>

        {/* Ini Kontak HUbungi kami pembuka */}
        {/* Mobile */}
        <div className="md:hidden">
          <div className="p-5 bg-[#FBD09D]">
            <div className="justify-center items-center w-full">
              <h1 className="text-4xl font-extrabold text-slate-800 text-center mb-5">Hubungi Kami</h1>
              <div className="w-full rounded-lg flex justify-center items-center">
                <div className="w-[200px] h-[150px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.430757764529!2d105.2612635087112!3d-5.351040894605239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c59f1343b06b%3A0x4d4ec833dddddb8c!2sKedai%20Bu%20Titin!5e0!3m2!1sid!2sid!4v1699508956318!5m2!1sid!2sid"
                    scrolling="no" className="w-full h-full rounded-lg drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  </iframe>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm mt-3 text-slate-800 text-justify pl-5 pr-5  mb-5">
                  Jika anda ingin menghubungi kedai kami lebih lanjut, maka hubungi nomor telefon di bawah ini..
                </p>
                <ul className="space-y-8">
                  <li className="flex items-start justify-start m-auto pl-5">
                    <a href="javascript:void(0)" className="text-slate-800 text-2xl mb-2 flex gap-2">
                      <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.833 35.25V41.5C45.8353 42.0802 45.7165 42.6546 45.4841 43.1862C45.2516 43.7178 44.9107 44.195 44.4832 44.5873C44.0556 44.9795 43.5509 45.2781 43.0012 45.464C42.4516 45.6499 41.8692 45.7189 41.2913 45.6667C34.8806 44.9701 28.7226 42.7795 23.3122 39.2709C18.2785 36.0723 14.0108 31.8046 10.8122 26.7709C7.29128 21.3359 5.10016 15.1479 4.41632 8.70837C4.36426 8.13226 4.43273 7.55162 4.61737 7.00342C4.802 6.45522 5.09876 5.95148 5.48875 5.52425C5.87874 5.09702 6.35342 4.75568 6.88255 4.52196C7.41169 4.28824 7.9837 4.16725 8.56216 4.16671H14.8122C15.8232 4.15675 16.8034 4.51479 17.57 5.17407C18.3366 5.83334 18.8373 6.74889 18.9788 7.75004C19.2426 9.75018 19.7318 11.7141 20.4372 13.6042C20.7175 14.3499 20.7781 15.1603 20.612 15.9394C20.4458 16.7185 20.0598 17.4336 19.4997 18L16.8538 20.6459C19.8196 25.8616 24.1381 30.1801 29.3538 33.1459L31.9997 30.5C32.5661 29.9399 33.2812 29.5539 34.0603 29.3877C34.8394 29.2216 35.6498 29.2822 36.3955 29.5625C38.2856 30.2679 40.2495 30.7571 42.2497 31.0209C43.2617 31.1636 44.1859 31.6734 44.8466 32.4532C45.5073 33.2329 45.8583 34.2283 45.833 35.25Z" stroke="#646464" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <strong className="flex items-center text-center text-[24px]">+62 853-6661-5817</strong>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="p-10 bg-[#FBD09D]">
            <div className="justify-center items-center w-full">
              <h1 className="text-4xl font-extrabold text-slate-800 text-center mb-10">Hubungi Kami</h1>
              <div className="w-full rounded-lg flex justify-center items-center">
                <div className="w-[400px] h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.430757764529!2d105.2612635087112!3d-5.351040894605239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c59f1343b06b%3A0x4d4ec833dddddb8c!2sKedai%20Bu%20Titin!5e0!3m2!1sid!2sid!4v1699508956318!5m2!1sid!2sid"
                    scrolling="no" className="w-full h-full rounded-lg drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  </iframe>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm mt-3 text-slate-800 text-justify pl-10 pr-10 mb-10">
                  Jika anda ingin menghubungi kedai kami lebih lanjut, maka hubungi nomor telefon di bawah ini..
                </p>
                <ul className="space-y-8">
                  <li className="flex items-start justify-start m-auto pl-10">
                    <a href="javascript:void(0)" className="text-slate-800 text-2xl mb-2 flex gap-2">
                      <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.833 35.25V41.5C45.8353 42.0802 45.7165 42.6546 45.4841 43.1862C45.2516 43.7178 44.9107 44.195 44.4832 44.5873C44.0556 44.9795 43.5509 45.2781 43.0012 45.464C42.4516 45.6499 41.8692 45.7189 41.2913 45.6667C34.8806 44.9701 28.7226 42.7795 23.3122 39.2709C18.2785 36.0723 14.0108 31.8046 10.8122 26.7709C7.29128 21.3359 5.10016 15.1479 4.41632 8.70837C4.36426 8.13226 4.43273 7.55162 4.61737 7.00342C4.802 6.45522 5.09876 5.95148 5.48875 5.52425C5.87874 5.09702 6.35342 4.75568 6.88255 4.52196C7.41169 4.28824 7.9837 4.16725 8.56216 4.16671H14.8122C15.8232 4.15675 16.8034 4.51479 17.57 5.17407C18.3366 5.83334 18.8373 6.74889 18.9788 7.75004C19.2426 9.75018 19.7318 11.7141 20.4372 13.6042C20.7175 14.3499 20.7781 15.1603 20.612 15.9394C20.4458 16.7185 20.0598 17.4336 19.4997 18L16.8538 20.6459C19.8196 25.8616 24.1381 30.1801 29.3538 33.1459L31.9997 30.5C32.5661 29.9399 33.2812 29.5539 34.0603 29.3877C34.8394 29.2216 35.6498 29.2822 36.3955 29.5625C38.2856 30.2679 40.2495 30.7571 42.2497 31.0209C43.2617 31.1636 44.1859 31.6734 44.8466 32.4532C45.5073 33.2329 45.8583 34.2283 45.833 35.25Z" stroke="#646464" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <strong className="flex items-center text-center text-[24px]">+62 853-6661-5817</strong>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        {/* Komputer */}
        <div className="hidden lg:block">
          <div className="p-10 bg-[#FBD09D]" id="kontak">
            <div className="flex justify-center items-center w-full">
              <div className="w-[45%]">
                <h1 className="text-4xl font-extrabold text-slate-800">Hubungi Kami</h1>
                <p className="w-[90%] text-sm mt-3 text-slate-800 ">
                  Jika anda ingin menghubungi kedai kami lebih lanjut, maka hubungi nomor telefon di bawah ini..
                </p>
                <ul className="mt-12 space-y-8">
                  <li className="flex items-center">
                    <a href="javascript:void(0)" className="text-slate-800 text-2xl mb-2 flex gap-2">
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.833 35.25V41.5C45.8353 42.0802 45.7165 42.6546 45.4841 43.1862C45.2516 43.7178 44.9107 44.195 44.4832 44.5873C44.0556 44.9795 43.5509 45.2781 43.0012 45.464C42.4516 45.6499 41.8692 45.7189 41.2913 45.6667C34.8806 44.9701 28.7226 42.7795 23.3122 39.2709C18.2785 36.0723 14.0108 31.8046 10.8122 26.7709C7.29128 21.3359 5.10016 15.1479 4.41632 8.70837C4.36426 8.13226 4.43273 7.55162 4.61737 7.00342C4.802 6.45522 5.09876 5.95148 5.48875 5.52425C5.87874 5.09702 6.35342 4.75568 6.88255 4.52196C7.41169 4.28824 7.9837 4.16725 8.56216 4.16671H14.8122C15.8232 4.15675 16.8034 4.51479 17.57 5.17407C18.3366 5.83334 18.8373 6.74889 18.9788 7.75004C19.2426 9.75018 19.7318 11.7141 20.4372 13.6042C20.7175 14.3499 20.7781 15.1603 20.612 15.9394C20.4458 16.7185 20.0598 17.4336 19.4997 18L16.8538 20.6459C19.8196 25.8616 24.1381 30.1801 29.3538 33.1459L31.9997 30.5C32.5661 29.9399 33.2812 29.5539 34.0603 29.3877C34.8394 29.2216 35.6498 29.2822 36.3955 29.5625C38.2856 30.2679 40.2495 30.7571 42.2497 31.0209C43.2617 31.1636 44.1859 31.6734 44.8466 32.4532C45.5073 33.2329 45.8583 34.2283 45.833 35.25Z" stroke="#646464" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <strong className="flex items-center text-center text-[24px]">+62 853-6661-5817</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-[55%] rounded-lg flex justify-center items-center pt-20 pb-20">
                <div className="w-[600px] h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.430757764529!2d105.2612635087112!3d-5.351040894605239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c59f1343b06b%3A0x4d4ec833dddddb8c!2sKedai%20Bu%20Titin!5e0!3m2!1sid!2sid!4v1699508956318!5m2!1sid!2sid"
                    scrolling="no" className="w-full h-full rounded-lg drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ini Kontak HUbungi kami peenutup */}

        {/* Ini Footer */}
        {/* Mobile */}
        <div className="md:hidden">
          <footer className="bg-[#BA937C] text-center">
            <div className="p-5">
              <form action="">
                <div className="flex items-center justify-center m-auto">
                  <div className="w-[30%] ">
                    <p className="text-secondary-800 dark:text-secondary-200 text-right">
                      <h2 className="text-base font-bold">Ingin mendaftar menjadi bagian kedai ini?</h2>
                      <div className="flex gap-2 text-right justify-end items-end">
                        <div className="div">Klik </div>
                        <a href="/page/landingPage/loginPegawai" className="text-slate-800 hover:text-[#3B10E4] font-bold">disini</a>
                      </div>
                    </p>
                  </div>
                  <div className="w-[40%] flex justify-center">
                    <Image src="/images/logoKedai.png" className="max-w-3xl h-260" alt="Logo" width={150} height={150} />
                  </div>
                  <div className="w-[30%] ">
                    <p className="mb-4 text-left">
                      <a href="#home" className="text-slate-800 hover:text-[#3B10E4] font-bold">Home</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#tentang" className="text-slate-800 hover:text-[#3B10E4] font-bold">Profil</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#menu" className="text-slate-800 hover:text-[#3B10E4] font-bold">Menu</a>
                    </p>
                    <p className="text-left">
                      <a href="#kontak" className="text-slate-800 hover:text-[#3B10E4] font-bold">Kontak</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-sm bg-secondary-200 pl-5 pr-5 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
              © 2023 Copyright - Made with ❤️ by Kiw-Kiw
            </div>
          </footer>
        </div>
        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <footer className="bg-[#BA937C] text-center">
            <div className="p-10">
              <form action="">
                <div className="flex items-center justify-center m-auto">
                  <div className="w-[30%] ">
                    <p className="text-secondary-800 dark:text-secondary-200 text-right">
                      <h2 className="text-lg font-bold">Ingin mendaftar menjadi bagian kedai ini?</h2>
                      <div className="flex gap-2 text-right justify-end items-end">
                        <div className="div">Klik </div>
                        <a href="/page/landingPage/loginPegawai" className="text-slate-800 hover:text-[#3B10E4] font-bold">disini</a>
                      </div>
                    </p>
                  </div>
                  <div className="w-[40%] flex justify-center">
                    <Image src="/images/logoKedai.png" className="max-w-3xl h-260" alt="Logo" width={250} height={250} />
                  </div>
                  <div className="w-[30%] ">
                    <p className="mb-4 text-left">
                      <a href="#home" className="text-slate-800 hover:text-[#3B10E4] font-bold">Home</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#tentang" className="text-slate-800 hover:text-[#3B10E4] font-bold">Profil</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#menu" className="text-slate-800 hover:text-[#3B10E4] font-bold">Menu</a>
                    </p>
                    <p className="text-left">
                      <a href="#kontak" className="text-slate-800 hover:text-[#3B10E4] font-bold">Kontak</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-base bg-secondary-200 pl-10 pr-10 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
              © 2023 Copyright - Made with ❤️ by Kiw-Kiw
            </div>
          </footer>
        </div>
        {/* Komputer */}
        <div className="hidden lg:block">
          <footer className="bg-[#BA937C] text-center">
            <div className="p-6">
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
                  <div className="md:mb-6 md:ml-auto">
                    <p className="text-secondary-800 dark:text-secondary-200 text-right">
                      <h2 className="text-2xl font-bold mb-2">Ingin mendaftar menjadi bagian kedai ini?</h2>
                      <div className="flex gap-2 text-right justify-end items-end">
                        <div className="div">Klik </div>
                        <a href="/page/landingPage/loginPegawai" className="text-slate-800 hover:text-[#3B10E4] font-bold">disini</a>
                      </div>
                    </p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Image src="/images/logoKedai.png" className="max-w-3xl h-260" alt="Logo" width={250} height={250} />
                  </div>
                  <div className="pr-20">
                    <p className="mb-4 text-left">
                      <a href="#home" className="text-slate-800 hover:text-[#3B10E4] font-bold">Home</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#tentang" className="text-slate-800 hover:text-[#3B10E4] font-bold">Profil</a>
                    </p>
                    <p className="mb-4 text-left">
                      <a href="#menu" className="text-slate-800 hover:text-[#3B10E4] font-bold">Menu</a>
                    </p>
                    <p className="text-left">
                      <a href="#kontak" className="text-slate-800 hover:text-[#3B10E4] font-bold">Kontak</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
              © 2023 Copyright - Made with ❤️ by Kiw-Kiw
            </div>
          </footer>
        </div>
        {/* Ini Footer Penutup */}

      </div>
    </>
  );
}
