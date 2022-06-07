import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './LandingPage/Landingpage.js';
import Postview from './PostView/Postview.js';
import Form from './FormPage/Formpage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="Postview" element={<Postview />} />
        <Route path="Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
