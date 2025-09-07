// RootLayout.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "@tanstack/react-router";
import Loader from "./components/Loader.jsx";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
            padding: "12px 16px",
            borderRadius: "8px",
            background: "#111827", // dark background
            color: "#fff",
          },
        }}
      />

      {/* Main content */}
      <Outlet />
    </>
  );
};

export default RootLayout;
