import React from 'react';
import img1 from '../../imgs/img1.png';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.png'; 

const images = {
  'img1.png': img1,
  'img2.png': img2,
  'img3.png': img3,
};

export default function Portfolio() {
  return (
    <div className='text-center w-full my-2 text-slate-700 grid place-content-center'>
      <h2 className='m-auto text-3xl font-medium'>PORTFOLIO COMPONENT</h2>
      <div className='w-1/2 flex justify-center items-center m-auto'>
        <div className="line w-1/5 h-1 bg-slate-700 my-3"></div>
        <div><i className="fa-solid fa-star m-1"></i></div>
        <div className="line w-1/5 h-1 bg-slate-700 my-3"></div>
      </div>

      <div className='container my-2 w-4/5 m-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 my-2'>
          {Object.keys(images).map((key, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img src={images[key]} alt={`portfolio img ${key}`} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
              <div className='absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-60 flex items-center justify-center transition-opacity duration-300'>
                <i className="fas fa-search text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-2'>
          {Object.keys(images).map((key, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img src={images[key]} alt={`portfolio img ${key}`} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
              <div className='absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-60 flex items-center justify-center transition-opacity duration-300'>
                <i className="fas fa-search text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-2'>
          {Object.keys(images).map((key, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img src={images[key]} alt={`portfolio img ${key}`} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
              <div className='absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-60 flex items-center justify-center transition-opacity duration-300'>
                <i className="fas fa-search text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

