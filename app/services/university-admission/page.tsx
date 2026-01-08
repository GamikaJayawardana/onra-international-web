"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function UniversityAdmissionPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full items-center justify-center flex overflow-hidden">
                <Image
                    src="/services/university-admission.png"
                    alt="University Admission"
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
                        University Admission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Secure your spot at top global universities. Expert guidance for a successful academic future.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Your Path to Prestigious Institutions</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Getting admitted to a top university requires more than just good grades. It involves choosing the right course, writing a compelling personal statement, and presenting a strong application. We have partnerships with over 500+ universities worldwide to give you the best chance of acceptance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold font-heading text-secondary mb-4 flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Admission Support
                            </h3>
                            <ul className="space-y-3">
                                {["Course & University Selection", "Application Review", "Scholarship Guidance", "English Test Preparation (IELTS/PTE)", "Acceptance Offer Management"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h3 className="text-xl font-bold font-heading text-primary mb-4">Build Your Future</h3>
                            <p className="text-gray-600 mb-6">
                                The right education can change your life. Let our counselors help you make the best choice for your career.
                            </p>
                            <a href="/#contact" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors shadow-lg shadow-primary/30">
                                Free Assessment
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
