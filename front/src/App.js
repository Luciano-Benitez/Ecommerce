import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import CheckoutPage from './components/Checkout/CheckoutPage';
import Loguin from './components/Sessions/Loguin';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/CheckoutPage" element={<CheckoutPage/>}/>
        <Route exact path="/Loguin" element={<Loguin/>}/>
          
        </Routes>
    </BrowserRouter> 
  );
};

export default App;
