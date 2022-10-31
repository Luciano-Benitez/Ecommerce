import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import ConfirmAccount from './components/Sessions/ConfirmAccount';
import CheckOut from './components/CheckoutForm/Checkout/CheckOut';
import ForgotPassword from './components/Sessions/ForgotPassword';
import ResetPassword from './components/Sessions/ResetPassword';
import DashboardUser from './components/Dashboard/DashboardUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><NavBar/><Products/></>}/>
        <Route exact path="/SignUp" element={<><NavBar/><SignUp/></>}/>
        <Route exact path="/SignIn" element={<><NavBar/><SignIn/></>}/>
        <Route exact path="/ConfirmAccount" element={<><NavBar/><ConfirmAccount/></>}/>
        <Route exact path="/Forgot-Password" element={<><NavBar/><ForgotPassword/></>}/>
        <Route exact path="/Reset-Password/:token" element={<><NavBar/><ResetPassword/></>}/>
        <Route exact path="/CheckoutPage" element={<><NavBar/><CheckoutPage/></>}/>
        <Route exact path="/CheckOut" element={<><NavBar/><CheckOut/></>}/>
        <Route exact path="/DashboardUser" element={<DashboardUser/>}/>
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
