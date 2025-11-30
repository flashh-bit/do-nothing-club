"use client";

import * as React from "react";
// import { Switch } from "@/components/ui/Switch"; // Removed unused import
import { toast } from "sonner";
import { Zap, ZapOff } from "lucide-react";

export function ProductivityToggle() {
    const [isOn, setIsOn] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const handleToggle = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        setIsOn(!isOn);

        if (newCount === 1) {
            toast("Productivity Mode activated.", { description: "Just kidding. It does nothing." });
        } else if (newCount === 5) {
            toast("You really want to work, don't you?", { description: "Stop clicking this." });
        } else if (newCount === 10) {
            toast.error("Please leave.", { description: "You are vibrating with stress." });
        } else {
            toast("Mode switched.", { description: isOn ? "Back to lazy." : "Pretending to work." });
        }
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full shadow-soft">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {isOn ? "Productivity Mode" : "Lazy Mode"}
            </span>
            <button
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isOn ? "bg-foreground" : "bg-secondary"
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${isOn ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
        </div>
    );
}
