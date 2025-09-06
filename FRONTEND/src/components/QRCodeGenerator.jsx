// src/components/QRCodeGenerator.jsx
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = () => {
    if (url.trim() !== "") {
      setShowQR(true);
    }
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qr-canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">QR Code Generator</h1>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />

        <button
          onClick={handleGenerate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
        >
          Generate QR
        </button>

        {showQR && (
          <div className="mt-6 flex flex-col items-center">
            <QRCodeCanvas id="qr-canvas" value={url} size={200} />
            <p className="mt-3 text-sm text-gray-600 break-all">{url}</p>
            <button
              onClick={downloadQR}
              className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            >
              Download QR
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
