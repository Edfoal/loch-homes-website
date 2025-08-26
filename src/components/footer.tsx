import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
		<footer className="bg-black text-white py-12">
			<div className="container mx-auto px-6 lg:px-16">
				
				{/* ✅ Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
				
				{/* ✅ Column 1: Logo */}
				<div>
					<Image
					src="/loch-homes-logo-1.svg"
					alt="Loch Homes Logo"
					width={180}
					height={80}
					className="object-contain"
					/>
				</div>

				{/* ✅ Column 2: Address + Contact Info */}
				<div className="flex flex-col gap-3 text-sm leading-relaxed">
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
				<div className="flex flex-col gap-1 text-sm"></div>
				<div className="flex flex-col gap-1 text-sm"></div>

				{/* ✅ Column 3: Navigation Links */}
				<div className="flex flex-col gap-3 text-sm">
					<a href="#" className="hover:text-orange-400">Home</a>
					<a href="#" className="hover:text-orange-400">About Us</a>
					<a href="#" className="hover:text-orange-400">How we work</a>
					<a href="#" className="hover:text-orange-400">Contact Us</a>
				</div>

				{/* ✅ Column 4: Legal Links */}
				<div className="flex flex-col gap-3 text-sm">
					<a href="/terms" className="hover:text-orange-400">Terms & Conditions</a>
					<a href="#" className="hover:text-orange-400">Privacy Policy</a>
				</div>
				</div>

				{/* ✅ Divider */}
				<div className="border-t border-white-800 mt-10 pt-6 text-center">
					<p className="text-white-500">
						© {new Date().getFullYear()} Loch Homes. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
