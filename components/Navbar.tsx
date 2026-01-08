"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 font-heading">
            <div className="container mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/Logo.png" alt="Onra International Logo" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    <div className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
                        ONRA <span className="text-primary">INTL.</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-600">
                    <Link href="/#home" className="hover:text-primary transition-colors text-secondary">
                        HOME
                    </Link>
                    <Link href="/#services" className="hover:text-primary transition-colors">
                        SERVICES
                    </Link>
                    <Link href="/#destinations" className="hover:text-primary transition-colors">
                        DESTINATIONS
                    </Link>
                    <Link href="/#about" className="hover:text-primary transition-colors">
                        ABOUT US
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/#contact"
                        className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-red-500/30"
                    >
                        Free Consultation <FaArrowRight />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-secondary"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg fade-in-up">
                    <div className="flex flex-col items-center p-4 space-y-4 font-semibold text-gray-600">
                        <Link
                            href="/#home"
                            className="hover:text-primary hover:pl-2 transition-all block"
                            onClick={toggleMenu}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/#services"
                            className="hover:text-primary hover:pl-2 transition-all block"
                            onClick={toggleMenu}
                        >
                            SERVICES
                        </Link>
                        <Link
                            href="/#destinations"
                            className="hover:text-primary hover:pl-2 transition-all block"
                            onClick={toggleMenu}
                        >
                            DESTINATIONS
                        </Link>
                        <Link
                            href="/#about"
                            className="hover:text-primary hover:pl-2 transition-all block"
                            onClick={toggleMenu}
                        >
                            ABOUT US
                        </Link>
                        <div className="pt-2">
                            <Link
                                href="/#contact"
                                className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-all shadow-lg shadow-red-500/30 w-full"
                                onClick={toggleMenu}
                            >
                                Free Consultation <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
