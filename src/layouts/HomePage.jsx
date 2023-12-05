import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer/footer';
import Home from '../components/Home/Home';
import Login from '../components/login/login';
import NavBar from '../components/Navbar/NavBar';
import ProductDetails from '../components/ProductDetails/ProductDetails';

export default function HomePage() {
  return (

    <>
     <BrowserRouter>
  <NavBar />
  <Home />
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/product-details/:productID' element={<ProductDetails />}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
    </>
 
  )
}
