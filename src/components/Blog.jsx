import React from 'react'
import Card from './Card'
import { blog } from '../data/Artikel';

const Blog = () => {

  return (
    <div className='w-full pb-16 px-20 border-2' id='blog'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'><span className='text-[#11aaff]'>Artikel</span></h1>
              <p className='text-[#6D737A]'>Baca artikel terbaru kami.</p>
            </div>
            
            <div className='flex grid grid-cols-3 relative mr-12'>
              {blog.slice(-3).map((artikel, i) => (
                  <div key={i} className='hover:cursor-pointer'>
                    <Card artikel={artikel} />
                  </div>
                )
              )}
              <div className='hover:cursor-pointer absolute right-[-3rem] h-[60%] top-[20%] bg-slate-400/[.9] w-[10vw] p-2 rounded-md' onClick={() => window.location.href = "#"}>
                <h1 className='top-[45%] font-bold text-md text-white'>Temukan artikel lainnya..</h1>
              </div>
            </div>
            

            {/* {[...Array(blog)].map(
              (artikel, i) => (
                <div key={i}>
                  <Card artikel={artikel} />
                </div>
              )
            )} */}

            {/* <Slider {...settings} className='px-5 z-2'>
              {blog.map((artikel,i)=>
                <div key={i}>
                  <Card artikel={artikel} />
                </div> ) }
              

            </Slider> */}
            
        </div>

    </div>
  )
}

export default Blog