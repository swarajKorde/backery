import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { InfoBox } from './InfoBox';
import Link from 'next/link';

const RightComponent = () => {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='flex flex-col items-center justify-start gap-6 w-full max-w-sm lg:max-w-md lg:w-96 h-full p-4'>
        {/* Top Icons */}
        <div className='flex justify-between w-full px-2'>
          <FaSearch className='text-black text-3xl sm:text-4xl' />
          <Link href="/cart">
            <GiHamburgerMenu className='text-black text-3xl sm:text-4xl' />
          </Link>
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
