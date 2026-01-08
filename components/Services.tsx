"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserFriends, FaPlane, FaArrowRight, FaUniversity, FaHandshake } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Student Visa",
        description: "Unlock your potential with world-class education. We guide you through admission to visa approval for top universities globally.",
        icon: <FaGraduationCap className="text-4xl" />,
        link: "/services/student-visas",
        delay: 0.1,
    },
    {
        id: 2,
        title: "Dependent Visa",
        description: "Reunite with your family. We simplify the complex process of bringing your spouse, children, or parents to join you abroad.",
        icon: <FaUserFriends className="text-4xl" />,
        link: "/services/dependent-visas",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Visitor Visa",
        description: "Explore new destinations or visit loved ones. Our streamlined process ensures a hassle-free tourist visa experience.",
        icon: <FaPlane className="text-4xl" />,
        link: "/services/visitor-visas",
        delay: 0.3,
    }
   
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary font-heading mb-6 leading-tight">
                            Professional <span className="text-primary">Visa Services</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We provide comprehensive immigration solutions tailored to your unique journey.
                            Trust us to handle the complexities while you plan your future.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                        >
                            <Link href={service.link} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center relative overflow-hidden h-full">
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                                {/* Icon Container */}
                                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                                    <span className="text-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </span>
                                </div>

                                <h4 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <div className="mt-auto flex items-center text-secondary font-bold text-sm tracking-wide gap-2 group-hover:text-primary transition-colors">
                                    LEARN MORE
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
