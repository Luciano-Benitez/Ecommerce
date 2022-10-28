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
      <Routes>
        <Route exact path="/" element={<><NavBar/><Products/></>}/>
        <Route exact path="/SignIn" element={<><NavBar/><SignIn/></>}/>
        <Route exact path="/SignUp" element={<><NavBar/><SignUp/></>}/>
        <Route exact path="/ConfirmAccount" element={<><NavBar/><ConfirmAccount/></>}/>
        <Route exact path="/CheckoutPage" element={<><NavBar/><CheckoutPage/></>}/>
        <Route exact path="/CheckOut" element={<><NavBar/><CheckOut/></>}/>
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
