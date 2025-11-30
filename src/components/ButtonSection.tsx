"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Send, Download, Settings, Plus } from "lucide-react";

export function ButtonSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Elements</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Clean, modern buttons with soft shadows and smooth hover effects.
                        Designed for a premium feel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto items-center justify-items-center">
                    {/* Primary */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Primary</span>
                        <Button>Primary Action</Button>
                    </div>

                    {/* Secondary */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Secondary</span>
                        <Button variant="secondary">Secondary Action</Button>
                    </div>

                    {/* Outlined */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Outline</span>
                        <Button variant="outline">Outline Action</Button>
                    </div>

                    {/* Icon + Text */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Icon + Text</span>
                        <Button>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </Button>
                    </div>

                    {/* Icon Only */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Icon Only</span>
                        <div className="flex gap-2">
                            <Button size="icon" variant="secondary">
                                <Plus className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="outline">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Loading State */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground mb-2">Loading State</span>
                        <Button isLoading>Please wait</Button>
                    </div>
                </div>

                {/* Full Width Mobile */}
                <div className="mt-12 max-w-md mx-auto md:hidden">
                    <span className="block text-sm text-muted-foreground mb-4 text-center">Full Width (Mobile)</span>
                    <Button className="w-full" size="lg">
                        <Download className="mr-2 h-4 w-4" />
                        Download App
                    </Button>
                </div>
            </div>
        </section>
    );
}
