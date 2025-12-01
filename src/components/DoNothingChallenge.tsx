"use client";

import * as React from "react";
import { toast } from "sonner";
import { Trophy, Flame } from "lucide-react";

export function DoNothingChallenge() {
    const [time, setTime] = React.useState(0);
    const [highScore, setHighScore] = React.useState(0);
    const lastMoveTime = React.useRef(Date.now());

    // Load high score on mount
    React.useEffect(() => {
        const saved = localStorage.getItem("doNothingHighScore");
        if (saved) setHighScore(parseInt(saved));
    }, []);

    React.useEffect(() => {
        const handleActivity = () => {
            const now = Date.now();
            // Debounce slightly
            if (now - lastMoveTime.current > 100) {
                if (time > 5) {
                    toast.error("You moved! Score reset.", {
                        description: `You did nothing for ${time} seconds. Weak.`,
                    });
                }

                // Update high score if needed
                if (time > highScore) {
                    setHighScore(time);
                    localStorage.setItem("doNothingHighScore", time.toString());
                    if (time > 5) {
                        toast.success("New High Score!", { icon: <Flame className="text-orange-500" /> });
                    }
                }

                setTime(0);
                lastMoveTime.current = now;
            }
        };

        window.addEventListener("mousemove", handleActivity);
        window.addEventListener("click", handleActivity);
        window.addEventListener("keydown", handleActivity);
        window.addEventListener("scroll", handleActivity);

        const interval = setInterval(() => {
            if (Date.now() - lastMoveTime.current > 1000) {
                setTime((prev) => prev + 1);
            }
        }, 1000);

        return () => {
            window.removeEventListener("mousemove", handleActivity);
            window.removeEventListener("click", handleActivity);
            window.removeEventListener("keydown", handleActivity);
            window.removeEventListener("scroll", handleActivity);
            clearInterval(interval);
        };
    }, [time, highScore]);

    // Award achievements
    React.useEffect(() => {
        if (time === 10 && time > highScore) {
            toast.success("Achievement: Beginner Loafer", { icon: <Trophy size={16} /> });
        } else if (time === 30 && time > highScore) {
            toast.success("Achievement: Professional Napper", { icon: <Trophy size={16} /> });
        } else if (time === 60 && time > highScore) {
            toast.success("Achievement: Zen Master", { icon: <Trophy size={16} /> });
        }
    }, [time, highScore]);

    return (
        <div className="hidden md:flex fixed top-24 right-4 z-40 flex-col items-end gap-2 pointer-events-none select-none">
            {/* Main Timer */}
            <div className="bg-white border-3 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black flex items-center gap-3 rotate-1 animate-in slide-in-from-right duration-500">
                <div className={`w-3 h-3 rounded-full border-2 border-black ${time > 0 ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                <span className="uppercase tracking-tight">Doing Nothing: {time}s</span>
            </div>

            {/* High Score (only show if > 0) */}
            {highScore > 0 && (
                <div className="bg-secondary border-3 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-xs text-black -rotate-1">
                    Best: {highScore}s
                </div>
            )}
        </div>
    );
}
