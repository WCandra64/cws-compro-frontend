import React from "react";
import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
    return (
        <div
            className="w-full bg-[url('./assets/hero-bg.png')] bg-cover bg-center"
            id="hero"
        >
            {/* <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0"> */}
            <div className="bg-slate-900/50 w-full h-full py-24 px-16">
                {/* <div className='flex flex-col justify-start gap-4'> */}
                <div className="mt-[40vh]">
                    <h1 className="font-bold text-4xl md:text-8xl text-white">
                        Jembatan <br /> Sukses Anda
                    </h1>
                    {/* <p className='py-2 text-2xl text-[#fd3555] font-medium'>LOREM TO IPSUM</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Lorem Ipsum <span className='text-[#11aaff]'>Dolor</span> Sit
                    Amet <span  className='text-[#11aaff]'>Adipiscing</span> Elit 
                    Lorem
                </h1>
                <p className='py-2 text-lg text-gray-600'>Lorem ipsum dolor sit amet, Adipiscing elit.</p> */}

                    {/* <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form> */}
                </div>

                {/* <img  src={heroImg} className="md:order-last  order-first" /> */}
            </div>
        </div>
    );
};

export default Hero;
