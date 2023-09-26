import React from 'react';

function Navbar() {
  return (
    <>
      <nav class="text-white flex justify-between bg-blue-500">
        <span class="text-xl flex items-center mx-3 font-bold">Portfolio</span>
        <ul class="px-28 py-4 flex space-x-11 justify-end">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">About</li>
            <li class="cursor-pointer">Skills</li>
            <li class="cursor-pointer">Projects</li>
            <li class="cursor-pointer">Contact Us</li>
        </ul>
    </nav>
    </>
  );
}

export default Navbar;
