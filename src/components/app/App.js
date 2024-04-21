import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainSection from "../mainSection/MainSection";
import Home from "../../pages/home/Home";
import Modal from "../modal/Modal";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page">
        <MainSection/>
        <Home/>
      </main>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
