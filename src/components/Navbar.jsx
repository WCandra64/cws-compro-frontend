import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import { hamburgerMenu, close, logo } from "../assets";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { menuItems } from "../data/Items";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const useOutsideClick = (callback) => {
        const ref = React.useRef();
      
        React.useEffect(() => {
            const handleClick = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };
        
            document.addEventListener('click', handleClick);
        
            return () => {
                document.removeEventListener('click', handleClick);
            };
          }, [ref]);
      
        return ref;
    };

    const handleMobileOutside = () => {
        setToggle(false);
    };

    const ref = useOutsideClick(handleMobileOutside);

    const handleMobile = () => {
        setToggle((prev) => !prev);
    };

    const handleHeaderClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="w-full h-[80px] bg-white border-b-2 sticky top-0 z-10">
            <nav className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-20" onClick={handleHeaderClick}>
                <Link to="/">
                    <img src={logo} className="h-[40px]" />
                </Link>

                <div>
                    <button ref={ref} className="md:hidden hover:cursor-pointer text-xl" onClick={handleMobile}>
                        {toggle ? <GrClose /> : <GrMenu />} 
                    </button>

                    <div className={toggle?"bg-black/[.01] w-[100vw] h-[100vh] absolute left-0 top-[90px] z-[-1]":"hidden"}  onClick={handleMobileOutside}/>
                    <div className={toggle?'absolute z-10 bg-white w-full px-8 md:hidden top-[80px] left-0 h-fit text-center py-3 border-b-2':'hidden'}>
                        <ul className="w-full">
                            {menuItems.map((menu, index) => {
                                return <MenuItems items={menu} key={index} />;
                            })}
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex items-center ">
                    <ul className="flex gap-8">
                        {menuItems.map((menu, index) => {
                            return <MenuItems items={menu} key={index} />;
                        })}
                    </ul>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;
