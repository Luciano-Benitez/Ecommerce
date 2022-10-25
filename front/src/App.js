import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import ConfirmAccount from './components/Sessions/ConfirmAccount';
import CheckOut from './components/CheckoutForm/Checkout/CheckOut';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/SignIn" element={<SignIn/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/ConfirmAccount" element={<ConfirmAccount/>}/>
        <Route exact path="/CheckoutPage" element={<CheckoutPage/>}/>
        <Route exact path="/CheckOut" element={<CheckOut/>}/>
          
        </Routes>
    </BrowserRouter> 
  );
};

export default App;
