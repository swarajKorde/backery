"use client"
import { CartElement } from '@/componets/CartElement'
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { CartData } from '@/context/UseDataContext'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
const page = () => {
  const { cart, setCart } = useContext(CartData)
  // console.log(cart.length)


  // logic for cart total
  let len = cart.length

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const delivery = 20;
  const discount = 3;
  const finalTotal = totalPrice + delivery - discount;
  const formattedFinal = finalTotal.toLocaleString('en-IN');
  //  const formattedTotal = totalPrice.toLocaleString('en-IN');

  // remove item from the cart
  function removeFromCart(indexToRemove) {
    // removing it using index becaue there is a possibily of two or multiple cakes having the same title
    // second argument of the filter is index that what first isn
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart)
    localStorage.setItem('cartData', JSON.stringify(updatedCart))
  }


  return (
    // main wrapper for the car page
    <div className='h-screen w-screen bg-prime flex flex-col md:flex-row md:justify-center md:items-center md:gap-4 p-4'>
      {/* Header */}
      <div >
        <div className='flex justify-around '>
          <div className='flex sticky top-0 w-full md:w-auto z-10'>
            <Link href="/"> <FaArrowLeft className='mt-4 md:mt-10 text-3xl mx-2 text-black' /> </Link>
            {/* <h1 className='text-black font-bold text-2xl mt-4 md:mt-10'>Home</h1> */}
          </div>
          <div className='flex justify-center items-center sticky top-0 w-full md:w-auto z-10'>
            <FaCartArrowDown className='mt-4 md:mt-10 text-3xl mx-2 text-black' />
            <h1 className='text-black font-bold text-2xl mt-4 md:mt-10'>Your Cart</h1>
          </div>
        </div>
        {/* Cart items */}



        {cart && cart.length > 0 ? (
          <div className='flex-1 flex flex-col items-start gap-4 mt-4 md:mt-10 overflow-y-auto pr-2 md:pr-4 h-[60vh] md:h-[80vh] red-scrollbar w-full md:w-[100%]'>
            {cart.map((item, index) => (
              <CartElement
                key={index}
                ProductImage={item.img}
                ProductName={item.title}
                ProductPrice={item.price}
                onRemove={() => removeFromCart(index)}
              />
            ))}
          </div>
        ) : (
          <p className='text-gray-500 text-lg text-center mt-6 md:mt-10'>Your cart is empty.</p>
        )}

      </div>



      {/* Side summary box */}
      {cart&&cart.length>0&&(
        <div className='w-full md:w-96 bg-red-300 mt-4 md:mt-25 rounded-3xl py-4 px-3 sticky top-5 self-start'>
        <h1 className='font-bold text-3xl text-white text-center'>Your Items</h1>
        <div className='px-5 mt-6 flex flex-col gap-4'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-black text-xl'>Total purchase</h1>
            <h1 className='font-bold text-black text-xl'>{cart.length}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-bold text-black text-xl'>Discount</h1>
            <h1 className='font-bold text-black text-xl'>₹{cart.length == 0 ? 0 : discount}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-bold text-black text-xl'>Delivery Charges</h1>
            <h1 className='font-bold text-black text-xl'>₹{cart.length == 0 ? 0 : delivery}</h1>
          </div>
          <div className='flex justify-between mt-4 border-t pt-2'>
            <h1 className='font-bold text-black text-xl'>Total Price</h1>
            <h1 className='font-bold text-black text-xl'>₹{cart.length == 0 ? 0 : formattedFinal}</h1>
          </div>
        </div>
      </div>
      )}
      
    </div>

  )
}


export default page