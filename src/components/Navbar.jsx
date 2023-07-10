import React, { useState } from 'react';
import {logo,lock, hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b sticky top-0 z-10'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-20'>
            
            {/* <img src={logo} className="h-[25px]" /> */}
            <h2 className='font-[Exo] font-bold text-2xl tracking-[6px] text-[#325ccc]'>LOGO</h2>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-8'>
                    <li><a href="#hero" className='hover:text-[#fd3555] hover:font-medium'>Perkenalan</a></li>
                    <li><a href="#blog" className='hover:text-[#fd3555] hover:font-medium'>Blog</a></li>
                    <li><a href="#mitra" className='hover:text-[#fd3555] hover:font-medium'>Mitra</a></li>
                </ul>
            </div>


            {/* <div className='hidden md:flex'>
                <button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                    <img src={lock} />
                    Login
                </button>
                <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
            </div> */}

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'><a href="#hero">Perkenalan</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#blog">Blog</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#mitra">Mitra</a></li>
                    {/* <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                         <img src={lock} />
                         Login
                        </button>
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
                    </div> */}
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar