import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

const QRCodePage = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [showQR, setShowQR] = useState(false);
  const [qrColor, setQrColor] = useState("#ffffff"); // White QR color

  const handleGenerate = () => {
    if (url.trim() !== "") setShowQR(true);
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qr-canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md text-center"
      >
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]">
          QR Code Generator
        </h1>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-200"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGenerate}
          className="w-full py-3 rounded-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-4 transition-all"
        >
          Generate QR
        </motion.button>

        {showQR && url && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-inner"
          >
            <QRCodeCanvas
              id="qr-canvas"
              value={url}
              size={200}
              fgColor={qrColor} // QR color
              bgColor="#1f2937" // Dark background color
            />
            <p className="mt-3 text-white text-sm break-all">{url}</p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownload}
              className="mt-4 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-4 transition-all"
            >
              Download QR
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};




export default QRCodePage;
