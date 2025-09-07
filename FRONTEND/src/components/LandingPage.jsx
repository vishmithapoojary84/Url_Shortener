// src/components/LandingPage.jsx
import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";

const features = [
  { icon: "🔗", title: "URL Shortener", desc: "Create sleek, shareable links instantly." },
  { icon: "📊", title: "Analytics", desc: "Track clicks and engagement in real-time." },
  { icon: "📱", title: "QR Generator", desc: "Turn links into scannable QR codes quickly." },
  { icon: "🛡️", title: "Secure Links", desc: "Your data is encrypted and safe." },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  const handleGetStarted = () => navigate({ to: "/auth" });
  const scrollToFeatures = () => featuresRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative w-full bg-black overflow-hidden min-h-screen mt-10">
      {/* Hero Section */}
      <div className="relative w-full min-h-[100vh] flex items-start justify-center pt-20">
        <Spline
          scene="https://prod.spline.design/JoRwcp08FecAjgia/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0"
        />
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Hero Text & Buttons */}
        <div className="absolute bottom-32 w-full flex flex-col items-center text-center px-6 md:px-12 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 mb-8 max-w-xl"
          >
            Simplify Your Links
          </motion.h1>

          <div className="flex gap-8 flex-wrap justify-center max-w-md w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="flex-grow px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold relative overflow-hidden shadow-lg"
            >
              Get Started
              <span className="absolute inset-0 bg-white/10 blur-lg opacity-0 hover:opacity-40 transition-opacity rounded-full"></span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFeatures}
              className="flex-grow px-5 py-3 rounded-full border-2 border-purple-500 text-purple-400 font-semibold relative overflow-hidden shadow-md"
            >
              Features
              <span className="absolute inset-0 bg-purple-600/10 blur-lg opacity-0 hover:opacity-30 transition-opacity rounded-full"></span>
            </motion.button>
          </div>
        </div>

        {/* Full-width scrolling watermark banner */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md z-20 overflow-hidden flex items-center">
          <motion.div
            className="whitespace-nowrap text-white font-semibold text-sm px-4"
            animate={{
              x: ["100%", "-100%"],
              y: [0, 5, 0], // subtle vertical floating
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            Welcome to Url Shortner — Simplifying links, generating QR codes, tracking analytics & securing your data! ✨
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="min-h-screen bg-black text-white px-6 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Powerful Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg hover:shadow-2xl transition-all text-center cursor-pointer"
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        &copy; 2025 Url Shortner. All rights reserved. Crafted with 💜 for fun projects.
      </footer>
    </div>
  );
};

export default LandingPage;
