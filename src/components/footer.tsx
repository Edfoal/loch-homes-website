import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* ✅ Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ✅ Column 1: Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/loch-homes-logo.svg" // ✅ Replace with actual logo in /public
              alt="Loch Homes Logo"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* ✅ Column 2: Address + Contact Info */}
          <div className="flex flex-col gap-3 text-sm">
            <p>
              10, Street 12 <br />
              Washington DC, USA 123-456
            </p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <a href="tel:+16787565039" className="hover:text-orange-400">
                (678) 756-5039
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:info@lochhomes.com"
                className="hover:text-orange-400"
              >
                info@lochhomes.com
              </a>
            </div>
          </div>

          {/* ✅ Column 3: Navigation Links */}
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-orange-400 text-sm">
              Home
            </a>
            <a href="#" className="hover:text-orange-400 text-sm">
              About Us
            </a>
            <a href="#" className="hover:text-orange-400 text-sm">
              How we work
            </a>
            <a href="#" className="hover:text-orange-400 text-sm">
              Contact Us
            </a>
          </div>

          {/* ✅ Column 4: Legal Links */}
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-orange-400 text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-400 text-sm">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* ✅ Divider */}
        <hr className="border-gray-700 my-6" />

        {/* ✅ Bottom Row */}
        <div className="text-center text-xs text-gray-400">
          Copyright © {new Date().getFullYear()} All rights reserved. Loch Homes
        </div>
      </div>
    </footer>
  );
}
