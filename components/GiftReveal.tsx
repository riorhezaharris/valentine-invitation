"use client";

import { motion } from "framer-motion";
import { Gift, MapPin, Clock, Sparkles } from "lucide-react";

export function GiftReveal() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-xl max-w-lg mx-auto text-center space-y-6 border border-white/50"
        >
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
                <Gift className="w-24 h-24 text-rose-500" />
            </motion.div>

            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-rose-600 font-cursive">It's a Date!</h2>
                <p className="text-gray-700 text-lg">I'm so happy you said yes!</p>
            </div>

            <div className="bg-white/60 p-6 rounded-xl w-full space-y-6 shadow-sm text-left">

                {/* Step 1: Dinner */}
                <div className="relative border-l-2 border-rose-300 pl-4 ml-2">
                    <div className="absolute -left-[9px] top-0 bg-rose-500 rounded-full p-1 border-2 border-white">
                        <Clock size={12} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">17:30 • The Start</p>
                    <h3 className="text-lg font-bold text-gray-800">Dinner at <a href="https://maps.app.goo.gl/TsiX9TvKagqkMJYu8" target="_blank" rel="noopener noreferrer" className="underline decoration-rose-300 underline-offset-2 hover:text-rose-600">PANTJA</a></h3>
                    <p className="text-sm text-gray-600 mt-1">
                        We start with their famous <strong className="text-rose-600">fried chicken 🍗</strong> and <strong className="text-rose-600">cocktails 🍹</strong>.
                        (Auto-approved by you ✅).
                    </p>
                </div>

                {/* Step 2: Pre-game */}
                <div className="relative border-l-2 border-rose-300 pl-4 ml-2">
                    <div className="absolute -left-[9px] top-0 bg-rose-400 rounded-full p-1 border-2 border-white">
                        <MapPin size={12} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Afterwards • The Vibe</p>
                    <h3 className="text-lg font-bold text-gray-800">Intermission at <a href="https://maps.app.goo.gl/EutxhnH2uSqvtMjJ8" target="_blank" rel="noopener noreferrer" className="underline decoration-rose-300 underline-offset-2 hover:text-rose-600">W Home Senopati</a></h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Just a stone's throw away. We'll head back for some intimate pre-drinks... and maybe get a little cozy? 😏🍷
                    </p>
                </div>

                {/* Step 3: Dancing */}
                <div className="relative border-l-2 border-rose-200 pl-4 ml-2 border-dashed">
                    <div className="absolute -left-[9px] top-0 bg-rose-300 rounded-full p-1 border-2 border-white">
                        <Sparkles size={12} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Late Night • The Finale</p>
                    <h3 className="text-lg font-bold text-gray-800">Dancing at <a href="https://maps.google.com/?q=The+Cocktail+Club+Jakarta" target="_blank" rel="noopener noreferrer" className="underline decoration-rose-300 underline-offset-2 hover:text-rose-600">The Cocktail Club</a></h3>
                    <p className="text-sm text-gray-600 mt-1">
                        We'll cap the night off by dancing like no one's watching. 💃🕺
                    </p>
                </div>

            </div>

            <div className="pt-2">
                <p className="text-2xl text-rose-600 font-cursive font-bold">So, are we locked in? Or do I need to send another invite? 😘</p>
            </div>
        </motion.div >
    );
}
