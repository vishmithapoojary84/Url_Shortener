import React, { useState } from 'react';
import axios from 'axios';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { createShortUrl } from '../api/short_url.api';

const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async () => {

    setCopied(false);
//createshorturl is from *api short_url
      const shorturl = await createShortUrl(url);
      setShortUrl(shorturl);

  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Shorten URL
      </button>
      {error && <p className="text-red-600 mt-2 font-semibold">{error}</p>}
      {shortUrl && (
  <div className="relative mt-6 max-w-xl w-full">
  <label htmlFor="shortUrl" className="block text-sm font-medium text-gray-700 mb-1">
    Your shortened URL:
  </label>
  <input
    id="shortUrl"
    type="text"
    readOnly
    value={shortUrl}
    className="w-full pr-14 py-2 pl-4 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"

  />
<button
  onClick={handleCopy}
  aria-label="Copy shortened URL"
  className={`absolute top-1/2 right-1 -translate-y-1/5 p-0 rounded-md bg-gray-50 text-gray-400 transition-colors duration-200 
    hover:text-gray-600 focus:outline-none focus:ring-0`}
  style={{ 
    height: '32px', 
    width: '32px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}
>
  {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
</button>

</div>


      )}
    </div>
  );
};

export default UrlForm;
