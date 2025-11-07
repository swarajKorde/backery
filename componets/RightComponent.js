"use client"
import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { CartData } from '@/context/UseDataContext';

import { InfoBox } from './InfoBox';
import Link from 'next/link';

const RightComponent = () => {
  const {cart}=useContext(CartData)
  let number=cart.length
  console.log("the cart is",number)
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='flex flex-col items-center justify-start gap-6 w-full max-w-sm lg:max-w-md lg:w-96 h-full p-4'>
        {/* Top Icons */}
        <div className='flex justify-between w-full px-2'>
          <FaSearch className='text-black text-3xl sm:text-4xl' />


          <div className='relative'>
             <Link href="/cart">
            {number>0 &&
             <h1 className='bg-red-500 text-center rounded-full absolute  left-4 -top-2 w-6 h-6 text-white font-bold'>{number}</h1>}
           
           
              <TiShoppingCart className='text-black text-3xl sm:text-4xl' />
            </Link>
          </div>
          <GiHamburgerMenu className='text-black text-3xl sm:text-4xl' />

        </div>

        {/* Logo */}
        <div className='w-3/4 sm:w-2/3 mx-auto hidden md:block'>
          <img className='w-full h-auto mix-blend-darken' src="logo.jpeg" alt="Logo" />
        </div>

        {/* InfoBox */}
        <div className='relative w-full overflow-hid'>
          <InfoBox />
        </div>
      </div>
    </div>
  )
}

export default RightComponent
