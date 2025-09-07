import React from 'react';
import UrlForm from '../components/UrlForm';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-20 p-4">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-xl w-full max-w-4xl flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]">
            URL Shortener
          </h1>

          {/* URL Form */}
          <UrlForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
