import React from 'react'
import About from '../assets/CardsSection/About.jpg'

const AboutUs = () => {
  return (
    <div className='px-3 md:px-6 mt-6'>

      <div className='rounded-2xl overflow-hidden'>

        <div className='relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh]'>

          <img 
            src={About} 
            alt="" 
            className='w-full h-full object-cover'
          />

          <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px]'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10'>

            <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white max-w-3xl leading-tight mb-4 md:mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi commodi amet in.
            </h1>

            <p className='text-xs sm:text-sm md:text-base text-gray-300 max-w-xl md:max-w-2xl mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque magnam.
            </p>

            <button className='border border-white py-2 px-6 md:px-8 rounded-full text-white text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300'>
              Summary
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutUs