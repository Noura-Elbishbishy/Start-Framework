import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-slate-700 w-full md:relative bottom-0'>
    <div className="container text-white gap-4 w-4/5 m-auto flex flex-col md:flex-row justify-between p-7">
      <div className="child1 text-center md:text-left mb-4 md:mb-0">
        <h3 className='font-bold text-center'>LOCATION</h3>
        <p className='text-center'>2215 John Daniel Drive</p>
        <p className='text-center'>Clark, MO 65243</p>
      </div>
      <div className="child2 text-center md:text-left mb-4 md:mb-0">
        <h3 className='font-bold text-center'>AROUND THE WEB</h3>
        <div className="icons flex justify-center md:justify-start my-4">
          <i className="fa-brands fa-facebook mx-1 border border-white rounded-full p-2 "></i>
          <i className="fa-brands fa-twitter mx-1 border border-white rounded-full p-2"></i>
          <i className="fa-brands fa-linkedin-in mx-1 border border-white rounded-full p-2"></i>
          <i className="fa-solid fa-globe mx-1 border border-white rounded-full p-2"></i>
        </div>
      </div> 
      <div className="child3 text-center md:text-left mb-4 md:mb-0">
        <h3 className='font-bold text-center'>ABOUT FREELANCER</h3>
        <p className='w-3/4 md:w-full m-auto'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className="container2 w-full text-center bg-slate-900 text-white p-3 text-sm">
      <p>Copyright © Your Website 2021</p>
    </div>
  </footer>
  
  )
}
