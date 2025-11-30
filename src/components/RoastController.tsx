"use client";

import * as React from "react";
import { toast } from "sonner";
import { motion, useScroll, useSpring } from "framer-motion";

export function RoastController() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 1. Overachiever Detector (Scroll Speed)
    React.useEffect(() => {
        let lastScrollY = window.scrollY;
        let lastTime = Date.now();
        let speed = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTime;
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);

            if (timeDiff > 0) {
                speed = scrollDiff / timeDiff;
                if (speed > 3.5) { // Threshold for "too fast"
                    toast("Slow down, Flash.", {
                        description: "We don't do cardio here.",
                        id: "scroll-roast", // Prevent duplicate toasts
                    });
                }
            }

            lastScrollY = currentScrollY;
            lastTime = currentTime;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Passive-Aggressive Tab Title
    React.useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "💤 Come back and nap...";
            } else {
                document.title = "The Do Nothing Club";
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    // 3. Rage Click Monitor
    React.useEffect(() => {
        let clickCount = 0;
        let clickTimer: NodeJS.Timeout;

        const handleClick = () => {
            clickCount++;
            clearTimeout(clickTimer);

            if (clickCount >= 4) {
                toast.error("Stop clicking so hard.", {
                    description: "You'll wake up the pixels.",
                    id: "rage-click",
                });
                clickCount = 0;
            }

            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 1000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    // 4. Anti-Selection Roast
    React.useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (selection && selection.toString().length > 10) {
                toast("Why are you highlighting?", {
                    description: "That looks like work. Stop it.",
                    id: "selection-roast",
                });
            }
        };

        document.addEventListener("selectionchange", handleSelection);
        return () => document.removeEventListener("selectionchange", handleSelection);
    }, []);

    return (
        <>
            {/* 5. Energy Depletion Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50">
                <motion.div
                    className="h-full bg-foreground origin-left"
                    style={{ scaleX }} // Inverted logic: it grows as you scroll, representing "effort expended"
                />
            </div>
        </>
    );
}
