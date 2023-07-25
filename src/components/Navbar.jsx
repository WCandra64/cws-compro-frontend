import React, { useState } from 'react';
import  {BsChevronDown} from 'react-icons/bs'
import {hamburgerMenu, close, logo} from '../assets'  
import { Link } from 'react-router-dom' 

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b-2 sticky top-0 z-10'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-20'>
            
            <img src={logo} className="h-[35px]" />
            {/* <h2 className='font-[Exo] font-bold text-2xl tracking-[6px] text-[#325ccc]'>LOGO</h2> */}
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-8'>
                    <li><Link to="/" className='hover:text-[#fd3555] hover:font-medium'>Beranda</Link></li>
                    <li><Link to="/layanan" className='hover:text-[#fd3555] hover:font-medium'>Layanan</Link></li>
                    <li><Link to="/sertifikasi" className='hover:text-[#fd3555] hover:font-medium flex'>Sertifikasi <BsChevronDown className='ml-2 my-auto text-sm'/> </Link></li>
                    <li><Link to="/tentang" className='hover:text-[#fd3555] hover:font-medium'>Tentang Kami</Link></li>
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
                    <li className='p-4 hover:bg-gray-100'><a href="#hero">Beranda</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#blog">Artikel</a></li>
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