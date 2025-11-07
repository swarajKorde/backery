import React from 'react'

export const Product = ({sourceImg,ProductName,Price}) => {
    return (
        <div className='hover:scale-110'>

            {/* Card (Vertical Layout) */}
            <div className="bg-white p-3 rounded-2xl shadow flex flex-col items-center gap-3 w-fit">

                {/* Image */}
                <div className="h-36 w-36 md:h-50 md:w-50 rounded-xl overflow-hidden border">
                    <img
                        src={sourceImg}
                        alt="product"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                {/* Info */}
                <div className="text-center flex flex-col gap-1">
                    <h2 className="font-bold text-md text-black">{ProductName}</h2>

                    <p className="font-bold text-sm text-black">
                        ₹{Price} <span className="font-normal text-gray-600">/ piece</span>
                    </p>

                    <button className="mt-1 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-lg active:scale-95 transition">
                        buy
                    </button>
                </div>


            </div>
        </div>
    )
}
