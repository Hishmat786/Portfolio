import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

  const [nav, setNav] = useState(false);

  const links=[
    {id:1,link:'home'},
    {id:2,link:'about'},
    {id:3,link:'portfoli0o'},
    {id:4,link:'experience'},
    {id:5,link:'contact'},
  ]
  return (
    <div className='flex justify-between item-center w-full h-15 px-4 py-3 text-white bg-black fixed'>
      <div>
        <h1 className='text-4xl font-signature ml-2'>Hishmat</h1>
      </div>
       
      <ul className='hidden md:flex'>
        {links.map(({id,link}) => (
          <li key={id} className='px-5 curser-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
        ))}
      </ul>

      <div className='cursor-pointer pr-4 z-10 text-gray-500'>
        <FaBars size={30}/>
      </div>
    </div>
  );
}

export default Navbar;
 