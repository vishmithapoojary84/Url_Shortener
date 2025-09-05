import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from '@tanstack/react-router';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate({ to: '/auth' }); // navigate to login page
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Spline 3D Scene */}
      <Spline 
        scene="https://prod.spline.design/JoRwcp08FecAjgia/scene.splinecode" 
        className="absolute inset-0"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to URL Shortener</h1>
        <p className="text-lg mb-6">Experience interactive 3D content powered by Spline</p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Get Started
        </button>
      </div>

      {/* Visual watermark cover */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '60px', // adjust if needed
          backgroundColor: 'black',
          zIndex: 20,
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
