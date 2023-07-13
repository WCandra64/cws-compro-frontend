import React from 'react'
import Card from './Card'
import  {BsChevronBarRight} from 'react-icons/bs'
import { blog } from '../data/Artikel';

const Blog = () => {

  return (
    <div className='w-full pb-16 px-20 border-2' id='blog'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
          <div className='flex grid grid-cols-2 relative'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'><span className='text-[#11aaff]'>Artikel</span></h1>
              <p className='text-[#6D737A]'>Baca artikel terbaru kami.</p>
            </div>
            <div className='absolute right-0 bottom-0 rounded-md bg-[#11aaff] hover:bg-[#325ccc] hover:drop-shadow-[1px_4px_4px_rgba(0,0,0,0.3)] hover:cursor-pointer py-2 px-6' onClick={() => window.location.href = "#"}>
              <span className='text-center text-white font-medium '>Artikel Lainnya</span>
            </div>
          </div>
            
            <div className='flex grid grid-cols-3'>
              {blog.slice(-3).toReversed().map((artikel, i) => (
                  <div key={i} className='hover:cursor-pointer'>
                    <Card artikel={artikel} />
                  </div>
                )
              )}
              {/* <div className='hover:cursor-pointer absolute right-[-3rem] h-full w-[12vw] more-background drop-shadow hover:drop-shadow-lg text-slate-700 hover:text-[#325ccc]' onClick={() => window.location.href = "#"}>
                <div className='absolute top-[35%] w-full'>
                  <BsChevronBarRight className='m-auto text-6xl'/>
                  <h1 className='pt-3 text-center text-sm mx-2 more-text'>Temukan artikel lainnya..</h1>
                </div>
              </div> */}
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