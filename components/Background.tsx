"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] sm:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(180deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
          color: "var(--foreground)"
        }}
      />

      {/* Animated Glow Blobs */}
      <div className="absolute inset-0 flex items-center justify-center filter blur-[80px] sm:blur-[120px] opacity-30">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[30rem] w-[30rem] rounded-full bg-emerald-500/20"
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          animate={{
            x: [0, -150, 50, 0],
            y: [0, 100, -100, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[35rem] w-[35rem] rounded-full bg-teal-500/10"
          style={{ bottom: "20%", right: "15%" }}
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 80, -80, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[25rem] w-[25rem] rounded-full bg-primary/10"
          style={{ top: "40%", right: "30%" }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Vignette / Edge Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.4)_100%)]" />
    </div>
  );
}
