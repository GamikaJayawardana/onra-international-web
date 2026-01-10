"use client";

import { motion } from "framer-motion";

import { FaUniversity, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";


{
  /* { name: "University of Melbourne", location: "Melbourne, VIC", ranking: "#14 Global", type: "Public Research" }, */
}
const universityData = {
    Australia: [
        
    ],
    "United Kingdom": [
        
    ],
    Canada: [
       
    ],
    "New Zealand": [
        
    ],
};

export default function ExploreUniversities() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">


            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-black to-black pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6"
                    >
                        Explore <span className="text-primary">Universities</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                    >
                        Discover world-class educational institutions across our top study destinations.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 pb-20 space-y-32">
                {Object.entries(universityData).map(([country, universities], index) => {
                    // Create an ID for linking, e.g., "Australia" -> "australia", "United Kingdom" -> "united-kingdom"
                    const sectionId = country.toLowerCase().replace(/\s+/g, '-');

                    return (
                        <section key={country} id={sectionId} className="scroll-mt-28">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-10 border-l-4 border-primary pl-6"
                            >
                                <h2 className="text-4xl font-bold font-heading">{country}</h2>
                                <span className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {universities.map((uni, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-primary/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <FaUniversity className="text-xl" />
                                            </div>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-full">
                                                {uni.type}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{uni.name}</h3>

                                        <div className="space-y-2 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-gray-600" />
                                                {uni.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaGraduationCap className="text-gray-600" />
                                                {uni.ranking}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
