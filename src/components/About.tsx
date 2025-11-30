"use client";

import * as React from "react";
import { Moon } from "lucide-react";

export function About() {
    return (
        <section id="about" className="section-padding bg-background border-b-3 border-black">
            <div className="container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div className="order-2 md:order-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase bg-secondary inline-block px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                            Our Philosophy
                        </h2>
                        <div className="space-y-4 text-foreground text-xl leading-relaxed font-bold border-l-4 border-primary pl-6">
                            <p>
                                We believe in the power of the pause. In a world that never stops, we are the ones who hit snooze. We champion the art of stillness, the beauty of boredom, and the necessity of naps.
                            </p>
                            <p>
                                Our mission is simple: To do less, better. We are committed to underachieving in the most spectacular way possible.
                            </p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-accent border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 flex items-center justify-center">
                            {/* Placeholder for sleeping cat or empty chair */}
                            <div className="absolute inset-0 flex items-center justify-center text-foreground">
                                <Moon size={80} strokeWidth={2.5} className="animate-pulse" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white text-black border-2 border-black px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                Fig 1. The Goal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
