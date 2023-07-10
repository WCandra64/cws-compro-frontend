import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Mitra = () => {
  return (
    <div className='w-full bg-white py-20 bg-[#11aaff]/[.1] scroll-p-4' id='mitra'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#325ccc]'>Mitra</h1>
            <p className='text-center  text-[#325ccc] text-xl'>Mitra-mitra yang telah bekerja sama dengan kami.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={companyLogo1} />
                  <img src={companyLogo2} />
                  <img src={companyLogo3} />
                  <img src={companyLogo4} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Mitra