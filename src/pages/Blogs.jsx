import React from 'react';
// import './App.css'
import { blog } from '../data/Artikel';

const Blogs = () => {
  return (
    <div className='py-[4vh]'>
      <div className='py-[20vh] text-center'>
        <h1 className='pb-2 font-bold text-2xl text-[#11aaff]'>Blog</h1>
        <span className='text-md'>Baca artikel-artikel terbaru kami.</span>
      </div>
      <div className=''>
        {blog.toReversed().map((artikel, i) => (
            <div key={i} className='flex m-auto max-w-[80vw] text-ellipsis my-6 border z-2 bg-slate-50 hover:bg-white drop-shadow-md hover:drop-shadow-xl rounded-2xl hover:cursor-pointer '>
              {/* <Card artikel={artikel} /> */}
                <img className='w-[50%]' src={artikel.linkImg} alt={artikel.title} />
                <div className='w-[50%] py-4 px-5'>
                  <div className='pb-1'>
                      <h1 className='truncate text-lg'>{artikel.title}</h1>
                      <p className='text-[#325ccc] font-medium text-xs truncate pt-2'>{artikel.date}</p>
                  </div>
                  <div className="pt-3 ">
                    <p className='line-clamp-6'>{artikel.content}</p>
                  </div>
                </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Blogs