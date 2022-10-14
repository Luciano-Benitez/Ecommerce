
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<><NavBar/><Products/></>}/>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
