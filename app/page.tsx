"use client";

import { useState } from "react";
import { BackgroundHearts } from "@/components/BackgroundHearts";
import { FleeingButton } from "@/components/FleeingButton";
import { GiftReveal } from "@/components/GiftReveal";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleYes = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    setAccepted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <BackgroundHearts />

      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="z-10 text-center space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600 font-cursive leading-tight py-2 drop-shadow-sm">
                Will you be my Valentine?
              </h1>
              <p className="text-lg md:text-xl text-stone-600 italic font-medium">
                (I dare you to try and click No... <span className="not-italic">😉</span>)
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(244, 63, 94, 0.4)",
                    "0 0 0 20px rgba(244, 63, 94, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                  },
                }}
                onClick={handleYes}
                className="px-10 py-4 bg-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-rose-600 transition-colors cursor-pointer"
              >
                YES!
              </motion.button>

              <FleeingButton />
            </div>
          </motion.div>
        ) : (
          <motion.div key="reveal" className="z-10 w-full">
            <GiftReveal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
