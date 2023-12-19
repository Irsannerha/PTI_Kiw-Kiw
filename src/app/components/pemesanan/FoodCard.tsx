import React from "react";
export interface ProductCardComponentProps {
    itemId?: string;
    name?: string;
    price?: number;
    img?: string;
    category?: string;
    // desc?: string;
    onAddToCart: (itemData: { itemId: string; name: string; price: number; img: string }) => void;
}

const FoodCard = ({ itemId = "2", name = "Makanan", price = 10000, img = "", category = "", onAddToCart }: ProductCardComponentProps) => {

    const handleAddToCart = () => {
        const itemData = { itemId, name, price, img };
        console.log(itemData);
        onAddToCart(itemData);
    };

    return (
        <div className="font-bold w-full md:w-[200px] bg-white md:p-5 p-3 flex flex-col rounded-lg gap-1 md:gap-1">
            <img
                src={img}
                alt=""
                className="w-auto h-[80px] md:h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
            />
            <div className="text-xs md:text-sm flex justify-between">
                <h2>{name}</h2>
            </div>
            <div className="text-xs md:text-sm flex justify-between text-[#D2691E]">
                <h2>Rp. {price}</h2>
            </div>
            {/* <p className="text-xs md:text-sm font-normal">{desc.slice(0, 50)}...</p> */}
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                </span>
                <button
                    onClick={handleAddToCart}
                    className="p-1 text-white bg-[#D2691E] hover:bg-[#F0C898] rounded-lg text-xs md:text-sm"
                >
                    Tambah
                </button>
            </div>
        </div>
    );
};

export default FoodCard;