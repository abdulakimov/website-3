import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TRIPLE A</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus fuga perspiciatis vitae beatae iure, consequatur aliquid aspernatur asperiores magnam fugit deleniti, quod laudantium ut dolorem consectetur ea cumque voluptas.</p>
        <div className='flex justify-between md:w-[75%] my-6 '>
            <a href="#"><FaFacebookSquare size={30} className='hover:scale-150 duration-300'/></a>
            <a href="#"><FaInstagramSquare size={30} className='hover:scale-150 duration-300'/></a>
            <a href="#"><FaTwitterSquare size={30} className='hover:scale-150 duration-300'/></a>
            <a href="#"><FaGithubSquare size={30} className='hover:scale-150 duration-300'/></a>
            <a href="#"><FaDribbbleSquare size={30} className='hover:scale-150 duration-300'/></a>
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Analytics</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Marketing</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Commerce</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Insights</a></li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Pricing</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Documenting</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Guides</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">API status</a></li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">About</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Blog</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Jobs</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Prees</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Careers</a></li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Calaim</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Policy</a></li>
                    <li className='py-2 text-sm'><a className='hover:text-[#00df9a]' href="#">Term</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer