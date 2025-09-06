import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "@tanstack/react-router";
import Loader from "./components/Loader.jsx";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page load or fetch data
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
