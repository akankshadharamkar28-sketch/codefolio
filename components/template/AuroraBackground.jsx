"use client";

import { motion } from "framer-motion";


export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-sky-500/20 blur-[130px]"
      />

    </div>
  );
}