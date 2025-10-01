import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Column 1: Logo */}
          <div className="flex justify-center lg:justify-start mb-6 sm:mb-0">
            <Image
              src="https://ik.imagekit.io/lochhomesllc/assets/loch-homes-logo-3.svg"
              alt="Loch Homes Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Column 2: Address + Contact Info */}
          <div className="flex flex-col gap-3 text-sm text-center sm:text-left">
            <p>
              3300 Hamilton Mill Rd,<br />
              Buford, GA 30519
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <a href="tel:+16787565039" className="hover:text-orange-400">
                (678) 756-5039
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope className="text-orange-500" />
              <a href="mailto:info@lochhomes.com" className="hover:text-orange-400">
						    lochhomesllc@gmail.com
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="flex flex-col gap-3 text-sm text-center sm:text-left">
            <a href="#hero" className="hover:text-orange-400">Home</a>
            <a href="#about-us" className="hover:text-orange-400">About Us</a>
            <a href="#how-it-works" className="hover:text-orange-400">How we work</a>
            <a href="#contact-us" className="hover:text-orange-400">Contact Us</a>
          </div>

          {/* Column 4: Legal Links */}
          <div className="flex flex-col gap-3 text-sm text-center sm:text-left">
            <a href="/termsandconditions" className="hover:text-orange-400">Terms & Conditions</a>
            <a href="/privacypolicy" className="hover:text-orange-400">Privacy Policy</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Loch Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
