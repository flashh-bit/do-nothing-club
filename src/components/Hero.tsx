"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
    const handleButtonClick = () => {
        toast.success("Success! You are now doing nothing.", {
            description: "Wait, clicking is doing something. Stop it.",
            duration: 4000,
        });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-secondary border-b-3 border-black">
            <div className="container px-6 md:px-12 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl space-y-8 bg-background p-8 md:p-12 border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.1] uppercase drop-shadow-[4px_4px_0px_rgba(255,107,107,1)]">
                        The Art of Doing <br className="hidden md:block" />
                        <span className="text-primary">Absolutely Nothing.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-black font-bold max-w-2xl mx-auto leading-relaxed border-2 border-black bg-white p-4 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Join the global movement of people who are currently lying down. We believe that productivity is overrated and that naps are essential.
                    </p>

                    <div className="pt-8">
                        <Button
                            size="lg"
                            className="text-xl px-10 py-6 rotate-2 hover:rotate-0 transition-transform"
                            onClick={handleButtonClick}
                        >
                            I'm Busy (Doing Nothing)
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-black animate-bounce bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full"
                >
                    <ArrowDown size={24} strokeWidth={3} />
                </motion.div>
            </div>
        </section>
    );
}
