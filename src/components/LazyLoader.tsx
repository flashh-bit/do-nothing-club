"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_MESSAGES = [
    "Finding motivation...",
    "Thinking about loading...",
    "Napping...",
    "Almost there (not really)...",
    "Negotiating with pixels...",
    "Sighing heavily...",
    "Loading... maybe...",
];

export function LazyLoader() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const [message, setMessage] = React.useState(LOADING_MESSAGES[0]);

    React.useEffect(() => {
        // Simulate lazy loading
        const interval = setInterval(() => {
            setProgress((prev) => {
                // Sometimes go backwards because we're lazy
                const change = Math.random() > 0.8 ? -5 : Math.random() * 15;
                const newProgress = Math.min(prev + change, 100);

                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return Math.max(0, newProgress);
            });

            // Change message occasionally
            if (Math.random() > 0.7) {
                setMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background border-b-4 border-black"
                >
                    <div className="w-full max-w-md px-8 text-center space-y-6">
                        <h2 className="text-4xl font-black uppercase text-foreground animate-pulse">
                            {message}
                        </h2>

                        <div className="relative h-8 w-full border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                style={{ width: `${progress}%` }}
                                transition={{ type: "spring", stiffness: 50 }}
                            />
                        </div>

                        <p className="text-muted-foreground font-bold">
                            {Math.round(progress)}% Effort Expended
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
