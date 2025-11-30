"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function ExitIntentModal() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [hasShown, setHasShown] = React.useState(false);

    React.useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    const handleStay = () => {
        setIsVisible(false);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-background border border-border p-8 rounded-xl shadow-soft max-w-md w-full mx-6 text-center space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-medium">Wait! Are you going to... work?</h2>
                        <p className="text-muted-foreground font-light">
                            Don't do it. The emails can wait. Stay here and do nothing with us.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button size="lg" onClick={handleStay} className="w-full">
                            No, I'll stay and rot
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setIsVisible(false)}
                            className="w-full text-muted-foreground hover:text-foreground"
                        >
                            Yes, I'm boring (Close)
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
