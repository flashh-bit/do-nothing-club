import * as React from "react";
import { Zap, Shield, Smartphone, Globe, Layers, Smile } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed and performance. Your site loads in milliseconds.",
    },
    {
        icon: Shield,
        title: "Secure by Default",
        description: "Built with security best practices to keep your data safe and sound.",
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive design that looks amazing on every device, from phone to desktop.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Ready for international audiences with built-in localization support.",
    },
    {
        icon: Layers,
        title: "Scalable Architecture",
        description: "Designed to grow with your business, handling traffic spikes with ease.",
    },
    {
        icon: Smile,
        title: "User Friendly",
        description: "Intuitive interfaces that delight your users and improve engagement.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We provide the tools you need to build modern, high-quality websites.
                        Simple, powerful, and effective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-soft transition-all duration-300 group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
