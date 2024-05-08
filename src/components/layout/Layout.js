import { Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainSection from "../mainSection/MainSection";
import Home from "../../pages/home/Home";
import Modal from "../modal/Modal";
import NotFound from "../../pages/notFound/NotFound";

const Layout = () => {
	return (
		<div className="wrapper">
      <Header/>
      <main className="page">
      
		<Outlet/>     
      </main>
      <Footer/>
      <Modal/>
    </div>
	);
}

export default Layout;