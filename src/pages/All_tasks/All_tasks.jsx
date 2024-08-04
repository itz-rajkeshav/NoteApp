import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDrag } from "react-dnd";

function All_tasks() {
  const [showslide, setshowslide] = useState(false);
  const navigate = useNavigate();
  const [showtrash, setshowtrash] = useState(false);
  const [inputFields, setInputFields] = useState([]); // State to store input fields as an element of array
  const [Task, setTask] = useState(0);
  const [trashIndex, settrashIndex] = useState(null);

  const addInputField = () => {
    setInputFields([...inputFields, ""]);
     // for eg-const input = ["task1","task2"];  const newInput = [...input, "", 5];    console.log(newInput);  Output: ["task1","task2", "", 5] 
    setTask(prevTask => prevTask + 1);
  };

  const ItemType = {
    INPUT: 'input',
  };

  const handleTrashClick = (index) => {
    settrashIndex(index);
    setshowtrash(true);
  };

 

  const handleDelete = (index) => {
    setInputFields(inputFields.filter((_, i) => i !== index));
    setTask(prevTask => prevTask - 1);
  };

  const DragableInput = ({ index, handleDelete, value, onChange }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemType.INPUT,
      item: { index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div 
        key={index} 
        ref={drag} 
        className="w-1/2 mt-8 ml-16 rounded-md h-16 flex items-center gap-2 group" 
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <input
          type="text"
          placeholder={`Enter task ${index}`}
          className="w-9/12 text-zinc-100 font-poppins tracking-wide font-2xl rounded-md h-16 bg-black px-4"
          onClick={() => handleTrashClick(index)}
          value={value}
          onChange={(e) => onChange(index, e.target.value)}
        />
        <button 
          className="hidden group-hover:block"
          onClick={() => handleDelete(index)}
        >
          <svg width="32px" height="32px" viewBox="-0.24 -0.24 24.48 24.48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#eef0f6" />
              <path d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#eef0f6" />
            </g>
          </svg>
        </button>
      </div>
    );
  };

  const handleInputChange = (index, value) => {
    const updatedFields = inputFields.map((item, i) => (i === index ? value : item));
    setInputFields(updatedFields);
  };

  return (
    <div className='bg-zinc-700 w-full h-screen'>
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
      <div className={`ml-48 ${showslide ? 'ml-72' : 'ml-48'} transition-all duration-300 pt-12`}>
        <div className="flex items-center justify-between">
          <h1 className={`text-zinc-100 font-playwrite text-2xl ${showslide ? 'ml-12' : 'ml-16'}`}>{`Total tasks : ${Task}`}</h1>
          <button className="mr-8" onClick={addInputField}> 
            <svg fill="#000000" width="64px" height="64px" viewBox="-3.6 -3.6 31.20 31.20" id="create-note" xmlns="http://www.w3.org/2000/svg" className="icon multi-color" transform="rotate(0)">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <polygon id="secondary-fill" points="10.17 11 9 15 13 13.83 17.69 9.14 14.86 6.31 10.17 11" style={{ fill: '#ec3232', strokeWidth: 1.08 }} />
                <path id="primary-stroke" d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z" style={{ fill: 'none', stroke: '#cbc2c2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.08 }} />
                <path id="secondary-stroke" d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12" style={{ fill: 'none', stroke: '#ec3232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.08 }} />
              </g>
            </svg>
          </button>
        </div>
        <div className="max-h-[calc(100vh-10rem)] overflow-y-auto scrool">
          {inputFields.map((value, index) => (
            <DragableInput
              key={index}
              index={index}
              handleDelete={handleDelete}
              value={value}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default All_tasks;
