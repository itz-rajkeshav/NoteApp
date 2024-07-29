import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./root.css";
// import"./index.css"
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Home from "./pages/home/home.jsx";
function App() {
  return (
    // <Router>
    //   <Routes>
    //   {/* <Route exact path="/" element={<Home/>} /> */}
    //     {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
    // </Routes>
    // </Router>
    <Dashboard></Dashboard>
   
  );
}

export default App;
