import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Active_tasks() {
  
    const [showslide, setshowslide] = useState(false);
    const navigate = useNavigate();
  
    return (
      <div>
        <div className='bg-zinc-700 w-full h-dvh'>
        <button
          className="text-zinc-100 absolute ml-4 mt-7 z-50"
          onClick={() => setshowslide(!showslide)}
        >
          <svg
            width="29px"
            height="25px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#fffafa"
                strokeWidth="1.8960000000000001"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        {showslide && (
          <div className="fixed h-full flex flex-col justify-between w-72 bg-black">
            <div className="mt-20 flex flex-col space-y-6">
              <button
                className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
                onClick={() => navigate('/All_tasks')}
              >
                Entire Tasks
              </button>
              <button
                className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
                onClick={() => navigate('/Active_tasks')}
              >
                Active Tasks
              </button>
              <button
                className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
                onClick={() => navigate('/Achieved_tasks')}
              >
                Achieved Tasks
              </button>
            </div>
            <footer className="w-72">
              <button className="w-72 bg-zinc-900 h-11 text-zinc-300 flex items-center justify-center font-poppins hover:text-red-300">
                Log out
              </button>
            </footer>
          </div>
        )}
        </div>
      </div>
    )
  
  
}

export default Active_tasks