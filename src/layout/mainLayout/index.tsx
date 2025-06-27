import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Corousel from "../../components/slider/Corousel";
import About from "../../components/common/About";
import FeaturesSection from "../../components/slider/FeaturesSection";
import CustomerReviews from "../../components/slider/CustomerReviews";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Corousel />

      <main>
        <Outlet />
      </main>
      <CustomerReviews />
      <FeaturesSection />
      <About />
      <Footer />
    </div>
  );
};

export default MainLayout;
