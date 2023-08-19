import React from "react";
import { logo } from "../assets";
import {
    FaFacebookF,
    FaDribbble,
    FaLinkedinIn,
    FaInstagram,
    FaBehance,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="w-full pt-6 px-20 border-t-2 bg-slate-100">
                <div className="md:max-w-[1480px] m-auto grid md:grid-cols-3 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  pb-6 px-4 md:px-0 mt-6">
                    <div className="col-span-2">
                        {/* <img src={logo} className="h-[25px]" /> */}
                        <h3 className="text-2xl font-bold">Contact Us</h3>
                        <p className="pt-6 pb-1 text-[#363A3D]">
                            Call : 0857-3915-3620
                        </p>
                        <p className="pt-4 text-[#363A3D]">
                            Jalan Hayam Wuruk 135<br></br>Denpasar
                        </p>
                        <div className="flex gap-4 pt-6">
                            <div className="p-4 bg-[#cfe8ff] rounded-xl">
                                <FaFacebookF
                                    size={25}
                                    style={{ color: "#235c8f" }}
                                />
                            </div>
                            <div className="p-4 bg-[#cfe8ff] rounded-xl">
                                <FaLinkedinIn
                                    size={25}
                                    style={{ color: "#235c8f" }}
                                />
                            </div>
                            <div className="p-4 bg-[#cfe8ff] rounded-xl">
                                <FaInstagram
                                    size={25}
                                    style={{ color: "#235c8f" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={logo} className="h-[7vh] mb-6" />
                        {/* <h2 className='font-[Exo] font-bold text-2xl tracking-[6px] text-[#325ccc] pb-6'>LOGO</h2> */}

                        <h3 className="text-2xl font-bold">Explore</h3>
                        <ul className="py-3 text-[#6D737A] footer-nav">
                            <li>
                                <a
                                    href="#hero"
                                    className="hover:text-[#fd3555] hover:font-medium"
                                >
                                    Beranda
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#hero"
                                    className="hover:text-[#fd3555] hover:font-medium"
                                >
                                    Layanan
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="/#sertifikasi"
                                    className="hover:text-[#fd3555] hover:font-medium"
                                >
                                    Sertifikasi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/tentang"
                                    className="hover:text-[#fd3555] hover:font-medium"
                                >
                                    Tentang Kami
                                </a>
                            </li>
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

            <div className="text-center font-light text-xs bg-slate-800 text-white py-2">
                Copyright &copy; 2023 PT Cahaya Wahana Sejahtera
            </div>
        </div>
    );
};

export default Footer;
