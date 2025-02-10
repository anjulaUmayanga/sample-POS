import React from "react";

export default function Items({ addToBill }) {
    const items = [
        { id: 1, img: "/Items/1.jpg", price: 10, name: "chi-Dev" },
        { id: 2, img: "/Items/2.jpg", price: 15, name: "Burrger1" },
        { id: 3, img: "/Items/3.jpg", price: 20, name: "Burrger2" },
        { id: 4, img: "/Items/4.jpg", price: 12, name: "Burrger3" },
        { id: 5, img: "/Items/5.jpg", price: 8, name: "Burrger4" },
        { id: 6, img: "/Items/6.jpg", price: 18, name: "Burrger5" },
        { id: 7, img: "/Items/7.jpg", price: 25, name: "Chips" },
        { id: 8, img: "/Items/8.jpg", price: 14, name: "SubM-sm" },
        { id: 9, img: "/Items/9.jpg", price: 30, name: "SubM-lg" },
        { id: 10, img: "/Items/10.jpg", price: 22, name: "SubM-reg" },
        { id: 11, img: "/Items/11.jpg", price: 4, name: "Egg-OM" },
        { id: 12, img: "/Items/12.jpg", price: 9, name: "Orange-j" },
    ];

    return (
        <div className="text-black mt-[1px] p-2">
            <div className="grid grid-cols-6 gap-[1px]">
                {items.map((item) => (
                    <img
                        key={item.id}
                        src={item.img}
                        alt={`Item ${item.id}`}
                        className="w-full cursor-pointer hover:opacity-80 h-20"
                        onClick={() => addToBill(item)} 
                    />
                ))}
            </div>
        </div>
    );
}
