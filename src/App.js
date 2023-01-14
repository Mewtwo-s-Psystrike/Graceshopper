import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Routes, useNavigate } from "react-router-dom";
import {Navbar} from "./components/Index"

const App = () => {
  return (
    <>
      <div className="app-container">
        <Navbar/>
      </div>

      <Routes>
        <Route />
      </Routes>
    </>
  );
};

export default App;
