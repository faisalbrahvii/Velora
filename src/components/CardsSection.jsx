import React from 'react'
import CS from '../assets/CardsSection/CS.jpg'

const CardsSection = () => {
  return (
    <div className='bg-black/5 py-12 px-4 md:px-10'>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16'>

        <div className='md:px-10'>
          <h1 className='text-2xl md:text-3xl font-bold text-black leading-snug'>
            Lorem ipsum dolor sit amet <br className='hidden sm:block' />
            consectetur adipisicing.
          </h1>

          <p className='mt-5 text-sm md:text-base text-gray-600 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis dicta ullam molestias perferendis veritatis possimus animi ea quod qui voluptatibus magni.
          </p>

          <div className='flex flex-wrap items-center gap-4 mt-8'>
            <button className='border py-2 px-6 rounded-full bg-black text-white text-sm hover:bg-black/70 transition'>
              See More
            </button>

            <button className='py-2 px-6 rounded-full bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300 transition'>
              More About Us
            </button>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl'>
          <img 
            src={CS} 
            alt="" 
            className='w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl hover:scale-105 transition duration-500'
          />
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>

        <div className='overflow-hidden rounded-2xl md:order-1'>
          <img 
            src={CS} 
            alt="" 
            className='w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl hover:scale-105 transition duration-500'
          />
        </div>

        <div className='md:px-10 md:order-2'>
          <h1 className='text-2xl md:text-3xl font-bold text-black leading-snug'>
            Lorem ipsum dolor sit amet <br className='hidden sm:block' />
            consectetur adipisicing.
          </h1>

          <p className='mt-5 text-sm md:text-base text-gray-600 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis dicta ullam molestias perferendis veritatis possimus animi ea quod qui voluptatibus magni.
          </p>

          <div className='flex flex-wrap items-center gap-4 mt-8'>
            <button className='border py-2 px-6 rounded-full bg-black text-white text-sm hover:bg-black/70 transition'>
              See More
            </button>

            <button className='py-2 px-6 rounded-full bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300 transition'>
              More About Us
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardsSection