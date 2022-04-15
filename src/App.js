import logo from "./logo.svg";
import "./App.css";
import FooterTop from "./FooterTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Swap from "./Swap";
import Liquid from "./Liquid";
import Stake from "./Stake";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <FooterTop />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/Add" element={<Liquid />} />
          <Route path="/Compound" element={<Stake />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Swap /> */}
      {/* <Liquid /> */}
      {/* <Stake /> */}
    </>
  );
}

export default App;
