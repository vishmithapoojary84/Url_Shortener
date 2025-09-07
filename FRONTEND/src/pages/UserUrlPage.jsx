// src/pages/UserUrlPage.jsx
import React from "react";
import UserUrl from "../components/UserUrl";

const UserUrlPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-24 p-4 text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-5xl">
       
        <UserUrl />
      </div>
    </div>
  );
};

export default UserUrlPage;
