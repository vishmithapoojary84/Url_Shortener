import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodePage = () => {
  const params = new URLSearchParams(window.location.search);
  const preFilledUrl = params.get("url") || "";

  const [url, setUrl] = useState(preFilledUrl);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (preFilledUrl) setShowQR(true); // Auto-generate QR if URL exists
  }, [preFilledUrl]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">QR Code Generator</h1>

        {!preFilledUrl && (
          <>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
              onClick={() => setShowQR(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
            >
              Generate QR
            </button>
          </>
        )}

        {showQR && url && (
          <div className="mt-6 flex flex-col items-center">
            <QRCodeCanvas value={url} size={200} />
            <p className="mt-3 text-sm text-gray-600 break-all">{url}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodePage;
