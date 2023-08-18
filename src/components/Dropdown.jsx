import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul
            className={`md:menu-items bg-white md:absolute md:top-[50px] md:left-[-2.5rem] mt-2 md:mt-0 py-2 border-y-2 md:border-x-2 md:border-b-2 md:rounded-b-md ${
                dropdown ? "" : "hidden"
            }`}
        >
            {submenus.map((submenu, index) => (
                <div key={index}>
                    <li className="drop-list px-6 py-1" onClick={() => (window.location.href = submenu.url)}>
                        <span className="drop-text text-sm">{submenu.title}</span>
                    </li>
                </div>
                
            ))}
        </ul>
    );
};

export default Dropdown;
