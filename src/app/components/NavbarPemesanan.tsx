import Image from 'next/image'

export default function NavbarPemesanan() {
    return (
        <>
            <div className="bg-[#F8A849] pt-2 pb-3 z-50">
                <Image src="/images/logoNavbar.png" width={80} height={80} className="m-auto items-center justify-center text-center animate-bounce delay-100 transition-all" alt="Logo Kedai Bu Titin" />
                <div className="text-center text-white font--[18px] text-base -mt-3">Kedai Bu Titin</div>
            </div>
        </>
    )
}
