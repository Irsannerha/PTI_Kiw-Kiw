"use client"
import DashboardSideBar from "@/app/components/DashboardSideBar"
import { useState, useEffect } from 'react';

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
        <div style={{ marginLeft: '280px', padding: '20px', marginTop: '10px' }} className="w-[77%]">
          <div className="flex justify-between">
            <div className="text-start justify-start items-start">
              <div className="m-4 w-72 bg-[#FFE4C4] shadow-lg rounded-lg">
                <div className="flex p-3">
                  <div className="flex flex-col justify-center">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.5833 8.3335H10.4167C8.11548 8.3335 6.25 10.199 6.25 12.5002V41.6668C6.25 43.968 8.11548 45.8335 10.4167 45.8335H39.5833C41.8845 45.8335 43.75 43.968 43.75 41.6668V12.5002C43.75 10.199 41.8845 8.3335 39.5833 8.3335Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M33.3335 4.1665V12.4998" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.6665 4.1665V12.4998" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.25 20.8335H43.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                  <div className="w-full flex justify-end items-center gap-6">
                    <div className="">{formattedDate}</div>
                    <div className="">{formattedTime}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end justify-end items-end">
              <div className="m-4 w-72 bg-[#FFE4C4] shadow-lg rounded-lg">
                <div className="flex p-3">
                  <div className="w-full flex flex-col justify-center">
                    Selamat Datang, Admin
                  </div>
                  <div className="w-full flex justify-end items-end">
                    <svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5002 20.5C20.5109 20.5 22.4766 19.9135 24.1485 18.8147C25.8204 17.7159 27.1234 16.1541 27.8929 14.3268C28.6624 12.4996 28.8638 10.4889 28.4715 8.5491C28.0792 6.60929 27.1109 4.82746 25.6891 3.42894C24.2672 2.03041 22.4557 1.078 20.4836 0.692152C18.5114 0.306299 16.4673 0.504333 14.6095 1.26121C12.7518 2.01809 11.164 3.29981 10.0469 4.9443C8.92976 6.58879 8.3335 8.52219 8.3335 10.5C8.3335 13.1522 9.40462 15.6957 11.3112 17.5711C13.2179 19.4464 15.8038 20.5 18.5002 20.5ZM18.5002 5.5C19.5056 5.5 20.4884 5.79325 21.3243 6.34266C22.1603 6.89206 22.8118 7.67296 23.1966 8.58659C23.5813 9.50022 23.682 10.5056 23.4858 11.4755C23.2897 12.4454 22.8055 13.3363 22.0946 14.0355C21.3837 14.7348 20.4779 15.211 19.4919 15.4039C18.5058 15.5969 17.4837 15.4978 16.5549 15.1194C15.626 14.741 14.8321 14.1001 14.2735 13.2779C13.715 12.4556 13.4168 11.4889 13.4168 10.5C13.4168 9.17392 13.9524 7.90215 14.9057 6.96447C15.859 6.02679 17.152 5.5 18.5002 5.5Z" fill="black" />
                      <path d="M18.5002 25.5C13.7815 25.5 9.25614 27.3437 5.91955 30.6256C2.58297 33.9075 0.708496 38.3587 0.708496 43C0.708496 43.663 0.976279 44.2989 1.45293 44.7678C1.92959 45.2366 2.57607 45.5 3.25016 45.5C3.92425 45.5 4.57074 45.2366 5.04739 44.7678C5.52405 44.2989 5.79183 43.663 5.79183 43C5.79183 39.6848 7.13074 36.5054 9.51401 34.1612C11.8973 31.817 15.1297 30.5 18.5002 30.5C21.8706 30.5 25.103 31.817 27.4863 34.1612C29.8696 36.5054 31.2085 39.6848 31.2085 43C31.2085 43.663 31.4763 44.2989 31.9529 44.7678C32.4296 45.2366 33.0761 45.5 33.7502 45.5C34.4243 45.5 35.0707 45.2366 35.5474 44.7678C36.024 44.2989 36.2918 43.663 36.2918 43C36.2918 38.3587 34.4174 33.9075 31.0808 30.6256C27.7442 27.3437 23.2188 25.5 18.5002 25.5Z" fill="black" />
                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-4 w-full text-[32px]">Selamat Datang di Dashboard</div>
          <div className="flex justify-center">
            <div className="m-4 w-72 bg-[#BA937C] shadow-lg rounded-lg">
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
            <div className="m-4 w-72 bg-[#BA937C] shadow-lg rounded-lg">
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
          </div>
          <div className="flex justify-center">
            <div className="m-4 w-72 bg-[#BA937C] shadow-lg rounded-lg">
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
            <div className="m-4 w-72 bg-[#BA937C] shadow-lg rounded-lg">
              <div className="rounded-t-lg text-xl p-3x pl-4 justify-center items-center flex">
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
          </div>
        </div>
      </div>

    </>
  )
}


