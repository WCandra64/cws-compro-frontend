import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="relative hover:text-[#fd3555]">
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        className="flex"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
                        <BsChevronDown className="ml-2 my-auto text-sm" />
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <NavLink to={items.url} className={({ isActive }) => isActive ? "nav-active" : ""}>{items.title}</NavLink>
            )}
        </li>
    );
};

export default MenuItems;
