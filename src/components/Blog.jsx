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
            
            <div className='flex grid grid-cols-4'>
              {blog.slice(-3).map((artikel, i) => (
                  <div key={i} className='hover:cursor-pointer'>
                    <Card artikel={artikel} />
                  </div>
                )
              )}
              <div className='relative' onClick={() => window.location.href = "#"}>
                <p className='absolute top-[45%] hover:cursor-pointer'>Artikel Lainnya..</p>
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