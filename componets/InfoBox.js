"use client"
import React, { useContext } from 'react'
import { HiOutlineThumbUp } from "react-icons/hi";
import { MdOutlineThumbDown } from "react-icons/md";
import { CakeData } from '@/context/UseDataContext';

export const InfoBox = () => {
const {cakeInfo}= useContext(CakeData)
// console.log(data)
  return (
    <div className='bg-second rounded-4xl h-fit md:w-96 flex flex-col gap-5 px-10 py-4 items-cente'>
            {/* wrapper above one */}
            <div>
              {/* first */}
              <div className='flex gap-20 md:gap-30  '>
                  <h1 className='text-xl text-black tracking-wider  underline-offset-1'>Overview</h1>
                  <h1 className='text-xl text-black tracking-wider '>Ingredients</h1>
              </div>
            </div>
            <div className='bg-yellow-300 w-15  h-20 rounded-xl mt-10'>
                  {/* 2          */}
                  <h1 className='relative -top-6 text-black font-bold'>Rating</h1>
                  <h1 className='text-black text-6xl font-extrabold relative  left-2'>{cakeInfo.rating}</h1>
            </div>
            <div>
              {/* 3 */}
              <h1 className='font-bold text-4xl text-black'>{cakeInfo.title}</h1>
              <h1 className='text-black'>Quality : {cakeInfo.category}</h1>
            </div>
            <div>
              {/* 4 */}
                <h1 className='text-justify text-black font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex incidunt libero qui distinctio inventore neque suscipit dolor placeat quas facilis,</h1>
            </div>
            <div>
              {/* rating */}
              <div className='flex text-2xl gap-6 text-black  '>
                <HiOutlineThumbUp className='cursor-pointer' />
                <MdOutlineThumbDown className='cursor-pointer' />
              </div>
            </div>
          </div>
  )
}
