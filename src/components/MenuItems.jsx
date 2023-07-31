import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

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

    const handleDropdownOutside = () => {
        setDropdown(false);
    };

    const ref = useOutsideClick(handleDropdownOutside);

    const handleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    return (
        <li className="nav-list">
            {items.submenu ? (
                <div className="relative" id="dropdown">
                    <button
                        ref={ref}
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
    );
};

export default MenuItems;
