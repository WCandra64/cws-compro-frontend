import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { GrMenu, GrClose } from "react-icons/gr";
import { hamburgerMenu, close, logo } from "../assets";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { menuItems } from "../data/Items";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setToggle(!toggle);
    const closeMobileMenu = () => setToggle(false);

    return (
        <div className="w-full h-[80px] bg-white border-b-2 sticky top-0 z-10">
            <nav className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-20">
                <Link to="/">
                    <img src={logo} className="h-[35px]" />
                </Link>

                <div className="hidden md:flex items-center ">
                    <ul className="flex gap-8">
                        {menuItems.map((menu, index) => {
                            return <MenuItems items={menu} key={index} />;
                        })}
                        {/* <li><Link to="/" className='hover:text-[#fd3555] hover:font-medium'>Beranda</Link></li>
                    <li><Link to="/layanan" className='hover:text-[#fd3555] hover:font-medium'>Layanan</Link></li>
                    <li className='relative'>
                        <Link to="/sertifikasi" className='hover:text-[#fd3555] hover:font-medium flex'>Sertifikasi <BsChevronDown className='ml-2 my-auto text-sm'/> </Link>
                        {dropdown}
                    </li>
                    <li><Link to="/tentang" className='hover:text-[#fd3555] hover:font-medium'>Tentang Kami</Link></li> */}
                    </ul>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    {toggle ? <GrClose /> : <GrMenu />}
                    {/* <img src={toggle?close:hamburgerMenu} /> */}
                </div>

                {/* <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
                <ul>
                    <li><Link to="/" className='hover:text-[#fd3555] hover:font-medium' onClick={closeMobileMenu}>Beranda</Link></li>
                    <li><Link to="/layanan" className='hover:text-[#fd3555] hover:font-medium' onClick={closeMobileMenu}>Layanan</Link></li>
                    <li className='relative'>
                        <Link to="/sertifikasi" className='hover:text-[#fd3555] hover:font-medium flex' onClick={closeMobileMenu}>Sertifikasi <BsChevronDown className='ml-2 my-auto text-sm'/> </Link>
                        
                    </li>
                    <li><Link to="/tentang" className='hover:text-[#fd3555] hover:font-medium' onClick={closeMobileMenu}>Tentang Kami</Link></li>
                </ul>
            </div> */}
            </nav>

            {/* <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-20'>
            
            <img src={logo} className="h-[35px]" />
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-8'>
                    <li><Link to="/" className='hover:text-[#fd3555] hover:font-medium'>Beranda</Link></li>
                    <li><Link to="/layanan" className='hover:text-[#fd3555] hover:font-medium'>Layanan</Link></li>
                    <li className='relative'>
                        <Link to="/sertifikasi" className='hover:text-[#fd3555] hover:font-medium flex'>Sertifikasi <BsChevronDown className='ml-2 my-auto text-sm'/> </Link>
                        
                    </li>
                    <li><Link to="/tentang" className='hover:text-[#fd3555] hover:font-medium'>Tentang Kami</Link></li>
                </ul>
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'><a href="#hero">Beranda</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#blog">Layanan</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#mitra">Sertifikasi</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#mitra">Tentang Kami</a></li>
            </ul>
        </div> */}
        </div>
    );
};

export default Navbar;
