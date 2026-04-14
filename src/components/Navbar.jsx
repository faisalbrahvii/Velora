import React, { useState } from 'react'
import { FaAngleDown, FaSearch, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full shadow-sm'>

      <div className='flex items-center justify-between px-6 py-4'>

        <h1 className='text-2xl font-black'>Velora</h1>

        <ul className='hidden md:flex items-center gap-7 text-sm font-bold'>
          <li className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer'>Home <FaAngleDown /></li>
          <li className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer'>Contact <FaAngleDown /></li>
          <li className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer'>About <FaAngleDown /></li>
          <li className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer'>FAQ <FaAngleDown /></li>
        </ul>

        <div className='hidden md:flex items-center gap-5'>
          <FaSearch className='cursor-pointer hover:text-black/60' />
          <FaUser className='cursor-pointer hover:text-black/60' />
          <button className='border px-6 py-1.5 bg-black text-white text-sm font-bold rounded-full hover:bg-black/70 transition'>
            Subscribe
          </button>
        </div>

        <div className='md:hidden'>
          {menuOpen ? (
            <HiX size={26} onClick={() => setMenuOpen(false)} className='cursor-pointer' />
          ) : (
            <HiMenu size={26} onClick={() => setMenuOpen(true)} className='cursor-pointer' />
          )}
        </div>

      </div>

      {menuOpen && (
        <div className='md:hidden px-6 pb-5 transition-all duration-300'>

          <ul className='flex flex-col gap-4 text-sm font-bold'>
            <li className='flex justify-between items-center text-gray-700'>Home <FaAngleDown /></li>
            <li className='flex justify-between items-center text-gray-700'>Contact <FaAngleDown /></li>
            <li className='flex justify-between items-center text-gray-700'>About <FaAngleDown /></li>
            <li className='flex justify-between items-center text-gray-700'>FAQ <FaAngleDown /></li>
          </ul>

          <div className='flex items-center gap-5 mt-5'>
            <FaSearch />
            <FaUser />
          </div>

          <button className='w-full mt-5 border py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-black/70 transition'>
            Subscribe
          </button>

        </div>
      )}

    </div>
  )
}

export default Navbar