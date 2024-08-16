import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
// import DraggableTask from "./DraggableTask";
// import All_tasks from "../All_tasks/All_tasks";

const ItemType = {
  Task: "task",
};

function Active_tasks({ activeTasks }) {
  const [showSlide, setShowSlide] = useState(false);
  const navigate = useNavigate();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.Task,
    // drop: (item) => {
    //   return item;
    //   console.log("Task dropped:", item);
    //   setActiveTasks((prev) => {
    //     if (!prev.some((task) => task.id === item.id)) {
    //       return [...prev, item];
    //     }
    //     return prev;
    //   });
    // },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    console.log("Active tasks updated:", activeTasks);
  }, [activeTasks]);

  // const removeTask = (taskId) => {
  //   setActiveTasks((prev) => prev.filter((task) => task.id !== taskId));
  // };

  return (
    <div className="bg-zinc-700 w-full min-h-screen">
      <button
        className="text-zinc-100 absolute left-4 top-7 z-50"
        onClick={() => setShowSlide(!showSlide)}
      >
        <svg
          width="29"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#fffafa"
            strokeWidth="1.896"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {showSlide && (
        <div className="fixed h-full flex flex-col justify-between w-72 bg-black">
          <div className="mt-20 flex flex-col space-y-6">
            <button
              className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
              onClick={() => navigate("/All_tasks")}
            >
              Entire Tasks
            </button>
            <button
              className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
              onClick={() => navigate("/Active_tasks")}
            >
              Active Tasks
            </button>
            <button
              className="w-72 bg-zinc-900 h-10 text-zinc-300 font-poppins hover:text-red-300"
              onClick={() => navigate("/Achieved_tasks")}
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
      <div
        className={`ml-48 ${
          showSlide ? "ml-72" : "ml-48"
        } transition-all duration-300 pt-12`}
      >
        <div
          ref={drop}
          className={`p-4 min-h-screen ${isOver ? "bg-red-500" : ""}`}
        >
          <h2 className="text-2xl font-bold text-zinc-100 mb-4 font-poppins ml-16">
            Active Tasks
          </h2>
          {activeTasks.length === 0 ? (
            <p className="text-zinc-300 font-poppins ml-16">
              No active tasks yet. Drag tasks here to make them active.
            </p>
          ) : (
            activeTasks.map((task) => (
              <div
                key={task.id}
                // ref={(node) => drag(drop(node))}
                className="w-1/2 mt-8 ml-16 rounded-md h-16 flex items-center gap-2 group"
                // style={{ opacity: isDragging ? 0.5 : 1 }}
              >
                <div
                  // type="text"
                  // value={value}
                  // onChange={onChange}
                  // placeholder={`Enter task ${index + 1}`}
                  className="w-9/12 text-zinc-100 font-poppins tracking-wide font-2xl rounded-md h-16 bg-black px-4 flex items-center"
                  // key={task.id}
                >
                  {task?.content}
                </div>
                <button className="hidden group-hover:block">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="-0.24 -0.24 24.48 24.48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z"
                        fill="#eef0f6"
                      />
                      <path
                        d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
                        fill="#eef0f6"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Active_tasks;
