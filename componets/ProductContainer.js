"use client";
import React from "react";
import { PiCirclesFour } from "react-icons/pi";
import { Product } from "./Product";

const ProductContainer = () => {
  let products = [
  {
    name: "Chocolate Pastry",
    price: 45,
    img: "https://i.pinimg.com/1200x/07/13/10/071310ba8a86e80deb421c5dacb8aa07.jpg"
  },
  {
    name: "Black Forest Cake",
    price: 350,
    img: "https://i.pinimg.com/736x/cd/40/d0/cd40d0c94ae61117bc87b6c736e4c2b0.jpg"
  },
  {
    name: "Vanilla Pastry",
    price: 40,
    img: "https://i.pinimg.com/736x/f2/64/0d/f2640d96dbd2b03f83d7410ac417123f.jpg"
  },
  {
    name: "Donut",
    price: 55,
    img: "https://i.pinimg.com/736x/70/bc/42/70bc42652691d9dc2d04b6a0a3c38be9.jpg"
  },
  {
    name: "Cream Roll",
    price: 25,
    img: "https://i.pinimg.com/1200x/ba/70/26/ba702622df5d9ffed06d231b074cdd63.jpg"
  },
  {
    name: "Kaju Slice Cake",
    price: 60,
    img: "https://i.pinimg.com/736x/17/48/31/17483155b8d127e8602091d52874952d.jpg"
  }
];

  return (
    <div className="p-4 md:p-0 ">
      {/* Header */}
      <div className="flex items-center  gap-2 mb-3">
        <PiCirclesFour className="text-black text-2xl" />
        <h2 className="font-bold text-md md:text-xl tracking-wide text-black">Product</h2>
      </div>
      <div className="flex gap-4 md:gap-20 flex-wrap md:justify- ">
        {products.map((p,i)=>
          <Product key={i} sourceImg={p.img} ProductName={p.name} Price={p.price}/>
        )}
  
      </div>

    </div>
  );
};

export default ProductContainer;
