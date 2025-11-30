"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export function Contact() {
    const [buttonText, setButtonText] = React.useState("Send (Disabled)");

    const handleFocus = () => {
        toast.warning("Warning: Typing burns calories.", {
            description: "Proceed with caution. We recommend taking a break immediately.",
        });
    };

    const handleButtonHover = () => {
        setButtonText("Nah");
    };

    const handleButtonLeave = () => {
        setButtonText("Send (Disabled)");
    };

    return (
        <section id="contact" className="section-padding bg-background border-b-3 border-black">
            <div className="container px-6 md:px-12 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6 uppercase bg-destructive text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block px-6 py-2 rotate-2">
                    Don't Contact Us
                </h2>
                <p className="text-black text-xl font-bold mb-12 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                    We are probably napping. If it's urgent, please take a deep breath and realize it's probably not that urgent.
                </p>

                <form className="space-y-8 text-left bg-secondary p-8 border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-lg font-black text-foreground uppercase">
                                Name (Optional)
                            </label>
                            <input
                                id="name"
                                className="w-full bg-white border-3 border-black py-3 px-4 text-black placeholder:text-gray-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                                placeholder="Who cares?"
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-lg font-black text-foreground uppercase">
                                Email (Don't check it)
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-white border-3 border-black py-3 px-4 text-black placeholder:text-gray-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                                placeholder="nope@example.com"
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-lg font-black text-foreground uppercase">
                            Message (Will be ignored)
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-white border-3 border-black py-3 px-4 text-black placeholder:text-gray-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none font-bold"
                            placeholder="Type your complaints here..."
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className="pt-4 text-center">
                        <Button
                            size="lg"
                            className="rounded-none px-12 py-6 text-xl min-w-[240px] rotate-1 hover:rotate-0"
                            disabled
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
