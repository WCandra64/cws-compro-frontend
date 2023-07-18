import React from 'react';
import {useParams} from "react-router-dom";
// import './App.css'
import { blog } from '../data/Artikel';

const Artikel = () => {
  const {idArtikel} = useParams()
  const artikel = blog.find(artik => artik.id == idArtikel)

  return (
    <div className='py-[10vh] px-20'>
      <img className='w-full m-auto' src={artikel.linkImg} alt={artikel.title} />
      <h1 className='pt-6 pb-4 font-bold text-2xl'>{artikel.title}</h1>
      <p>{artikel.content}</p>
      {/* <div className='py-[20vh] text-center'>
        <h1 className='pb-2 font-bold text-2xl text-[#11aaff]'>{artikel.title}</h1>
        <span className='text-md'>Baca artikel-artikel terbaru kami.</span>
      </div> */}
      {/* <div className=''>
        <div className='flex m-auto max-w-[80vw] text-ellipsis my-6 border z-2 bg-slate-50 hover:bg-white drop-shadow-md hover:drop-shadow-xl rounded-2xl hover:cursor-pointer ' onClick={() => window.location.href = "/blogs/"+artikel.id}>
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
      </div> */}
    </div>
  )
}

export default Artikel