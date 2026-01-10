import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Onra International | Student Visa Consultant Sri Lanka",
  description:
    "Leading migration agency in Sri Lanka. Expert guidance for Student, Dependent, and Visitor visas to Australia, Canada, and New Zealand. 98% success rate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Onra International",
              url: "https://www.onrainternational.com",
              logo: "https://www.onrainternational.com/logo-white.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+94 76 928 2343",
                  contactType: "customer service",
                  areaServed: "LK",
                  availableLanguage: ["en", "si", "ta"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+61 45 218 2343",
                  contactType: "migration advice",
                  areaServed: "AU",
                  availableLanguage: "en",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "25/A, Bolapanlindawaththa, Dewalayagawa",
                addressLocality: "Ratnapura",
                addressRegion: "Sabaragamuwa Province",
                addressCountry: "LK",
              },
              sameAs: [
                "https://www.facebook.com/share/1HCZdeM1wv/?mibextid=wwXIfr",
                "https://www.instagram.com/onra_international_?igsh=MWQ4bTcybHMxb2F6Mg%3D%3D&utm_source=qr",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`} 
      >
        <div className="flex flex-col min-h-screen">
          <Topbar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
