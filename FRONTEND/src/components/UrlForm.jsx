import React, { useState } from 'react';
import { createShortUrl } from '../api/short_url.api';
import { useSelector } from 'react-redux';
import { QueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

const UrlForm = () => {
  const [url, setUrl] = useState('https://www.example.com');
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState('');
  const { isAuthenticated } = useSelector((state) => state.auth);
  const queryClient = new QueryClient();

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customSlug);
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md"
    >
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 p-2 bg-red-100 text-red-700 rounded-xl text-center text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Original URL input */}
      <div className="mb-3">
        <label className="block text-gray-300 text-sm font-medium mb-1">Enter your URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-3 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none text-sm"
          required
        />
      </div>

      {/* Custom URL (optional) */}
      {isAuthenticated && (
        <div className="mb-3">
          <label className="block text-gray-300 text-sm font-medium mb-1">Custom URL (optional)</label>
          <input
            type="text"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-3 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none text-sm"
          />
        </div>
      )}

      {/* Shorten Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleSubmit}
        className="w-full py-2.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 text-white text-sm transition-all mb-3"
      >
        Shorten URL
      </motion.button>

      {/* Shortened URL */}
      {shortUrl && (
        <div className="mt-4">
          <label className="block text-gray-300 text-sm font-medium mb-1">Your Shortened URL</label>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 px-3 py-2 rounded-l-xl bg-gray-800 text-white border border-gray-700 text-sm"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-2 rounded-r-xl bg-gray-800 border border-gray-700 flex items-center justify-center"
            >
              {copied ? (
                <CheckIcon className="h-5 w-5 text-indigo-400" />
              ) : (
                <ClipboardIcon className="h-5 w-5 text-gray-300 hover:text-indigo-400" />
              )}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default UrlForm;
