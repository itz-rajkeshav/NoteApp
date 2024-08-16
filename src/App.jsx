import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import All_tasks from "./pages/All_tasks/All_tasks.jsx";
import Active_tasks from "./pages/Active_tasks/Active_tasks.jsx";
import Achieved_tasks from "./pages/Achieved_tasks/Achieved_tasks.jsx";
import Home from "./pages/home/home.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);

  const handleMoveToActive = (task) => {
    setActiveTasks((prev) => [...prev, task]);
    setAllTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/All_tasks"
            element={
              <All_tasks
                tasks={allTasks}
                onMoveToActive={handleMoveToActive}
                setActiveTasks={setActiveTasks}
                activeTasks={activeTasks}
              />
            }
          />
          <Route
            path="/Active_tasks"
            element={<Active_tasks activeTasks={activeTasks} />}
          />
          <Route path="/Achieved_tasks" element={<Achieved_tasks />} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
