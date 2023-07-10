import React from 'react'
// import { logo } from '../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24 px-20'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-3 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                {/* <img src={logo} className="h-[25px]" /> */}
                <h2 className='font-[Exo] font-bold text-2xl tracking-[6px] text-[#325ccc]'>LOGO</h2>
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#6D737A]'>Call : +6281234567890</h3>
                <h3 className='py-2 text-[#6D737A]'>Jalan Hayam Wuruk 135<br></br>Denpasar</h3>
                <h3 className='py-2 text-[#363A3D]'>Email: admin@cws.com</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color:'#4DC39E'}} /></div>
                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Beranda</li>
                    <li className='py-2'>Artikel</li>
                    <li className='py-2'>Mitra</li>
                </ul>
            </div>

            {/* <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Design</li>
                    <li className='py-2'>Development</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Business</li>
                    <li className='py-2'>Lifestyle</li>
                    <li className='py-2'>Photography</li>
                    <li className='py-2'>Music</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                <form className='py-4'>
                    <input 
                        className='bg-[#F2F3F4] p-4 w-full rounded' 
                        placeholder='Email here' 
                    />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button>

                </form>


            </div> */}
        
        </div>
    </div>
  )
}

export default Footer