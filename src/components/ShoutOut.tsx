"use client";

import * as React from "react";
import { Heart } from "lucide-react";

export function ShoutOut() {
    return (
        <div className="hidden md:block fixed bottom-20 left-4 z-30 max-w-xs">
            <div className="bg-white border-3 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-1">
                    <Heart size={16} className="text-primary fill-primary" />
                    <span className="text-xs font-black uppercase tracking-wider text-black">Shoutout</span>
                </div>
                <p className="text-black font-bold text-sm">
                    Special thanks to <span className="text-primary">Nobody</span> for inspiring this beautiful chaos! 💤
                </p>
            </div>
        </div>
    );
}
