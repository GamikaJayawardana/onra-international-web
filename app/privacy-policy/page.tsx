"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-8"
                >
                    Privacy Policy
                </motion.h1>

                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        At Onra International ("we", "us", or "our"), we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you engage with us for student visas, migration advice, university admissions, and related services.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Information We Collect</h3>
                    <p>
                        Given the nature of our services, we may collect sensitive personal information necessary for visa and admission applications, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data:</strong> Name, date of birth, passport details, marital status, and photographs.</li>
                        <li><strong>Contact Data:</strong> Residential address, email address, and telephone numbers.</li>
                        <li><strong>Educational & Professional Data:</strong> Academic transcripts, certificates, CV/Resume, and employment history.</li>
                        <li><strong>Financial Data:</strong> Bank statements, sponsorship details, and evidence of funds as required by immigration authorities.</li>
                        <li><strong>Health & Character Data:</strong> Medical records and police clearance certificates where applicable for visa processing.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">How We Use Your Information</h3>
                    <p>
                        We use your information strictly for the purpose of providing our consulting services, which includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Assessing your eligibility for visas and university admissions.</li>
                        <li>Submitting applications to educational institutions, immigration departments (e.g., Department of Home Affairs), and skills assessment bodies on your behalf.</li>
                        <li>Communicating with you regarding the progress of your applications.</li>
                        <li>Complying with legal and regulatory obligations in Sri Lanka and destination countries.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Disclosure of Your Information</h3>
                    <p>
                        We may share your information with trusted third parties solely for the purpose of your application:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Universities and Educational Institutions.</li>
                        <li>Government Immigration Authorities and High Commissions.</li>
                        <li>Professional Bodies for Skills Assessment.</li>
                    </ul>
                    <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Data Security</h3>
                    <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Contact Us</h3>
                    <p>
                        If you have questions about how we handle your data, please contact us at: <br />
                        <strong>Onra International</strong><br />
                        25/A, Bolapanlindawaththa, Dewalayagawa, Ratnapura.<br />
                        info@onrainternational.com<br />
                        +94 76 928 2343
                    </p>
                </div>
            </div>
        </div>
    );
}
