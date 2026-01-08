"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
    {
        id: 1,
        value: 3,
        suffix: "+",
        label: "YEARS EXPERIENCE",
        color: "text-primary",
    },
    {
        id: 2,
        value: 100,
        suffix: "+",
        label: "VISAS GRANTED",
        color: "text-secondary",
    },
    {
        id: 3,
        value: 98,
        suffix: "%",
        label: "SUCCESS RATE",
        color: "text-primary",
    },
    {
        id: 4,
        value: 4,
        suffix: "+",
        label: "MAJOR DESTINATIONS",
        color: "text-secondary",
    },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        duration: 1500,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return (
        <div className={`text-4xl md:text-5xl font-bold mb-2 ${color} font-heading`}>
            <span ref={ref}>0</span>
            {suffix}
        </div>
    );
}

export default function Stats() {
    return (
        <section className="py-12 bg-white shadow-sm border-b border-gray-100 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center justify-center text-center ${index !== stats.length - 1 ? "md:border-r md:border-gray-200" : ""
                                }`}
                        >
                            <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                            <div className="text-xs md:text-sm font-bold text-gray-500 tracking-widest uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
