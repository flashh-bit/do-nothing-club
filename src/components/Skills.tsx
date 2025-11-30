"use client";

import * as React from "react";
import { Bed, Cloud, Clock, Coffee, EyeOff, Sofa } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const skills = [
    {
        icon: Bed,
        title: "Advanced Napping",
        description: "Mastery of the 20-minute power nap and the 3-hour accidental slumber.",
        className: "bg-blue-100 hover:rounded-[2rem] hover:bg-blue-200 transition-all duration-300 rotate-1 hover:rotate-0",
        toastMessage: "You have successfully closed your eyes. See you in 4 hours.",
        toastDesc: "Nap initiated."
    },
    {
        icon: Cloud,
        title: "Daydreaming",
        description: "Getting lost in thought for hours without actually thinking about anything.",
        className: "bg-sky-100 hover:-translate-y-4 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 -rotate-1 hover:rotate-0",
        toastMessage: "You are now thinking about winning an imaginary argument.",
        toastDesc: "Reality disconnected."
    },
    {
        icon: Clock,
        title: "Procrastination",
        description: "Why do it today when you can panic about it next week?",
        className: "bg-orange-100 border-dashed border-4 border-black hover:border-solid cursor-wait rotate-2 hover:rotate-0",
        toastMessage: "We'll give you this award later.",
        toastDesc: "Maybe tomorrow. Or next week."
    },
    {
        icon: Coffee,
        title: "Slow Sipping",
        description: "Taking 45 minutes to drink a single cup of coffee while staring out a window.",
        className: "bg-amber-100 hover:rounded-full aspect-square flex flex-col justify-center -rotate-2 hover:rotate-0",
        toastMessage: "Sip complete. Please wait 20 minutes before next sip.",
        toastDesc: "Caffeine intake optimized."
    },
    {
        icon: EyeOff,
        title: "Ignoring Emails",
        description: "The inbox is a state of mind. If you don't look, it's empty.",
        className: "bg-red-100 group/email relative overflow-hidden rotate-1 hover:rotate-0",
        toastMessage: "Inbox marked as read. (It wasn't).",
        toastDesc: "Ignorance is bliss.",
        badge: true
    },
    {
        icon: Sofa,
        title: "Horizontal Living",
        description: "Finding the path of least resistance, usually involving a couch.",
        className: "bg-green-100 hover:scale-y-75 hover:origin-bottom transition-transform duration-300 -rotate-1 hover:rotate-0",
        toastMessage: "Gravity is your friend. You are now one with the floor.",
        toastDesc: "Verticality rejected."
    },
];

export function Skills() {
    const handleSkillClick = (skill: typeof skills[0]) => {
        toast(skill.toastMessage, {
            description: skill.toastDesc,
        });
    };

    return (
        <section id="skills" className="section-padding bg-secondary/30 border-b-3 border-black">
            <div className="container px-6 md:px-12">
                <div className="mb-16 max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-4 uppercase bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block px-6 py-2 rotate-1">
                        Core Competencies
                    </h2>
                    <p className="text-foreground text-xl font-bold mt-6 bg-accent inline-block px-4 py-1 border-2 border-black -rotate-1">
                        A curated set of non-activities we excel at.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-8 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group cursor-pointer relative",
                                skill.className
                            )}
                            onClick={() => handleSkillClick(skill)}
                        >
                            {skill.badge && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover/email:opacity-100 transition-opacity duration-300 animate-bounce">
                                    99+
                                </div>
                            )}

                            <div className="h-12 w-12 rounded-none bg-white border-2 border-black flex items-center justify-center mb-6 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <skill.icon size={24} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-black uppercase">{skill.title}</h3>
                            <p className="text-black font-bold leading-relaxed">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
