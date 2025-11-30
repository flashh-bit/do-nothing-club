"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";

const LAZY_PHRASES = [
    "Meh.",
    "Why?",
    "Ugh.",
    "Later.",
    "Too much effort.",
    "Sigh.",
    "Do I have to?",
    "Boring.",
    "Nap time?",
    "Whatever.",
];

export function LazySoundboard() {
    const [isMuted, setIsMuted] = React.useState(false);

    const speak = React.useCallback((text: string) => {
        if (isMuted || typeof window === "undefined") return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8; // Slow speech
        utterance.pitch = 0.8; // Low pitch (lazy)
        utterance.volume = 0.5;

        // Try to find a lazy-sounding voice
        const voices = window.speechSynthesis.getVoices();
        const lazyVoice = voices.find(v => v.name.includes("Google US English")) || voices[0];
        if (lazyVoice) utterance.voice = lazyVoice;

        window.speechSynthesis.speak(utterance);
    }, [isMuted]);

    React.useEffect(() => {
        const handleClick = () => {
            // 30% chance to speak on any click
            if (Math.random() > 0.7) {
                const phrase = LAZY_PHRASES[Math.floor(Math.random() * LAZY_PHRASES.length)];
                speak(phrase);
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [speak]);

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white hover:bg-gray-100"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? "Unmute lazy sounds" : "Mute lazy sounds"}
            >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </Button>
        </div>
    );
}
