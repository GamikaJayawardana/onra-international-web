"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function MigrationAdvicePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full items-center justify-center flex overflow-hidden">
                <Image
                    src="/services/migration-advice.png"
                    alt="Migration Advice"
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
                        Migration Advice
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Expert legal counsel for your migration journey. Trustworthy advice for permanent residency and citizenship.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Navigation Complex Migration Laws</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Migration laws are constantly changing. Our team of registered migration agents stays up-to-date with the latest regulations to provide you with accurate and effective advice. Whether you are seeking skilled migration, employer nomination, or family sponsorship, we guide you every step of the way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold font-heading text-secondary mb-4 flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Our Expertise
                            </h3>
                            <ul className="space-y-3">
                                {["Skilled Migration Visas", "Employer Sponsored Visas", "Permanent Residency Pathways", "Citizenship Applications", "Visa Appeals & Tribunals"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h3 className="text-xl font-bold font-heading text-primary mb-4">Secure Your Future</h3>
                            <p className="text-gray-600 mb-6">
                                Don't risk your future with unverified advice. Speak to our qualified migration agents today.
                            </p>
                            <a href="/#contact" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors shadow-lg shadow-primary/30">
                                Book Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
