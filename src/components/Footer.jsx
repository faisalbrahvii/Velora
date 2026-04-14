import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-black text-white px-5 md:px-12 py-12 mt-10'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>

        <div>
          <p className='text-xs uppercase tracking-widest text-gray-400'>
            Lorem, ipsum.
          </p>
          <h1 className='text-2xl font-bold mt-2'>Velora</h1>
        </div>

        <div>
          <h2 className='text-sm font-semibold mb-4 text-gray-300'>Quick Links</h2>
          <ul className='space-y-2'>
            <li className='text-sm text-gray-400 hover:text-white cursor-pointer'>Home</li>
            <li className='text-sm text-gray-400 hover:text-white cursor-pointer'>Contact</li>
            <li className='text-sm text-gray-400 hover:text-white cursor-pointer'>About</li>
            <li className='text-sm text-gray-400 hover:text-white cursor-pointer'>FAQ</li>
            <li className='text-sm text-gray-400 hover:text-white cursor-pointer'>Factory</li>
          </ul>
        </div>

        <div>
          <h2 className='text-sm font-semibold mb-4 text-gray-300'>About</h2>
          <p className='text-sm text-gray-400 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate dolorum asperiores tempora eaque nobis.
          </p>
        </div>

        <div>
          <h2 className='text-sm font-semibold mb-3 text-gray-300'>
           Velora
          </h2>

          <p className='text-sm text-gray-400 mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className='flex items-center gap-3 border border-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition'>
            More <MdOutlineArrowRightAlt size={20} />
          </button>
        </div>

      </div>

      <div className='border-t border-white/10 mt-10 pt-5 text-center text-xs text-gray-500'>
        © 2026 Your Company. All rights reserved.
      </div>

    </div>
  )
}

export default Footer