"use client"
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react"
import { CakeData, CartData } from '@/context/UseDataContext';

const Upper = () => {
    const { slideSelect, cakeInfo } = useContext(CakeData)
    const { cart, setCart } = useContext(CartData)

    function handleCart() {
        const updatedCart = [...cart, cakeInfo]
        setCart(updatedCart)
        localStorage.setItem('cartData', JSON.stringify(updatedCart))
    }

    return (
        <div className='flex flex-col md:flex-row item md:items-start justify-center gap-6 md:gap-10 p-4 bg-amber-5 relative'>

            {/* Cake image */}
            <div className='w-full  h-64 md:h-[500px] md:w-[600px] relative'>
                <AnimatePresence>
                    <motion.img
                        key={slideSelect}
                        src={slideSelect}
                        alt={cakeInfo.title}
                        className='w-full h-64 md:h-[500px] object-contain'
                        initial={{ opacity: 0, y: -50, rotate: -10 }}
                        animate={{ opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 20, damping: 5 } }}
                    />
                </AnimatePresence>
            </div>

            {/* Info & buttons */}
            <div className='flex flex-col justify-start items-start md:items-start w-ful md:w-[300px] '>
                <div className='hidden md:block'>
                    <h1 className='text-center font-bold tracking-wider text-black text-lg'>Currently Serving</h1>
                    <div className='flex justify-center items-center gap-4  bg-purple-500 px-3 py-1 rounded-lg'>
                        <h1 className='font-extrabold text-sm md:text-base'>AKOT</h1>
                        <h1 className='font-extrabold text-sm md:text-base'> PARATWADA</h1>
                        <h1 className='font-extrabold text-sm md:text-base '> MORSHI</h1>
                        <h1 className='font-extrabold text-sm md:text-base'> DARYAPUR</h1>
                    </div>

                    {/* Logo */}
                    <img className='mix-blend-multiply  object-contain' src="logo.jpeg" alt="logo" />
                </div>
                {/* Locations */}

                <div className='text-black flex flex-col '>
                        {/* Category */}
                <h3 className='tracking-wider text-sm md:text-base'>Quality : {cakeInfo.category}</h3>

                {/* Title */}
                <h1 className='text-3xl md:text-6xl font-extrabold break-words'>{cakeInfo.title}</h1>

                {/* Order button */}
                <motion.div
                    whileHover={{ rotate: 2, scale: 1.05 }}
                    className='flex items-center lg:rounded-3xl w-fit mt-3 px-4 py-2 cursor-pointer bg-amber-300 hover:bg-amber-400'
                    onClick={handleCart}
                >
                    <FaCartArrowDown className='mx-2 text-2xl md:text-3xl' />
                    <h1 className='font-bold text-sm md:text-lg'>Add To Cart</h1>
                </motion.div>
                </div>
                

            </div>

        </div>
    )
}

export default Upper
