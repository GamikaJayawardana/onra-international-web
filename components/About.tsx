"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEye, FaFlag, FaArrowRight } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Blob - Top Right */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side - Image with Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* White Frame/Border Effect */}
                        <div className="relative rounded-[2rem] p-4 bg-white shadow-xl">
                            <div className="relative h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden">
                                <Image
                                    src="/about.png"
                                    alt="Onra International Office Meeting"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Floating Dark Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -bottom-8 -right-4 md:right-8 bg-secondary text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-[200px] md:max-w-[240px]"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">12+</div>
                            <div className="text-sm font-semibold tracking-widest text-gray-300 uppercase leading-relaxed">
                                Years of Excellence
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h6 className="text-primary font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Who We Are</h6>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-6 leading-tight">
                            Empowering Dreams, <br className="hidden md:block" />
                            Crossing Borders.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Founded in 2012, Onra International has grown from a small consultancy to a leading migration firm.
                            We believe that every student deserves access to global education regardless of their background.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 mb-10">
                            {/* Vision Card */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <FaEye />
                                </div>
                                <h4 className="font-bold text-secondary mb-2 text-lg">Our Vision</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    To be the most trusted global education partner, creating pathways for students to achieve their full potential.
                                </p>
                            </div>

                            {/* Mission Card */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <FaFlag />
                                </div>
                                <h4 className="font-bold text-secondary mb-2 text-lg">Our Mission</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Providing transparent, ethical, and personalized counseling to simplify the international migration process.
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                            Meet Our Consultants <FaArrowRight className="group-hover:text-red-700" />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
