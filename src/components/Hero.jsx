import React from 'react'
import {TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-blod md:py-6'>Grow with data</h1>
            <div>
                {/* <p className='md:text-5xl sm:text-4xl text-xl font-blod'>Fast, flexible financing for</p> */}
                <div>
                <TypeAnimation className='md:text-5xl sm:text-4xl text-xl font-blod'
                  sequence={[
                    
                    'Fast, flexible financing for HTML',
                    1000, 
                    'Fast, flexible financing for CSS',
                    1000,
                    'Fast, flexible financing for SASS',
                    1000,
                    'Fast, flexible financing for JS',
                    1000,
                    'Fast, flexible financing for REACT',
                    1000,
                    ]}
                    wrapper="span"
                    speed={150}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </div>  
                <p className='md:text-2xl text-xl font-bold text-gray-500 pt-4 md:pl-6 pl-3'>Monitor your data analytics to increase revenue for HTML, CSS, SASS, JS & REACT platforms </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-110 duration-300'>Get Strated</button>
            </div>
        </div>
    </div>
  )
}

export default Hero