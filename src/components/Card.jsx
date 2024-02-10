import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="photo" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='tect-center text-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage </p>
                <p className='py-2 border-b mx-8'>1 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 px-6 mx-auto py-3 text-black hover:scale-110 duration-300'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="photo" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='tect-center text-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage </p>
                <p className='py-2 border-b mx-8'>3 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='bg-black  w-[200px] rounded-md font-medium  my-6 px-6 mx-auto py-3 text-white hover:scale-110 duration-300'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="photo" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='tect-center text-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage </p>
                <p className='py-2 border-b mx-8'>10 Garanted User</p>
                <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 px-6 mx-auto py-3 text-black hover:scale-110 duration-300'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card