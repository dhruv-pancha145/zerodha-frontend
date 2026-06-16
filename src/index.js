import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./landing_page/home/Homepage.js";
import AboutPage from "./landing_page/about/AboutPage.js";
import ProductPage from "./landing_page/products/ProductPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from "./landing_page/support/SupportPage.js";
import ScrollToTop from "./scrolltotop";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import NotFound from "./landing_page/NotFound.js";
import { Login, Signup } from "./pages";
// import Home from "./pages/Home";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
            <ScrollToTop /> 
    <Navbar />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
