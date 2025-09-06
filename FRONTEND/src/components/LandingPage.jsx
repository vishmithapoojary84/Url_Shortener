import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate({ to: '/auth' });
  };

  // SlideArrowButton inside LandingPage
  const SlideArrowButton = ({ text = "Get Started", primaryColor = "#6f3cff" }) => (
    <button
      onClick={handleGetStarted}
      className="group relative rounded-full border-white border-4 bg-white p-2 text-xl font-semibold mt-6"
    >
      <div
        className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-3 text-white transition-all duration-200 ease-in-out">
          ➔
        </span>
      </div>
      <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-black transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
        {text}
      </span>
    </button>
  );

  // Animated heading letters (no spaces between letters)
  const AnimatedText = ({ text, className }) => {
    return (
      <h1 className={`${className} flex`} style={{ display: 'inline-flex' }}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    );
  };

  // Animated paragraph (fade in words)
  const AnimatedParagraph = ({ text, className }) => {
    return (
      <p className={className}>
        {text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </p>
    );
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Spline 3D Scene */}
      <Spline 
        scene="https://prod.spline.design/JoRwcp08FecAjgia/scene.splinecode" 
        className="absolute inset-0"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white px-4">
        <AnimatedText 
          text="SimplifyYourURLsEffortlessly" 
          className="text-5xl font-bold mb-4"
        />
        <AnimatedParagraph
          text="Transform long, complex links into short, shareable URLs instantly. Track performance, generate QR codes, and enhance your digital workflow seamlessly."
          className="text-xl mb-6 max-w-xl"
        />

        <SlideArrowButton />
      </div>

      {/* Visual watermark cover */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '60px', 
          backgroundColor: 'black',
          zIndex: 20,
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
