import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Corousel from "../../components/common/Corousel";
import About from "../../pages/About";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Corousel/>

      <main>
        <Outlet />
      </main>
      <About />
      <Footer />
    </div>
  );
};

export default MainLayout;
