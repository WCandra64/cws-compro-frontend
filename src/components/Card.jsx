import React from 'react'
import { blogImg1 } from '../assets'
// import StarRating from './StarRating'

const Card = ({artikel}) => {
  return (
    <div className='z-2 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4' onClick={() => window.location.href = artikel.link}>
        <img src={artikel.linkImg} 
                className="h-40 w-full object-cover"
        
        />
        <div className='px-5 py-2 border border-b'>
            <h1 className='py-2 truncate text-lg'>{artikel.title}</h1>
            <p className='text-gray-400 font-medium text-sm'>{artikel.date}</p>
        </div>
        <p className='p-5'>{artikel.content}</p>

        {/* <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {artikel.category}
        </div> */}
    </div>
  )
}

export default Card