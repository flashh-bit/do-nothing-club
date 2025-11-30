"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const projects = [
    {
        title: "The Novel I Started in 2018",
        description: "It has a great first sentence. I'm letting it marinate.",
        link: "#",
        color: "bg-pink-200"
    },
    {
        title: "Gym Membership (Unused)",
        description: "A monthly donation to a local business I never visit.",
        link: "#",
        color: "bg-green-200"
    },
    {
        title: "Duolingo Streak (Lost)",
        description: "I missed one day and decided to give up on French forever.",
        link: "#",
        color: "bg-yellow-200"
    },
    {
        title: "Meditation App Subscription",
        description: "I use it to fall asleep, which counts as mindfulness, right?",
        link: "#",
        color: "bg-purple-200"
    },
];

export function Projects() {
    const handleProjectClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.error("Error: Motivation not found.", {
            description: "We couldn't load this project because you never finished it. Try again tomorrow.",
        });
    };

    return (
        <section id="projects" className="section-padding bg-background border-b-3 border-black">
            <div className="container px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-4 uppercase bg-secondary border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block px-6 py-2 -rotate-1">
                            Unfinished Business
                        </h2>
                        <p className="text-foreground text-xl font-bold mt-4 border-l-4 border-black pl-4">
                            A collection of things I meant to do but didn't.
                        </p>
                    </div>
                    <Link href="#" className="hidden md:flex items-center text-lg font-bold hover:underline underline-offset-4 bg-white text-black px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
                        View All Failures <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            className="group block"
                            onClick={handleProjectClick}
                        >
                            <div className={`relative aspect-[4/3] ${project.color} border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 flex items-center justify-center group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-foreground text-5xl font-black opacity-20 rotate-12">Fig. {index + 1}</span>
                                </div>
                                <div className="absolute top-4 left-4 bg-white text-black border-2 border-black px-2 py-1 font-bold text-xs uppercase">
                                    Status: Abandoned
                                </div>
                            </div>
                            <div className="flex items-start justify-between bg-white text-black border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 group-hover:rotate-0 transition-transform">
                                <div>
                                    <h3 className="text-2xl font-black text-black mb-1 uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-black font-medium">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-primary text-white p-1 border-2 border-black">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link href="#" className="inline-flex items-center text-lg font-bold bg-white text-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        View All Failures <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
