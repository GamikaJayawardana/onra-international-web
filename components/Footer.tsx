import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-secondary text-gray-400 font-sans pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <Image src="/logo-white.png" alt="Onra International Logo" width={50} height={50} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                ONRA <span className="text-primary">INTL.</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Your trusted partner in international education and migration. We help you build a global future with integrity, transparency, and expert guidance.
                        </p>
                        <div className="flex justify-center md:justify-start gap-3 pt-2">
                            <a href="#" className="w-9 h-9 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><FaFacebookF size={14} /></a>
                            <a href="#" className="w-9 h-9 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><FaXTwitter size={14} /></a>
                            <a href="#" className="w-9 h-9 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><FaLinkedinIn size={14} /></a>
                            <a href="#" className="w-9 h-9 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><FaInstagram size={14} /></a>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Explore</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#home" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Services</Link></li>
                            <li><Link href="#destinations" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Destinations</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Our Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Student Visas</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Dependent Visas</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Visit Visas</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">University Admission</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">Migration Advice</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Stay Updated */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Stay Updated</h4>
                        <p className="text-sm mb-6 leading-relaxed">
                            Subscribe to our newsletter for the latest visa updates and scholarship news.
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-800 border-none rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-primary focus:outline-none placeholder-gray-500"
                                />
                            </div>
                            <button type="button" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                                Subscribe Now <FaPaperPlane size={12} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {new Date().getFullYear()} Onra International PVT LTD. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
