"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function DependentVisasPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full items-center justify-center flex overflow-hidden">
                <Image
                    src="/services/dependent-visa.png"
                    alt="Dependent Visas"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white mb-6"
                    >
                        Dependent Visas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Bring your loved ones closer. We help reunite families across borders.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Reunite with Your Family</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Living abroad shouldn't mean being apart from your family. Whether it's your spouse, children, or other eligible dependents, we specialize in navigating the complex pathways for dependent visas. Our goal is to make the reunification process as smooth and stress-free as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold font-heading text-secondary mb-4 flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Key Services
                            </h3>
                            <ul className="space-y-3">
                                {["Spouse Visa Applications", "Child Dependent Visas", "Relationship Proof Guidance", "Financial Requirement Assessment", "Application Tracking"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h3 className="text-xl font-bold font-heading text-primary mb-4">Let's Bring Them Home</h3>
                            <p className="text-gray-600 mb-6">
                                We understand the emotional value of family. Contact us today to check your eligibility and start the application process.
                            </p>
                            <a href="/#contact" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors shadow-lg shadow-primary/30">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
