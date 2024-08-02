import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./root.css";
// import"./index.css"
import Dashboard from "./pages/dashboard/dashboard.jsx";
import All_tasks from "./pages/All_tasks/All_tasks.jsx";
import Active_tasks from "./pages/Active_tasks/Active_tasks.jsx"
import Achieved_tasks from "./pages/Achieved_tasks/Achieved_tasks.jsx"
import Home from "./pages/home/home.jsx";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/All_tasks" element={<All_tasks/>}/>
        <Route path="/Active_tasks" element={<Active_tasks/>}/>
        <Route path="/Achieved_tasks" element={<Achieved_tasks/>}/>

    </Routes>
    </Router>
    // <Dashboard></Dashboard>
   
  );
}

export default App;
