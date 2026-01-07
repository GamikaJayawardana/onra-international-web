"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "James Anderson",
        country: "United Kingdom",
        image: "/student-1.png",
        review: "Onra International made my dream of studying in London a reality. Their guidance on the visa process was impeccable.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Williams",
        country: "Canada",
        image: "/student-2.png",
        review: "The team is incredibly supportive. They handled my complex case with ease and I got my visa approved in record time!",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael Chen",
        country: "Australia",
        image: "/student-3.png",
        review: "Professional, transparent, and efficient. I highly recommend Onra for anyone looking to migrate abroad.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Success Stories</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-heading text-secondary">
                            What Students <span className="text-primary">Say</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group"
                        >
                            {/* Floating Quote Icon */}
                            <div className="absolute -top-6 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:-translate-y-2 transition-transform">
                                <FaQuoteLeft />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-50">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg leading-tight">{testimonial.name}</h4>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Approved for {testimonial.country}</span>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed">
                                "{testimonial.review}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
