// --------> in line 20 , transition-transform duration-300 ease-in-out is not working.

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);   // State to handle menu toggle  
 const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle the menu

  return (
    <nav className='bg-slate-700 w-full font-medium px-2 font-mono'>
      <div className='container flex flex-col md:flex-row justify-between mx-auto p-4'>
        <h2 className='text-white text-2xl mb-4 md:mb-0'>START FRAMEWORK</h2>
        <button  //Button to toggle menu on small screens
          className='text-white md:hidden flex items-center right-2 absolute m-2'
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
        <div className={`md:flex md:items-center w-full md:w-auto transition-transform duration-300 ease-in-out  ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col md:flex-row justify-around p-2 text-xl items-center'>
            <li className='mb-2 md:mb-0 md:ml-4'>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  `${isActive ? 'bg-teal-500 border-2 border-teal-500' : 'bg-transparent'} text-white rounded-lg px-4 py-1`
                }  // al bara{} dol 3ltol , al gwa yb2a law al condition true elly howa isActive true.
                end
              >
                About
              </NavLink>
            </li>
            <li className='mb-2 md:mb-0 md:ml-4'>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) =>
                  `${isActive ? 'bg-teal-500 border-2 border-teal-500' : 'bg-transparent'} text-white rounded-lg px-4 py-1`
                }  
                end
              >
                Portfolio
              </NavLink>
            </li>
            <li className='mb-2 md:mb-0 md:ml-4'>
              <NavLink 
                to="/contacts" 
                className={({ isActive }) =>
                  `${isActive ? 'bg-teal-500 border-2 border-teal-500' : 'bg-transparent'} text-white rounded-lg px-4 py-1`
                }  
                end
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
