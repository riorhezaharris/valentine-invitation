"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FleeingButtonProps {
    onFlee?: () => void;
}

export function FleeingButton({ onFlee }: FleeingButtonProps) {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    const moveButton = () => {
        if (typeof window === "undefined") return;

        // Get viewport dimensions
        const maxX = window.innerWidth - 150; // Button width approx
        const maxY = window.innerHeight - 50; // Button height approx
        const minX = 50;
        const minY = 50;

        const newX = Math.random() * (maxX - minX) + minX;
        const newY = Math.random() * (maxY - minY) + minY;

        setPosition({ x: newX, y: newY });
        if (onFlee) onFlee();
    };

    const hasFled = position !== null;

    return (
        <motion.div
            className={`${hasFled ? "fixed z-50" : "relative inline-block"}`}
            animate={hasFled ? { left: position.x, top: position.y } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
        // When it hasn't fled, it sits in the flow. When it flees, it becomes fixed.
        // We need to handle the initial switch gracefully.
        // If we switch to fixed, it might jump.
        // Better strategy: Keep it fixed/absolute always? No, layout flow is good initially.
        // If we switch to fixed, we should probably set initial position to current rect.
        // But for simplicity, let's just accept a jump or try to handle it.
        // Actually, standard "No" buttons usually just switch to absolute/fixed.
        >
            <div
                className="absolute -inset-16 bg-transparent z-40"
                onMouseEnter={moveButton}
            />
            <button
                className="px-8 py-3 bg-gray-400 text-white rounded-full font-semibold shadow-md hover:bg-gray-500 transition-colors z-50 relative"
            >
                No
            </button>
        </motion.div>
    );
}
