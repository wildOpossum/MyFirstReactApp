import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainSection from "../mainSection/MainSection";
import Home from "../../pages/home/Home";
import Modal from "../modal/Modal";
import NotFound from "../../pages/notFound/NotFound";
import Layout from "../layout/Layout";
import AbountUs from "../abountUs/AbountUs";
import Cart from "../../pages/cart/Cart";

function App() {
  return (
    <Routes>          
      <Route path="/" element={<Layout/>}>        
        <Route path="/" element={<Home/>} />
        <Route path="abountUs" element={<AbountUs/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
      
    </Routes> 
  );
}

export default App;
