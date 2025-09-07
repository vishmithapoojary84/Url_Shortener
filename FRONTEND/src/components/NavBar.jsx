import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logoutUser } from "../api/user.api";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "QR", path: "/qr" },
    { name: "Shortener", path: "/dashboard" },
  ];

  if (isAuthenticated) navLinks.push({ name: "My URLs", path: "/user-urls" });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <MotionLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-indigo-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]"
          >
            URL Shortener
          </MotionLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            {navLinks.map((link) => (
              <MotionLink
                key={link.name}
                to={link.path}
                whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(167,139,250,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-lg transition-all duration-300 text-indigo-400 ${
                  location.pathname === link.path ? "bg-gray-900" : "hover:bg-gray-800"
                }`}
              >
                {link.name}
              </MotionLink>
            ))}

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(220,38,38,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-lg font-semibold text-red-500 border border-red-500 shadow-md hover:bg-red-700 hover:text-white transition-all"
              >
                Logout
              </motion.button>
            ) : (
              <MotionLink
                to="/auth"
                whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(167,139,250,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-lg font-semibold text-indigo-400 border border-indigo-400 shadow-md hover:bg-indigo-600 hover:text-white transition-all"
              >
                Login
              </MotionLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-white focus:outline-none"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black/90 backdrop-blur-md px-4 py-4 md:hidden flex flex-col space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1 rounded-lg transition-all duration-300 text-indigo-400 hover:bg-gray-800`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1 rounded-lg font-semibold text-red-500 border border-red-500 shadow-md hover:bg-red-700 hover:text-white transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-1 rounded-lg font-semibold text-indigo-400 border border-indigo-400 shadow-md hover:bg-indigo-600 hover:text-white transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
