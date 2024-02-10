import React from 'react'

const NewLater = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newslatter and stay up to data.</p>
            </div>
            <div className='my-4'>
                <div >
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 px-6 mx-auto py-3 text-black hover:scale-110 duration-300'>Notify Me</button>
                </div>
            <p>We care about the protection of your data. Read our  <a href="#"><span className='text-[#00df9a]'>Privacy Policy</span></a></p>
            </div>
        </div>
    </div>
  )
}

export default NewLater