import React from 'react';
import avatar from '../../imgs/avatar.svg';

const x = {
  'avatar.svg': avatar,
};
export default function Home() {
  return  <>
     <div className='bg-teal-500 text-center w-full h-screen text-white my-auto grid place-content-center'>
       <div className=" w-4/5 m-auto">
         <img src={x['avatar.svg']} alt="avatar"/>
       </div>
      <h2 className='m-auto  font-medium text-4xl'>start Framework</h2>
      <div className='w-1/2 flex justify-content-center align-items-center m-auto'>
         <div className="line w-1/3 h-1 bg-slate-50 my-3"> </div>
         <div><i className="fa-solid fa-star m-1"></i></div>
         <div className="line w-1/3 h-1 bg-slate-50 my-3"> </div>
      </div>
      <p className='my-2 text-sm'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
}
