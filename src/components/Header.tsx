"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Manifesto", href: "#about" },
        { name: "Activities", href: "#skills" },
        { name: "Unfinished", href: "#projects" },
        { name: "Nap", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background border-b-3 border-black">
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Left-aligned Logo */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-foreground hover:text-primary transition-colors uppercase -rotate-2">
                    The Do Nothing Club.
                </Link>

                {/* Desktop Nav - Right Aligned */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-bold text-foreground hover:bg-secondary px-3 py-1 rounded-sm border-2 border-transparent hover:border-black transition-all hover:-rotate-1"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground border-2 border-black bg-secondary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden border-l-3 border-black">
                    <nav className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-black text-foreground hover:text-primary transition-colors uppercase"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
