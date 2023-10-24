import Image from "next/image";
import logo from "../../img/logo-1.png";
import logoCartoon from "../../img/logo-2.jpg";

export default function FormLogin() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F8A849]">
      <div
        className="w-1/2 p-4 bg-[#FFF] flex justify-center items-center"
        style={{ width: '770px', height: '100vh' }}
      >
        {/* Konten di sebelah kiri */}
        <Image src={logoCartoon} alt="Cartoon Character" className="w-500 h-300 object-center " />
      </div>
      <div className="w-1/2 p-2 ">
        <Image src={logo} alt="Logo" className="w-200 h-190 mx-auto mt-4" />
        <div className="shadow-2xl rounded-[20px] border bg-[#FCFCFC] w-full max-w-md mx-auto">
          <h2 className="text-2xl font-montserrat text-center font-SemiBold pt-[42px]" style={{ fontSize: '32px' }}> LOGIN </h2>
          <form className="px-8 pt-8 pb-8 mb-4">
            <div className="mb-4">
              <label className="rounded block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="shadow rounded-[10px] appearance-none border border rounded w-full h-55 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Masukkan E-mail"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow rounded-[10px] appearance-none border rounded w-full h-55 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  id="password"
                  type="password"
                  placeholder="Masukkan Password"
                />
                
              </div>
              <div className="text-right">
            <a className="text-grey-500 hover:text-red-600 text-sm font-montserrat font-light">
              Lupa Password?
            </a>
          </div>
            </div>
            <div className="text-center">
              <button
                className="shadow rounded-[10px] bg-[#8B6A56] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-[200px]"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
