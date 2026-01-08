"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const destinations = [
    {
        id: 1,
        name: "Australia",
        code: "AU",
        image: "/hero-australia.png",
        badge: "MOST POPULAR",
        badgeColor: "bg-yellow-500",
        description: "World-class education, vibrant cities, and incredible post-study work opportunities. Experience the laid-back lifestyle while earning a globally recognized degree.",
        features: ["40+ Universities", "Post-Study Work Visa"],
    },
    {
        id: 2,
        name: "United Kingdom",
        code: "UK",
        image: "/hero-london.png",
        badge: "FAST TRACK",
        badgeColor: "bg-blue-500",
        description: "Home to prestigious universities and a rich cultural heritage. Benefit from short 1-year master's programs and 2-year post-study work visas.",
        features: ["Russell Group Access", "1 Year Masters"],
    },
    {
        id: 3,
        name: "Canada",
        code: "CA",
        image: "/hero-canada.png",
        badge: "PR PATHWAY",
        badgeColor: "bg-green-500",
        description: "Welcoming policies, high quality of life, and excellent pathways for permanent residency. A diverse and inclusive environment for international students.",
        features: ["PGWP Available", "Top 10 Safe Countries"],
    },
    {
        id: 4,
        name: "New Zealand",
        code: "NZ",
        image: "/hero-newzealand.png",
        badge: "ADVENTURE",
        badgeColor: "bg-teal-500",
        description: "Experience world-class education amidst stunning landscapes. New Zealand offers a safe, friendly environment with a focus on innovation and research.",
        features: ["8 Universities", "Post-Study Work Rights"],
    },
];

export default function Destinations() {
    return (
        <section id="destinations" className="py-24 bg-dark text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Global Opportunities</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Top Study <span className="text-primary">Destinations</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Choose from the world's most welcoming and prestigious countries for international students.
                        </p>
                    </motion.div>
                </div>

                {/* Destinations List */}
                <div className="flex flex-col gap-12 md:gap-24">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 group-hover:border-primary/50 transition-colors duration-500">
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                {/* Floating Badge */}
                                <div className={`absolute top-6 left-6 ${dest.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg`}>
                                    {dest.badge}
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 relative">
                                {/* Watermark Background Code */}
                                <div className="absolute -top-20 -right-10 md:right-auto md:left-0 text-[150px] font-bold text-gray-800/30 font-heading pointer-events-none select-none z-0 leading-none">
                                    {dest.code}
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading">{dest.name}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {dest.description}
                                    </p>

                                    {/* Features Boxes */}
                                    <div className="flex gap-4 mb-8 flex-wrap">
                                        {dest.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "rgba(230, 27, 46, 0.2)",
                                                    borderColor: "#E61B2E",
                                                    boxShadow: "0px 10px 20px -5px rgba(230, 27, 46, 0.4)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className="bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-3 cursor-default"
                                            >
                                                <span className="text-sm font-semibold text-gray-200">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <button className="flex items-center gap-3 text-primary font-bold tracking-wide hover:text-white transition-colors group">
                                        EXPLORE UNIVERSITIES
                                        <span className="bg-primary text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                                            <FaArrowRight className="text-xs" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
