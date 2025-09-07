// UserUrl.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUserUrls } from "../api/user.api";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ["userUrls"],
    queryFn: getAllUserUrls,
    refetchInterval: 30000,
    staleTime: 0,
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (url, id) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // 🔄 Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // ❌ Error state
  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
        Error loading your URLs: {error.message}
      </div>
    );
  }

  // 📭 Empty state
  if (!urls?.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-gray-400 my-6 p-6 bg-gray-900 rounded-xl border border-gray-700">
        <svg
          className="w-12 h-12 mx-auto text-gray-500 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <p className="text-lg font-medium">No URLs found</p>
        <p className="mt-1 text-sm">You haven't created any shortened URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* ✨ Glowing Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]"
      >
        Your Shortened URLs
      </motion.h1>

      {/* 📋 URL Table */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-black shadow-lg shadow-indigo-800/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-900/50">
              <tr>
                {["Original URL", "Short URL", "Clicks", "Copy"].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-4 text-left text-sm font-semibold uppercase text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {urls.urls
                .slice()
                .reverse()
                .map((url) => (
                  <motion.tr
                    key={url._id}
                    className="hover:bg-gray-900/60 transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Original URL */}
                    <td className="px-6 py-4 text-sm text-gray-300 truncate max-w-xs">
                      {url.full_url}
                    </td>

                    {/* Shortened URL */}
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={`http://localhost:3000/${url.short_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:underline"
                      >
                        {`localhost:3000/${url.short_url}`}
                      </a>
                    </td>

                    {/* Clicks */}
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-900/40 text-indigo-300">
                        {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                      </span>
                    </td>

                    {/* Copy Button */}
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() =>
                          handleCopy(`http://localhost:3000/${url.short_url}`, url._id)
                        }
                        className="p-2 rounded-lg hover:bg-gray-800 transition"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {copiedId === url._id ? (
                            <motion.span
                              key="check"
                              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                              animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{
                                duration: 0.3,
                                type: "spring",
                                stiffness: 300,
                              }}
                            >
                              <Check className="h-5 w-5 text-green-500" />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="copy"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Copy className="h-5 w-5 text-gray-400" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserUrl;
