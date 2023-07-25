import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';
import { mitra } from '../data/Mitra';

const Mitra = () => {
  return (
    <div className='w-full bg-white py-20 bg-[#cfe8ff] scroll-p-4' id='mitra'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-3xl font-bold'>Our Partners</h1>
            {/* <p className='text-center  text-[#325ccc] text-xl'>Mitra-mitra yang telah bekerja sama dengan kami.</p> */}
            <div className='flex justify-center py-8 gap-8 flex-wrap'>
                {/* <div className='grid xl:grid-cols-7 grid-cols-4 gap-4 place-items-center'> */}
                  {mitra.map((logo, i) => (
                    <div key={i}>
                      <img className='py-2' alt={logo.alt} src={logo.img} />
                    </div>
                  ))}
            </div>
        
        </div>

    </div>
  )
}

export default Mitra