import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Intro: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const glitchVariants = {
    glitch: {
      x: [-2, 2, -2, 2, 0],
      textShadow: [
        "2px 0 #ff0000, -2px 0 #00ffff",
        "-2px 0 #ff0000, 2px 0 #00ffff",
        "2px 0 #ff0000, -2px 0 #00ffff",
        "0 0 10px #ffffff",
        "0 0 20px #ffffff",
      ],
      transition: {
        duration: 0.3,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const scanlineVariants = {
    scan: {
      y: [-200, 400],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    expand: {
      scale: [0, 20],
      opacity: [0.8, 0],
      transition: {
        duration: 2,
        delay: 1.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
          variants={scanlineVariants}
          animate="scan"
          style={{ filter: "blur(1px)" }}
        />

        {/* Main Logo */}
        <motion.div className="relative z-10 text-center">
          <motion.div className="flex items-center justify-center space-x-8">
            {/* First YAP */}
            <motion.div className="flex">
              {"YAP".split("").map((letter, i) => (
                <motion.span
                  key={`yap1-${i}`}
                  className="text-9xl font-black text-white tracking-wider select-none"
                  style={{
                    fontFamily: "Arial Black, sans-serif",
                    textShadow: "0 0 30px rgba(255,255,255,0.5)",
                  }}
                  variants={letterVariants}
                  custom={i}
                  whileHover={{ scale: 1.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Separator Pulse */}
            <motion.div
              className="w-2 h-20 bg-white"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 0.5, 1],
                opacity: [0, 1, 0.7, 1],
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,1)",
                ],
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                times: [0, 0.3, 0.6, 1],
              }}
            />

            {/* Second YAP */}
            <motion.div className="flex">
              {"YAP".split("").map((letter, i) => (
                <motion.span
                  key={`yap2-${i}`}
                  className="text-9xl font-black text-white tracking-wider select-none"
                  style={{
                    fontFamily: "Arial Black, sans-serif",
                    textShadow: "0 0 30px rgba(255,255,255,0.5)",
                  }}
                  variants={letterVariants}
                  custom={i + 3}
                  whileHover={{ scale: 1.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Glitch Effect on whole logo */}
          <motion.div
            className="absolute inset-0"
            variants={glitchVariants}
            animate="glitch"
          />
        </motion.div>

        {/* Expanding Circle */}
        <motion.div
          className="absolute w-4 h-4 border-2 border-white rounded-full"
          variants={circleVariants}
          animate="expand"
        />

        {/* Corner Brackets */}
        {[
          { top: "20px", left: "20px", rotate: 0 },
          { top: "20px", right: "20px", rotate: 90 },
          { bottom: "20px", right: "20px", rotate: 180 },
          { bottom: "20px", left: "20px", rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 border-t-2 border-l-2 border-white"
            style={{
              ...pos,
              transform: `rotate(${pos.rotate}deg)`,
              transformOrigin: "center",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 1.2],
            }}
            transition={{
              duration: 1.5,
              delay: 1 + i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Particle Burst */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.cos((i * 45 * Math.PI) / 180) * 150,
              y: Math.sin((i * 45 * Math.PI) / 180) * 150,
            }}
            transition={{
              duration: 1.2,
              delay: 1.6,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Loading Bar */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gray-800"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 256 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
