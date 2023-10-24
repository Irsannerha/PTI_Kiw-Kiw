import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LandingPage() {
  return (
    <>
      <nav className="flex justify-between items-center py-3 px-10 bg-[#F8A849] fixed top-0 w-full z-10">
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
      <Link className="text-slate-800 hover:text-red-500" href="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="text-slate-800 hover:text-red-500" href="/profil">
        Profil
      </Link>
    </li>
    <li>
      <Link className="text-slate-800 hover:text-red-500" href="/menu">
        Menu
      </Link>
    </li>
    <li>
      <Link className="text-slate-800 hover:text-red-500" href="/kontak">
        Kontak
      </Link>
    </li>
    <li>
      <Link
        className="text-slate-800 hover:text-red-500"
        href="/perekrutan_pegawai"
      >
        Perekrutan Pegawai
      </Link>
    </li>
  </ul>
</nav>
      {/* Ini Jumbotron */}
      <div className="mt-24 flex items-center justify-between bg-[#FFE4C4] p-10 py-32">
  <div className="text-end">
    <h1 className="text-2xl font-bold text-black mb-2 text-[120px]">KEDAI</h1>
    <h1 className="font-bold text-black mb-2 text-[70px] py-4 text-">Bu Titin</h1>
    <div className="inline-block h-10">
      <p className="text-black">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's standard dummy text ever since the 1500s
      </p>
    </div>
    <button className="mt-4 bg-[#D2691E] text-white px-4 py-2 rounded-lg drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]">
      Lihat Selengkapnya
    </button>
  </div>
  <div className="pe-56">
    <Image src="/images/logoKedai.png" alt="Logo KEDAI Bu Titin" width={500} height={500} />
  </div>
</div>

      {/* Tampilan Ini tengah */}
      <div className="flex items-center justify-between bg-[#FBC98E] p-10 py-32">
        <div>
          <Image src="/images/logoKedai.png" alt="Logo KEDAI Bu Titin" width={500} height={500} />
        </div>
        <div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
            Tentang Kedai Bu Titin
          </h1>
          <p className="text-black mt-4 max-w-3xl space-y-60 py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {/* Tampilan Ini contact section */}
      
        <div className="flex justify-between items-center py-3 px-10 bg-[#EDC3A5]">
          <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800">Hubungi Kami</h1>
              <p className="text-sm mt-3 text-slate-800 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
              <ul className="mt-12 space-y-8">
                <li className="flex items-center">
                  <a href="javascript:void(0)" className="text-slate-800 text-2xl mb-2">
                    <strong>+62 812 3456 7891</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <p className="text-sm font-semibold text-[#333]">I'm interested in...</p>
              <div className="space-y-4 max-lg:mt-4">
                <button type="button" className="px-4 py-2 rounded-md bg-[#D2691E] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#D2691E] mr-4">
                  Ayam
                </button>
                <button type="button" className="px-4 py-2 rounded-md bg-transparent text-gray-400 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">
                  Ikan Bakar
                </button>
                <button type="button" className="px-4 py-2 rounded-md bg-transparent text-gray-400 text-sm tracking-wider font-medium outline-none border-2 border-gray-300">
                  Minuman
                </button>
              </div>
              <form className="mt-8 space-y-4">
                <input type="text" placeholder="Name" className="w-full rounded-md py-3 px-4 text-sm outline-[#D2691E]" />
                <input type="email" placeholder="Email" className="w-full rounded-md py-3 px-4 text-sm outline-[#D2691E]" />
                <input type="text" placeholder="Subject" className="w-full rounded-md py-3 px-4 text-sm outline-[#D2691E]" />
                <textarea placeholder="Message" rows="6" className="w-full rounded-md px-4 text-sm pt-3 outline-[#D2691E]" />
                <button type="button" className="text-white bg-[#D2691E] hover:bg-[#D2691E] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      {/* Ini Footer */}
      <footer className="bg-[#BA937C] text-center dark:bg-secondary-600">
        <div className="px-6 pt-6">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
              <div className="md:mb-6 md:ml-auto">
                <p className="text-secondary-800 dark:text-secondary-200 text-right">
                  <h2 className="text-2xl font-bold mb-2">Ingin mendaftar menjadi bagian kedai ini?</h2>
                  <a href="#" className="text-slate-800 hover:text-red-600 font-bold">Klik disini</a>
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Image src="/images/logoKedai.png" className="max-w-3xl h-260" alt="Logo" width={250} height={250} />
              </div>
              <div className="">
                <p className="mb-4 text-left">
                  <a href="#!" className="text-slate-800 hover:text-red-500 font-bold">Home</a>
                </p>
                <p className="mb-4 text-left">
                  <a href="#!" className="text-slate-800 hover:text-red-500 font-bold">Profil</a>
                </p>
                <p className="mb-4 text-left">
                  <a href="#!" className="text-slate-800 hover:text-red-500 font-bold">Menu</a>
                </p>
                <p className="text-left">
                  <a href="#!" className="text-slate-800 hover:text-red-500 font-bold">Kontak</a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
          © 2023 Copyright - Made with ❤️ by ReClass
        </div>
      </footer>
    </>
  );
}
