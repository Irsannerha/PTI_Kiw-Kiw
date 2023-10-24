import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function landingPage () {
  return (
    <>
    <nav className="flex justify-between items-center py-3 px-10 bg-[#F8A849]">
          <Link href={'https://nextjs.org/docs/api-reference/next/link#with-url-object'}>
              <Image
                  src='/images/logoKedai.png'
                  alt='logo Kedai'
                  className='drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] '
                  width={90}
                  height={90}
                  priority
                />
          </Link>

          <ul className='flex gap-7 items-center font'>
              <li>
                  <Link className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Home</Link>
              </li>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/profil'}>Profil</Link>
              </li>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/menu'}>Menu</Link>
              </li>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/kontal'}>Kontak</Link>
              </li>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/perekrutan_pegawai'}>Prekrerutan Pegawai</Link>
              </li>
             
          </ul>
      </nav>
{/* Ini Jumbotron*/}
<div className="flex items-center justify-between bg-[#FFE4C4] p-6 py-32">
  <div className="text-end">
    <h1 className="text-2xl font-bold text-black mb-2 text-[120px]">KEDAI</h1>
    <h1 className="font-bold text-black mb-2 text-[70px] py-4 text-"> Bu Titin</h1>
    <div className="inline-block h-10">
<p className=" text-black ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's standard dummy text ever since the 1500s</p>
    </div>
    <button className="mt-4 bg-[#D2691E] text-white px-4 py-2 rounded-lg drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]">Lihat Selengkapnya</button>
  </div>
  <div className="pe-56">
    <Image src="/images/logoKedai.png" alt="Logo KEDAI Bu Titin" width="500" height="500"/>
  </div>
</div>
{/* Tampilan Ini tengah*/}
<div className="flex items-center justify-between bg-[#FBC98E] p-6">
  <div>
    <img src="/images/logoKedai.png" alt="Logo KEDAI Bu Titin" width="500" height="500"/>
  </div>
  <div>
    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">Tentang Kedai Bu Tintin</h1>
    <p className="text-black mt-4 max-w-3xl space-y-60 py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>

     </>

     
  );
}

