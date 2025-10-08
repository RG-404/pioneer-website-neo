import React from 'react'
import Button from './Button'
import logo from "../../public/Frame 2.png"
import Image from "next/image"
const Navbar = () => {
  return (
    // <div className='flex justify-between items-center px-12  border-b-2 border-dashed border-gray-200  py-6      '>
     
    //   <div className='relative w-24 '>
    //     <div className='aspect-square w-28 absolute top-[-15px] '>
    //     <Image src={logo} height={100} width={100} alt='logo' />
    //   </div>
    //   </div>
      
    //   <div className=''>
    //     <ul className='flex items-center justify-center gap-[60.92px] text-base '>
    //         <li>Home</li>
    //         <li>Softwares</li>
    //         <li>Tutorials</li>
    //         <li>Support</li>
    //     </ul>
    //   </div>
    //   <div className='bg-[#3B3B3B] text-[#FFFFFF] border-[1px] px-10 rounded-3xl py-2'><Button  name="Get Started"/></div>
    // </div>
    <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-12 border-b-2 border-dashed border-gray-200 py-4 sm:py-6">
  
  {/* Logo Section */}
  <div className="relative w-16 sm:w-20 md:w-24">
    <div className="aspect-square w-20 sm:w-24 md:w-28 absolute top-[-10px] sm:top-[-15px]">
      <Image src={logo} height={100} width={100} alt="logo" />
    </div>
  </div>

  {/* Menu Section */}
  <div className="hidden md:block">
    <ul className="flex items-center justify-center gap-6 sm:gap-10 md:gap-[60px] text-sm sm:text-base">
      <li className="cursor-pointer hover:text-gray-500">Home</li>
      <li className="cursor-pointer hover:text-gray-500">Softwares</li>
      <li className="cursor-pointer hover:text-gray-500">Tutorials</li>
      <li className="cursor-pointer hover:text-gray-500">Support</li>
    </ul>
  </div>

  {/* Button */}
  <div className="mt-4 md:mt-0 bg-[#3B3B3B] text-white border px-6 sm:px-8 md:px-10 rounded-3xl py-2 text-sm sm:text-base">
    <Button name="Get Started" />
  </div>

</div>

  )
}

export default Navbar
