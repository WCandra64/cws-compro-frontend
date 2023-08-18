import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    // console.log(dropdown);


    const useOutsideDrop = (callback) => {
        const refDrop = React.useRef();
      
        React.useEffect(() => {
            const handleClick = (event) => {
                if (refDrop.current && !refDrop.current.contains(event.target)) {
                    callback();
                }
            };
        
            document.addEventListener('click', handleClick);
        
            return () => {
                document.removeEventListener('click', handleClick);
            };
          }, [refDrop]);
      
        return refDrop;
    };

    const handleDropdownOutside = () => {
        setDropdown(false);
    };

    const refDrop = useOutsideDrop(handleDropdownOutside);

    const handleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    return (
        <div>
            <li className="hidden md:block nav-list">
                {items.submenu ? (
                    <div className="relative">
                        <button
                            ref={refDrop}
                            type="button"
                            aria-haspopup="menu"
                            className={`${dropdown ? "drop-active" : ""} flex nav-text`}
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={handleDropdown}
                        >
                            {items.title}{" "}
                            <BsChevronDown className="ml-2 my-auto text-sm" />
                        </button>
                        <Dropdown submenus={items.submenu} dropdown={dropdown} />
                    </div>
                ) : (
                    <NavLink to={items.url} className="nav-text">{items.title}</NavLink>
                )}
            </li>

            <li className="md:hidden nav-list py-2">
            {items.submenu ? (
                <div className="relative">
                    <button
                        ref={refDrop}
                        type="button"
                        aria-haspopup="menu"
                        className={`m-auto ${dropdown ? "drop-active" : ""} flex nav-text`}
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={handleDropdown}
                    >
                        {items.title}{" "}
                        <BsChevronDown className="ml-2 my-auto text-sm" />
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </div>
            ) : (
                <NavLink to={items.url} className="nav-text">{items.title}</NavLink>
            )}
            </li>
        </div>
        
    );
};

export default MenuItems;
