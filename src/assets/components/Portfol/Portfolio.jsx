import React from 'react';
import img1 from '../../imgs/img1.png';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.png';


export default function Portfolio() {
  return (
    <div className='text-center w-full my-8 text-slate-700 grid place-content-center'>
      <h2 className='m-auto text-3xl font-medium'>PORTFOLIO COMPONENT</h2>
      <div className='w-1/2 flex justify-center items-center m-auto'>
        <div className="w-1/5 h-1 bg-slate-700 my-3"></div>
        <div><i className="fa-solid fa-star mx-2"></i></div>
        <div className="w-1/5 h-1 bg-slate-700 my-3"></div>
      </div>

      <div className='container my-8 w-4/5 m-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 my-2'>
        {/* law fslt kol 3 fe div lwhdhom , hyfsl benhom fe al medium screen, hyb2a mo2rf flresponsive */}
          <div className="relative group">
            <img src={img1} alt="Portfolio item 1" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
            {/* inset--> btkhly al top+bottom+R+L=0 */}
            {/* group--> btgm3 kaza styling fgroup wahed, group hover--->group mn stylings lma a3ml hover b2a , w ay tghyyr fe al opacity hyt3ml 3la al hover b2a*/}
            {/* NOTE:ay haga b3d GROUP-HOVER: WON'T BE APPLOED ELA M3 AL HOVER */}
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img2} alt="Portfolio item 2" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img3} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img1} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img2} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img3} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img1} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img2} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={img3} alt="Portfolio item 3" className="rounded-lg" />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
              <i className="fa fa-plus text-white text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// momkn law sewr ktyr , ahothom fe array w a-loop 3lehom bs hena homa 3 bs fmosh m7taga a3ml al tep de

