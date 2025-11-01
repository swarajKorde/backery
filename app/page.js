import Image from "next/image";
import Upper from "../componets/Upper";
import VarietySlider from "@/componets/VarietySlider";
import RightComponent from "@/componets/RightComponent";

export default function Home() {
  return (
    <div className="bg-prime min-h-screen w-screen flex flex-col md:flex-row justify-center md:justify-evenly items-start md:items-center gap-6 md:gap-4 lg:gap-8 px-2 md:p-4">
      
      {/* Left column */}
      <div className="flex flex-col  justify-center  md:gap-8 w-full md:w-2/3 lg:w-1/2">
      {/* on for the mobile div */}
         <div className='block md:hidden'>
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
        <Upper />
        <VarietySlider />
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-start">
        <RightComponent />
      </div>

    </div>
  );
}
