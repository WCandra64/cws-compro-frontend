import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul
            className={`menu-items bg-white absolute top-[50px] left-[-2.5rem] py-2 border-x-2 border-b-2 rounded-b-md ${
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
