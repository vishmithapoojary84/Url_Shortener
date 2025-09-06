import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export default function LoaderPage() {
  const icons = ["🔗", "📱", "✨", "💠", "🔎"];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* styles for shimmer and tiny particle */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.08) 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 2.8s linear infinite;
        }

        .particle {
          filter: blur(6px);
          opacity: 0.85;
        }

      `}</style>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "50% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        style={{
          background: "linear-gradient(120deg,#06b6d4,#7c3aed,#ec4899,#f59e0b)",
          backgroundSize: "400% 400%",
          opacity: 0.75,
          mixBlendMode: "overlay",
        }}
      />

      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute particle bg-white/60 rounded-full`}
          style={{ width: `${2 + Math.random() * 5}px`, height: `${2 + Math.random() * 5}px`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30 - Math.random() * 60, 0], x: [0, Math.random() * 40 - 20, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ repeat: Infinity, duration: 6 + Math.random() * 6, delay: Math.random() * 2 }}
        />
      ))}

      {/* floating brand icons */}
      {icons.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl select-none"
          style={{ top: `${10 + (i * 18) % 80}%`, left: `${8 + (i * 28) % 85}%`, opacity: 0.9 }}
          animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 7 + i, ease: "easeInOut", delay: i * 0.2 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Center block */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        {/* glossy morphing 'QR cube' with dummy QR */}
        <motion.div
          className="relative w-56 h-56 rounded-2xl bg-white/6 border border-white/20 shadow-2xl flex items-center justify-center"
          animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, -6, 6, 0], scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ backdropFilter: "blur(6px)" }}
        >
          {/* Dummy QR Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white"
          >
            <QrCode size={120} strokeWidth={1.5} />
          </motion.div>

          {/* glow ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{ boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 12px 30px rgba(255,255,255,0.12)",
              "0 0 0px rgba(255,255,255,0)"
            ] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Gradient shimmer title */}
        <motion.h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 shimmer z-30">
          Generating Your Short Link & QR Code
        </motion.h1>

        {/* Subtext with subtle animation */}
        <motion.p className="text-sm md:text-base text-white/85 z-30 max-w-xl text-center" animate={{ y: [0, -6, 0], opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
          Fast, secure, and trackable — your short link will be ready shortly.
        </motion.p>

        {/* Action placeholder showing progress dots */}
        <motion.div className="flex gap-2 mt-2" aria-hidden>
          {[0, 1, 2].map((n) => (
            <motion.div
              key={n}
              className="w-3 h-3 rounded-full bg-white/75"
              animate={{ y: [0, -8, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.9, delay: n * 0.15 }}
            />
          ))}
        </motion.div>
      </div>

      {/* bottom subtle note */}
      <motion.div className="absolute bottom-6 text-xs text-white/70 w-full text-center z-10" animate={{ opacity: [0.7, 0.95, 0.7] }} transition={{ repeat: Infinity, duration: 4 }}>
        Tip: You can customize the short link or download the QR once ready.
      </motion.div>
    </div>
  );
}
