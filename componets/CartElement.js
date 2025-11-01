import React from 'react'


export const CartElement = ({ ProductImage, ProductName, ProductPrice, onRemove }) => {


  return (
    <div className='w-full md:w-[40rem]'>
      <div className='flex flex-col md:flex-row gap-4 bg-pink-100 py-2 px-4 mt-2 rounded-2xl'>

        {/* Image */}
        <div className='flex justify-center md:h-60 md:w-1/2 h-40 w-full'>
          <img className='object-contain max-h-full max-w-full' src={ProductImage} alt={ProductName} />
        </div>

        {/* Product info */}
        <div className='flex flex-col justify-between mt-2 md:mt-0 gap-3 w-full'>
          <div>
            <h1 className='text-black font-extrabold text-2xl md:text-4xl break-words'>{ProductName}</h1>
            <h1 className='text-black font-bold text-lg'>Quantity : 1</h1>
            <h1 className='text-black font-bold text-lg bg-green-200 w-fit px-2'>Price : ₹{ProductPrice}</h1>
          </div>

          {/* Buttons */}
          <div className='flex gap-4 justify-end mt-3 flex-wrap'>
            <button className='bg-green-600 cursor-pointer font-bold text-lg md:text-xl py-1 px-3 rounded-2xl tracking-wide text-white'>Buy</button>
            <button onClick={onRemove} className='bg-slate-600 font-bold cursor-pointer text-lg md:text-xl py-1 px-3 rounded-2xl tracking-wide text-white'>Remove</button>
          </div>
        </div>

      </div>
    </div>

  )
}
