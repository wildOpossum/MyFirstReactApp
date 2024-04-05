import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainSection from "../mainSection/MainSection";
import PizzaMenu from "../pizzaMenu/PizzaMenu";
import Modal from "../modal/Modal";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page">
        <MainSection/>
        <PizzaMenu/>
      </main>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
