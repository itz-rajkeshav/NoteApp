import React, { useState ,useEffect} from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Dashboard() {
  const [showslide, setshowslide] = useState(false);
  const [greeting, setGreeting] = useState('');

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) return 'Good Morning';
    if (hours >= 12 && hours < 18) return 'Good Afternoon';
    if (hours >= 18 && hours < 22) return 'Good Evening';
    return 'Good Night';
  };
  // setGreeting(getGreeting());
  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="bg-zinc-800 w-full h-screen flex">
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
        <div className=" fixed h-full  flex flex-col justify-between w-72 bg-black ">
          <div className="mt-20 flex flex-col space-y-6">
            <button className="w-72 bg-zinc-900 h-10 text-zinc-300 font-playwrite">
              Entire Tasks
            </button>
            <button className="w-72 bg-zinc-900 h-10 text-zinc-300 font-playwrite">
              Active Tasks
            </button>
            <button className="w-72 bg-zinc-900 h-10 text-zinc-300 font-playwrite">
              Achieved Tasks
            </button>
          </div>
          <footer className="w-72">
            <button className="w-72 bg-zinc-900 h-11 text-zinc-300 flex items-center justify-center font-playwrite">
              Contact Me
            </button>
          </footer>
        </div>
      )}
      <div className={`ml-48 mt-12 flex flex-col  ${showslide ? 'ml-72' : 'ml-48'} `}>
        <h1 className={`text-zinc-100 font-playwrite  text-2xl ${showslide?'ml-8':'ml-8'}`}>{greeting }</h1>
        <h1 className="text-red-500 font-playwrite text-4xl mt-16 ml-48 font-medium">Keep track of your responsibilities.</h1>
        <h1 className="text-zinc-100 font-playwrite text-4xl mt-8 ml-48 font-medium">Create a note and mark it complete when finished.</h1>
        <div className="flex mt-28 ml-24 space-x-8">
          <div className="w-80 h-60 bg-zinc-700 text-2xl text-red-300  flex justify-center items-center font-playwrite rounded-xl shadow-lg bg-opacity-50 relative transition-transform transform hover:scale-105 hover:text-red-500 ">
            Active Tasks
            <AiOutlineArrowRight className="text-zinc-100 text-2xl cursor-pointer absolute bottom-4 right-4 transition-transform transform hover:scale-105 hover:text-red-500 hover:text-3xl" />
          </div>
          <div className="w-80 h-60 text-red-300 bg-zinc-700 text-2xl flex items-center justify-center font-playwrite rounded-xl shadow-lg bg-opacity-50 relative transition-transform transform hover:scale-105 hover:text-red-500">
            Active Tasks
            <AiOutlineArrowRight className="text-zinc-100  text-2xl cursor-pointer absolute bottom-4 right-4 transition-transform transform hover:scale-105 hover:text-red-500 hover:text-3xl" />

          </div>
          <div className="w-80 h-60 bg-zinc-700 text-red-300 text-2xl flex items-center justify-center font-playwrite rounded-xl shadow-lg bg-opacity-50 relative transition-transform transform hover:scale-105 hover:text-red-500">
            Achieved Tasks
            <AiOutlineArrowRight className="text-zinc-100 text-2xl cursor-pointer absolute bottom-4 right-4 transition-transform transform hover:scale-105 hover:text-red-500 hover:text-3xl" />

          </div>
        </div>
      </div>
    </div>
  );
}
