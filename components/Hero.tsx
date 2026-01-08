"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const slides = [
    {
        id: 1,
        image: "/hero-visa-success.png",
        title: "Visa Approval Simplified",
        subtitle: "Navigate complex visa regulations with our 98% success rate. We handle the paperwork so you can focus on your dreams.",
        badge: "HIGH SUCCESS RATE",
    },
    {
        id: 2,
        image: "/hero-global-opportunities.png",
        title: "Global Opportunities Await",
        subtitle: "Explore Study and Work opportunities in top destinations. Your bridge to a brighter future starts here.",
        badge: "WORK & STUDY ABROAD",
    },
    {
        id: 3,
        image: "/hero-expert-guidance.png",
        title: "Expert Guidance Every Step",
        subtitle: "From application to arrival, our expert consultants provide the support you need for a smooth journey.",
        badge: "TRUSTED CONSULTANTS",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-black font-sans">
            {/* Background Images with Carousel Effect */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    {/* Dark Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <motion.div
                    key={`content-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-2xl text-white flex flex-col items-center md:items-start"
                >
                    {/* Badge */}
                    <div className="inline-block border border-red-500/50 bg-red-900/20 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                        <span className="text-xs font-bold tracking-wider text-red-200 uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            {slides[currentSlide].badge}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        {slides[currentSlide].title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                        {slides[currentSlide].subtitle}
                    </p>

                    {/* CTA Button */}
                    <button className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-xl shadow-red-500/30 group">
                        Talk to an Expert
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 text-white hidden md:flex items-center gap-2 animate-bounce">
                <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
                <FaArrowDown className="text-xs" />
            </div>
        </div>
    );
}
