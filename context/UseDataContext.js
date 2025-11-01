"use client"
import React, { createContext, use, useContext, useEffect, useState } from 'react'

export const CartData = createContext()
export const CakeData = createContext()

const UseDataContext = ({ children }) => {
  const cake = [
    {
      title: "Chocolate Cake",
      img: "gptChocolate.png",
      category: "Premium",
      price: 300,
      rating: "4.5"
    },
    {
      title: "Strawberry Cake",
      img: "gptStrawberry.png",
      category: "Premium",
      price: 350,
      rating: "3.5"
    },
    {
      title: "Mango Cake",
      img: "mango.png",
      category: "General",
      price: 150,
      rating: "2.5"
    },
    {
      title: "Chocolate Cake",
      img: "chocolate2.png",
      category: "Mid-Premium",
      price: 250,
      rating: "5"
    }
  ];

  // this will get the data from the slider
  const cakeUrl = cake[0].img
  console.log(cakeUrl)



  const [slideSelect, setSlideSelect] = useState(cake[0].img)
  const [cakeInfo, setCakeInfo] = useState(cake[0])

  console.log(slideSelect)
  const honey = "this is honey here"
  const sunny = "i am sunny and its fine"

  // CartData Provider Information or Variable and Arrays required for the cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartData");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  return (
    <CartData.Provider value={{ cart, setCart, sunny }}>
      <CakeData.Provider value={{ sunny, cake, honey, slideSelect, setSlideSelect, cakeInfo, setCakeInfo }}>
        {children}
      </CakeData.Provider>
    </CartData.Provider>
  )
}

export default UseDataContext