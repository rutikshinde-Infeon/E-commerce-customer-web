import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import MainLayout from "../layout/mainLayout/index";
import Home from "../pages/Home";
import About from "../components/common/About";

const PageRoute = () => {
  return (
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
  );
};

export default PageRoute;
