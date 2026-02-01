"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FleeingButtonProps {
    onFlee?: () => void;
}

export function FleeingButton({ onFlee }: FleeingButtonProps) {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
    const [isFalling, setIsFalling] = useState(false);

    // Check if device is likely mobile/touch
    const isTouchDevice = () => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(hover: none)").matches;
    };

    const moveButton = () => {
        if (typeof window === "undefined") return;
        if (isFalling) return;

        // If on mobile/touch, do NOTHING on hover/proximity (it's hard to trigger anyway)
        // We handle the tap interaction separately.
        if (isTouchDevice()) return;

        // Get viewport dimensions
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 50;
        const minX = 50;
        const minY = 50;

        const newX = Math.random() * (maxX - minX) + minX;
        const newY = Math.random() * (maxY - minY) + minY;

        setPosition({ x: newX, y: newY });
        if (onFlee) onFlee();
    };

    const handleMobileClick = () => {
        if (isTouchDevice()) {
            setIsFalling(true);
            if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(200); // Haptic feedback
            }
        }
    };

    const hasFled = position !== null;

    return (
        <motion.div
            className={`${hasFled && !isFalling ? "fixed z-50" : "relative inline-block"}`}
            animate={
                isFalling
                    ? { y: 1000, rotate: [0, 20, -20, 180], opacity: 0, transition: { duration: 5, ease: "easeIn" } }
                    : hasFled
                        ? { left: position.x, top: position.y }
                        : {}
            }
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
            <div
                className="absolute -inset-16 bg-transparent z-40 hidden md:block"
                onMouseEnter={moveButton}
            />
            <button
                onClick={handleMobileClick}
                className="px-8 py-3 bg-gray-400 text-white rounded-full font-semibold shadow-md hover:bg-gray-500 transition-colors z-50 relative"
            >
                {isFalling ? "Oops..." : "No"}
            </button>

            {/* Toast message for mobile users when it falls */}
            {isFalling && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg z-[60]"
                >
                    Oops! You broke the button. Guess it's a YES! 😉
                </motion.div>
            )}
        </motion.div>
    );
}
