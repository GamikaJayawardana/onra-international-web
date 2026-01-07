import { FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
    return (
      <div className="bg-secondary text-white py-2 text-xs md:text-sm font-sans">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Contact Info - Left - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:info@onrainternational.com"
                className="hover:text-gray-300 transition-colors"
              >
                info@onrainternational.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-white hidden md:block" />
              <span className="hidden md:block">
                +94 76 928 2343 / +61 45 218 2343
              </span>
            </div>
          </div>

          {/* Social Links - Right - Centered on mobile */}
          <div className="flex md:w-auto w-full justify-center md:justify-end items-center gap-6">
            <span className="hidden md:inline text-gray-400">Follow us:</span>
            <div className="flex items-center gap-6 md:gap-4 text-sm md:text-xs">
              {" "}
              {/* Increased gap and size for mobile touch */}
              <a
                href="https://www.facebook.com/share/1HCZdeM1wv/?mibextid=wwXIfr"
                className="hover:text-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/onra_international_?igsh=MWQ4bTcybHMxb2F6Mg%3D%3D&utm_source=qr"
                className="hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
