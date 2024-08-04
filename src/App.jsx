import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard/dashboard.jsx";
import All_tasks from "./pages/All_tasks/All_tasks.jsx";
import Active_tasks from "./pages/Active_tasks/Active_tasks.jsx"
import Achieved_tasks from "./pages/Achieved_tasks/Achieved_tasks.jsx";
import Home from "./pages/home/home.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/All_tasks" element={<All_tasks />} />
          <Route path="/Active_tasks" element={<Active_tasks />} />
          <Route path="/Achieved_tasks" element={<Achieved_tasks />} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
