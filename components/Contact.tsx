"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Disable 3D effect on mobile (simple check)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10" style={{ perspective: "1000px" }}>

                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX: isMobile ? 0 : rotateX,
                        rotateY: isMobile ? 0 : rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto min-h-[600px]"
                >
                    {/* Left Side - Info (Red) */}
                    <div className="w-full md:w-[40%] bg-primary text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circles */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-700/50 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-900/30 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get Your Free Consultation</h2>
                            <p className="text-red-100 leading-relaxed mb-12">
                                Take the first step towards your global future. Fill out the form and our expert counselors will analyze your profile for free.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold opacity-80 mb-1">Head Office</h5>
                                        <p className="text-sm text-red-100">123, Galle Road, Colombo 03, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold opacity-80 mb-1">Phone</h5>
                                        <p className="text-sm text-red-100">+94 11 234 5678, +94 77 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h5 className="font-bold opacity-80 mb-1">Email</h5>
                                        <p className="text-sm text-red-100">info@onrainternational.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h5 className="font-bold opacity-80 mb-4 text-sm">Follow us on social media</h5>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><FaFacebookF /></a>
                                <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><FaXTwitter /></a>
                                <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><FaLinkedinIn /></a>
                                <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form (White) */}
                    <div className="w-full md:w-[60%] p-10 md:p-14 bg-white text-secondary">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold font-heading mb-2">Book an Appointment</h3>
                            <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                                    <input type="tel" placeholder="+94 77 000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Interested Country</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-600">
                                    <option>Select your preferred destination</option>
                                    <option>Australia</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    <option>New Zealand</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Message</label>
                                <textarea rows={3} placeholder="Briefly describe your educational background and goals..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
                            </div>

                            <button type="button" className="w-full bg-secondary hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                Book Free Appointment
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
