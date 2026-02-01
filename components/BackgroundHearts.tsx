"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function BackgroundHearts() {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", opacity: 0 }}
                    animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    className="absolute text-pink-300/40"
                    style={{ left: `${heart.left}%` }}
                >
                    <Heart size={Math.random() * 30 + 20} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
}
