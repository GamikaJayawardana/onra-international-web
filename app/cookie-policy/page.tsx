"use client";

import { motion } from "framer-motion";

export default function CookiePolicyPage() {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-8"
                >
                    Cookie Policy
                </motion.h1>

                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Onra International ("we", "us", or "our") uses cookies to improve your experience on our website. This policy explains what cookies are, how we use them, and your choices regarding their use.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">What Are Cookies?</h3>
                    <p>
                        Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">How We Use Cookies</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly (e.g., secure log-in, session management).</li>
                        <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website (e.g., which pages are visited most often) to help us improve our services and user experience.</li>
                        <li><strong>Functionality Cookies:</strong> These allow our website to remember choices you make (such as your preferred language) and provide enhanced features.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Managing Cookies</h3>
                    <p>
                        Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
                    </p>
                    <p>
                        To learn more about cookies and how to manage them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions about our Cookie Policy, please contact us at: <br />
                        <strong>Onra International</strong><br />
                        info@onrainternational.com
                    </p>
                </div>
            </div>
        </div>
    );
}
