"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
        description: "Australia is one of the most popular study destinations for international students, offering globally recognised universities, innovative teaching methods, and strong post-study work opportunities. Students enjoy a high standard of living, a multicultural society, and a safe, welcoming environment. With flexible study options, part-time work rights, and clear pathways to permanent residency, Australia is an ideal destination to build both your education and future career.",
        features: ["40+ Universities", "Post-Study Work Visa"],
    },
    {
        id: 2,
        name: "United Kingdom",
        code: "UK",
        image: "/hero-london.png",
        badge: "FAST TRACK",
        badgeColor: "bg-blue-500",
        description: "The UK is home to some of the world’s oldest and most respected universities. With shorter course durations, students can graduate faster and save on tuition and living costs. UK qualifications are recognised worldwide, opening doors to global career opportunities. The Graduate Route allows students to stay and work after studies, making the UK a smart choice for academic excellence and professional growth.",
        features: ["Russell Group Access", "1 Year Masters"],
    },
    {
        id: 3,
        name: "Canada",
        code: "CA",
        image: "/hero-canada.png",
        badge: "PR PATHWAY",
        badgeColor: "bg-green-500",
        description: "Canada offers high-quality education at comparatively affordable tuition fees, along with generous post-study work options. Known for its friendly people, safety, and inclusive culture, Canada provides students with excellent support services and real-world learning opportunities. With clear pathways to permanent residency, Canada is an excellent destination for students planning long-term settlement and career success.",
        features: ["PGWP Available", "Top 10 Safe Countries"],
    },
    {
        id: 4,
        name: "New Zealand",
        code: "NZ",
        image: "/hero-newzealand.png",
        badge: "ADVENTURE",
        badgeColor: "bg-teal-500",
        description: "New Zealand is known for its high academic standards, innovative education system, and strong student support. With smaller class sizes, students benefit from personalised learning experiences. The country offers post-study work rights, a balanced lifestyle, and a safe, peaceful environment. New Zealand is perfect for students seeking quality education along with personal growth and wellbeing.",
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

                                    <Link
                                        href={`/explore-universities#${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex items-center gap-3 text-primary font-bold tracking-wide hover:text-white transition-colors group inline-flex"
                                    >
                                        EXPLORE UNIVERSITIES
                                        <span className="bg-primary text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                                            <FaArrowRight className="text-xs" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
