import React from 'react'
import HomeImage from '../assets/CardsSection/Home.jpg'
      
const Home = () => {
  return (
    <div className='px-3 md:px-6 mt-4'>

      <div className='rounded-2xl overflow-hidden'>

        <div className='relative w-full h-[70vh] md:h-[85vh]'>

          <img 
            src={HomeImage} 
            alt="" 
            className='w-full h-full object-cover'
          />

          <div className='absolute inset-0 bg-black/60'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10'>

            <h1 className='text-xs md:text-sm tracking-widest uppercase text-gray-300 mb-3'>
              Lorem ipsum dolor
            </h1>

            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight'>
              Lorem ipsum dolor sit amet conse <br className='hidden sm:block' />
              Lorem ipsum dolor sit.
            </h1>

            <p className='text-xs sm:text-sm md:text-base text-gray-300 mt-4 max-w-xl md:max-w-2xl leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in deleniti ipsam doloribus, eaque reprehenderit.
            </p>

            <button className='mt-6 md:mt-8 border border-white py-2 px-6 md:px-8 rounded-full text-white text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300'>
              Subscribe
            </button>

          </div>
        </div>

      </div>
       
    </div>
  )
}

export default Home