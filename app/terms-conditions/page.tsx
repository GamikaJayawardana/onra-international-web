"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-8"
                >
                    Terms and Conditions
                </motion.h1>

                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Welcome to Onra International. These Terms and Conditions govern your use of our website and the consulting services provided by us. By engaging our services, you agree to comply with these terms.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Services Provided</h3>
                    <p>
                        Onra International provides educational consulting and visa assistance services, including finding university placements, assisting with visa applications (Student, Visitor, Dependent), and migration advice.
                    </p>
                    <p>
                        <strong>Disclaimer:</strong> While we strive to provide accurate and up-to-date advice, the final decision on any visa or admission application rests solely with the respective government authorities (e.g., embassies, high commissions) or educational institutions. We cannot and do not guarantee the success of any application.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Client Responsibilities</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You agree to provide true, accurate, and complete information and documents as requested.</li>
                        <li>You acknowledge that providing false or misleading information may lead to application refusal and legal consequences, for which Onra International is not liable.</li>
                        <li>You are responsible for paying all government application fees and third-party costs (e.g., medical exams, English tests) directly to the relevant bodies or as advised.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Fees and Refunds</h3>
                    <p>
                        Our consulting fees are agreed upon prior to the commencement of services.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Fees:</strong> Fees paid to Onra International for professional services are generally non-refundable once the work has commenced, regardless of the application outcome.</li>
                        <li><strong>Third-Party Fees:</strong> We are not responsible for refunds of fees paid to universities, government bodies, or other third parties.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Limitation of Liability</h3>
                    <p>
                        Onra International shall not be liable for any delays, rejections, or losses resulting from changes in government policies, regulations, or third-party (university/embassy) decisions. Our liability is limited to the extent of the service fees paid to us.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Governing Law</h3>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                    </p>

                    <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Contact Us</h3>
                    <p>
                        For any inquiries regarding these Terms, please contact us at: <br />
                        <strong>Onra International</strong><br />
                        info@onrainternational.com<br />
                        +94 76 928 2343
                    </p>
                </div>
            </div>
        </div>
    );
}
