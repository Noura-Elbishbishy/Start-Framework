import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center h-80 m-2 text-slate-700 grid place-content-center'>
    <h2 className='m-auto text-5xl font-medium  text-red-600 my-3'>404</h2>
    <div className='w-1/2 flex justify-center items-center m-auto'>
      <div className="line w-1/2 h-1 bg-red-600 my-3"></div>
      <div><i className="fa-solid fa-star m-1  text-red-700 my-3"></i></div>
      <div className="line w-3/5 h-1 bg-red-600 my-3"></div>
    </div>
     <div className="container">
        <p>Page Not found!</p>
        <p>sorry,we can't find this page.</p>
     </div>
    </div>
  )
}
