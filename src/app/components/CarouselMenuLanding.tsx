'use client';

import { Carousel } from 'flowbite-react';

function CarouselComponent() {
    const imagesMakanan = [
        "/images/ayamGeprek.png",
        "/images/ayamGeprek.png",
        "/images/ayamGeprek.png",
        "/images/ayamGeprek.png",
        "/images/esTeh.png",
        "/images/esTeh.png",
    ];

    const imagesMinuman = [
        "/images/esTeh.png",
        "/images/esTeh.png",
        "/images/esTeh.png",
        "/images/esTeh.png",
        "/images/ayamGeprek.png",
        "/images/ayamGeprek.png",
    ];
    const chunkSize = 3;

    const chunkedImagesMakanan = Array.from({ length: Math.ceil(imagesMakanan.length / chunkSize) }, (_, index) =>
        imagesMakanan.slice(index * chunkSize, index * chunkSize + chunkSize)
    );

    const chunkedImagesMinuman = Array.from({ length: Math.ceil(imagesMinuman.length / chunkSize) }, (_, index) =>
        imagesMinuman.slice(index * chunkSize, index * chunkSize + chunkSize)
    );

    const titlesMakanan = [
        "Ayam Geprek",
        "Ayam Bakar",
        "Ikan Bakar",
        "Ayam Goreng",
        "Singkong",
        "Gorengan",
    ];

    const titlesMinuman = [
        "Es Teh",
        "Es Jeruk",
        "Jus Apel",
        "Jus Mangga",
        "Jus Markisa",
        "Es Kelapa",
    ];

    return (
        <>
            {/* Mobile */}
            <div className="md:hidden">
                <div className="h-40 w-full m-auto rounded-lg">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Makanan</div>
                    <Carousel pauseOnHover className="w-full h-[80%] p-2 justify-center items-center m-auto">
                        {chunkedImagesMakanan.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full rounded-lg relative overflow-hidden z-0" key={index}>
                                        <div className="rounded-lg duration-200 flex justify-center" data-carousel-item>
                                            <div className="rounded-lg w-[90%] max-w-sm bg-white border z-30 overflow-hidden shadow-xl">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-screen">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-16 rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 text-[12px] font-medium text-black dark:text-white">{titlesMakanan[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="h-40 w-full m-auto rounded-lg">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Minuman</div>
                    <Carousel pauseOnHover className="w-full h-[80%] p-2 justify-center items-center m-auto ">
                        {chunkedImagesMinuman.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full rounded-lg relative overflow-hidden z-0" key={index}>
                                        <div className="rounded-lg duration-200 ease-linear flex justify-center" data-carousel-item>
                                            <div className="rounded-lg w-[90%] max-w-sm bg-white border z-30 overflow-hidden shadow-lg">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-screen">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-16 rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 text-[12px] font-medium text-black dark:text-white">{titlesMinuman[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Tablet */}
            <div className="hidden md:block lg:hidden">
                <div className="h-40 w-full m-auto rounded-lg">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Makanan</div>
                    <Carousel pauseOnHover className="w-full h-[80%] p-2 justify-center items-center m-auto">
                        {chunkedImagesMakanan.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full rounded-lg relative overflow-hidden z-0" key={index}>
                                        <div className="rounded-lg duration-200 ease-linear flex justify-center" data-carousel-item>
                                            <div className="rounded-xl w-[90%] max-w-sm bg-white border z-30 overflow-hidden shadow-xl">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-screen">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-16 rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 text-[16px] font-medium text-black dark:text-white">{titlesMakanan[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="h-40 w-full m-auto rounded-lg">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Minuman</div>
                    <Carousel pauseOnHover className="w-full h-[80%] p-2 justify-center items-center m-auto">
                        {chunkedImagesMinuman.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full rounded-lg relative overflow-hidden z-0" key={index}>
                                        <div className="rounded-xl duration-200 ease-linear flex justify-center" data-carousel-item>
                                            <div className="!rounded-lg w-[90%] max-w-sm bg-white border z-30 overflow-hidden shadow-xl">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-screen">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-16 rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 text-[16px] font-medium text-black dark:text-white">{titlesMinuman[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div></div>

            {/* Komputer */}
            <div className="hidden lg:block">
                <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 w-[80%] m-auto">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Makanan</div>
                    <Carousel pauseOnHover className="w-full h-[80%] pl-10 pr-10 pb-10 justify-center items-center m-auto">
                        {chunkedImagesMakanan.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full relative overflow-hidden z-0" key={index}>
                                        <div className="duration-200 ease-linear flex justify-center" data-carousel-item>
                                            <div className="rounded-xl w-[95%] max-w-sm bg-white border z-30 overflow-hidden shadow-xl">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-[200px]">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-[140px] rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 lg:text-xl md:text-lg sm:text-sm font-medium text-black dark:text-white">{titlesMakanan[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 w-[80%] m-auto -mt-10">
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 xl:text-2xl xl:leading-[3.5rem] flex justify-center items-center text-center mt-5">Minuman</div>
                    <Carousel pauseOnHover className="w-full h-[80%] pl-10 pr-10 pb-10 justify-center items-center m-auto">
                        {chunkedImagesMinuman.map((imageSet, setIndex) => (
                            <div key={setIndex} className="flex">
                                {imageSet.map((image, index) => (
                                    <div className="w-full relative overflow-hidden z-0" key={index}>
                                        <div className="duration-200 ease-linear flex justify-center" data-carousel-item>
                                            <div className="rounded-xl w-[95%] max-w-sm bg-white border z-30 overflow-hidden shadow-xl">
                                                <div className="bg-white rounded-lg flex flex-col items-center justify-content-center m-auto text-center blur-none justify-center h-[200px]">
                                                    <img alt={`carousel-${index + 1 + setIndex * chunkSize}`} className="pt-2 h-[140px] rounded-full shadow-lg" src={image} />
                                                    <h5 className="p-2 lg:text-xl md:text-lg sm:text-sm font-medium text-black dark:text-white">{titlesMinuman[index + setIndex * chunkSize]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CarouselComponent;
