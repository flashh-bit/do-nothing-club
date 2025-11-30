"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-background border border-border p-6 rounded-lg shadow-soft z-50 flex flex-col gap-4"
            >
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary rounded-full">
                        <Cookie size={24} />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">We use cookies.</h3>
                        <p className="text-sm text-muted-foreground font-light">
                            Not the digital kind. Actual chocolate chip cookies. We ate them all. You get none.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsVisible(false)}
                        className="w-full md:w-auto"
                    >
                        I am jealous
                    </Button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
