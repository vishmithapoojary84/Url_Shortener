import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logoutUser } from "../api/user.api";
import { motion } from "framer-motion";

// Wrap Link in motion
const MotionLink = motion(Link);

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/auth" });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              URL Shortener
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <MotionLink whileHover={{ scale: 1.1 }} to="/">
                Home
              </MotionLink>
              <MotionLink whileHover={{ scale: 1.1 }} to="/qr">
                QR
              </MotionLink>
              <MotionLink whileHover={{ scale: 1.1 }} to="/dashboard">
                Shortener
              </MotionLink>

              {isAuthenticated ? (
                <>
                  <span>Welcome, {user?.name || "User"}</span>
                  <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Logout
                  </motion.button>
                </>
              ) : (
                <MotionLink
                  whileHover={{ scale: 1.05 }}
                  to="/auth"
                  className="bg-blue-500 px-3 py-1 rounded"
                >
                  Login
                </MotionLink>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl"
              >
                {menuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-gray-900 px-4 py-2 md:hidden space-y-2"
          >
            <Link to="/">Home</Link>
            <Link to="/qr">QR</Link>
            <Link to="/dashboard">Shortener</Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-800 px-3 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link to="/auth" className="bg-blue-500 px-3 py-1 rounded">
                Login
              </Link>
            )}
          </motion.div>
        )}
      </nav>

      {/* Footer
      <footer className="bg-gray-900 text-white py-4 mt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <span>&copy; {new Date().getFullYear()} URL Shortener</span>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/qr">QR</Link>
            <Link to="/dashboard">Shortener</Link>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Navbar;
