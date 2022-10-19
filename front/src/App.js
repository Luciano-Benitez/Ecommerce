import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import CheckoutPage from './components/Checkout/CheckoutPage';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/CheckoutPage" element={<CheckoutPage/>}/>
        <Route exact path="/SignIn" element={<SignIn/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
          
        </Routes>
    </BrowserRouter> 
  );
};

export default App;
