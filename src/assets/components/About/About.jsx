import React from 'react'

export default function About() {
  return <>
    <div className='bg-teal-500 text-center w-full h-screen text-white my-auto grid place-content-center'>
      <h2 className='m-auto text-3xl font-medium'>ABOUT COMPONENT</h2>
      <div className='w-1/2 flex justify-content-center align-items-center m-auto'>
         <div className="line w-1/2 h-1 bg-slate-50 my-3"> </div>
         <div><i className="fa-solid fa-star m-1"></i></div>
         <div className="line w-1/2 h-1 bg-slate-50 my-3"> </div>
      </div>
      <div className="contentContainer flex flex-col md:flex-row gap-2 my-3 m-auto justify-center w-10/12">
      <div className="m-auto w-1/2 py-2 border-b-slate-50 border-b-2 md:border-b-0 text-center md:text-left">
      <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="m-auto w-1/2 text-center md:text-left">
      <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      </div>
      
    </div>
    </>
}
