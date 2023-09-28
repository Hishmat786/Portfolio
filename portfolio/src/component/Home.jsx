import React from 'react';
import profile from "../assets/prof_pic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md" 

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a MERN Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md '>Hard-working and passionate student capable of meeting strict deadlines.  I'm looking to put my IT skills particularly in the field of web and app development. Possess proven programming skills that will aid in achieving its productivity milestone.</p>

                <div>
                    <button>Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight/> 
                        </span> 
                    </button>
                </div>
            </div>
            <div>
                <img src={profile} alt="myPtofile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  );
}

export default Home;