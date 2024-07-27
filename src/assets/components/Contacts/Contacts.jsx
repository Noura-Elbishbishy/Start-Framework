import React from 'react'

export default function Contacts() {
    return  <>
    <div className='text-center w-full h-screen text-slate-700 my-auto grid place-content-center'>
      <h2 className='m-auto text-3xl font-medium'>CONTACT SECTION</h2>
          <div className='w-96 flex justify-center items-center m-auto'>
              <div className="line w-1/4 h-1 bg-slate-700 my-3"></div>  
                     <div><i className="fa-solid fa-star m-1"></i></div>
              <div className="line w-1/4 h-1 bg-slate-700 my-3"></div>
           </div>
        
 
        <div className="w-full grid">
          <input type="text" placeholder='userName' id='userName' className='border-b-2 m-2 p-2'/>
          <input type="number" placeholder='userAge' id='userAge' className='border-b-2 m-2 p-2'/>
          <input type="text" placeholder='userEmail' id='userEmail'  className='border-b-2 m-2 p-2'/>
          <input type="text" placeholder='userPass' id='userPass'  className='border-b-2 m-2 p-2'/>
          <button className='bg-teal-500 rounded p-2 text-white w-1/3'>Send Message</button>
        </div>
     </div>
      </>
}
