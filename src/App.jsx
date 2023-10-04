import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarSearch from './Pages/CarSearch'; 

function App() {
  return (
    <Router>
      <div className=" w-screen bg-[#EDF0F5] px-10 py-2">
        <Routes>
          <Route path="/page/:page" element={<CarSearch />} />
          <Route path="/" element={<CarSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
