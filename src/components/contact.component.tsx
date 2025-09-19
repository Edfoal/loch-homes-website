"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { FormEvent, useState } from "react";

export default function ContactSection() {
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;

		// Collect form data
		const formData = new FormData(form);

		try {
			// Replace with your actual Google Form "formResponse" URL
			const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfbRK7UsgMiDx2LzKI3tuYJxD9JPHvT_jIQPzVF3kqu84ZWHA/formResponse";

			// Map your form fields to Google Form field IDs (entry.xxxxxxxx)
			const payload = new URLSearchParams();
			payload.append("entry.1680640497", formData.get("address") as string);
			payload.append("entry.1482324635", formData.get("name") as string);
			payload.append("entry.863075859", formData.get("phone") as string);
			payload.append("entry.1346952003", formData.get("email") as string);
			payload.append("entry.1041554134", formData.get("reason") as string);

			await fetch(googleFormUrl, {
				method: "POST",
				body: payload,
				mode: "no-cors", // Important for Google Forms
			});

			// // Show success message
			setShowSuccess(true);
			// alert("✅ Message Sent Successfully!, Someone from our team will reach out to you shortly.");
			// Reset form
			form.reset();
			// Hide popup after 3s
			setTimeout(() => setShowSuccess(false), 3000);
		} catch (err) {
			console.error("Error submitting form:", err);
			alert("Seems like there was an issue submitting the form. Please try again later.");
		}
	};

  	return (
    	<section id="contact-us" className="relative bg-white py-12 px-6 lg:px-16">
			
			{ showSuccess && (
				<div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg">
					✅ Message Sent Successfully!, Someone from our team will reach out to you shortly.
				</div>
			)}

      		<div className=" flex flex-col lg:flex-row max-w-full mx-auto gap-8 rounded-xl">
				{/* Left Column */}
				<div className="relative bg-[#c85d32] text-white p-8 flex flex-1 justify-between rounded-xl lg:rounded-xl md:rounded-xl overflow-hidden">

				{/* Decorative Circles */}
				<div className="absolute bottom-0 right-0 -z-0">
					<div className="w-40 h-40 bg-teal-900/30 rounded-full absolute -bottom-4 -right-8" />
					<div className="w-32 h-32 bg-teal-900/30 rounded-full absolute bottom-12 right-16" />
				</div>

				<div className="flex flex-col justify-center h-full items-center lg:items-start text-center lg:text-left">
					<p className="text-xs sm:text-sm lg:text-base text-white-500 mb-1 tracking-wide">
					/ Contact Loch Homes
					</p>

					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white-900">
					Get in Touch with us
					</h2>

					<p className="mt-3 text-sm sm:text-base md:text-lg text-white-700 leading-relaxed">
					Reach out anytime, We’re here to help.
					</p>

					{/* Contact Info */}
					<div className="mt-12 space-y-4">
					<div className="flex items-center gap-3 justify-center lg:justify-start">
						<FaPhoneAlt className="text-xl md:text-2xl text-white" />
						<span className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
						(678) 756-5039
						</span>
					</div>

					<div className="flex items-center gap-3 justify-center lg:justify-start">
						<FaEnvelope className="text-xl md:text-2xl text-white" />
						<a
						href="mailto:lochhomesllc@gmail.com"
						className="underline hover:text-gray-100 text-sm sm:text-base md:text-lg text-white leading-relaxed"
						>
						lochhomesllc@gmail.com
						</a>
					</div>

					<div className="flex items-center gap-3 justify-center lg:justify-start">
						<FaMapMarkerAlt className="text-xl md:text-2xl text-white" />
						<span className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
						3300 Hamilton Mill Rd #999,
						<br /> Buford, GA 30519
						</span>
					</div>
					</div>

					{/* Social Icons */}
					<div className="flex gap-4 mt-16 justify-center lg:justify-start">
					<a href="#" className="bg-white text-[#c85d32] p-2 rounded-full">
						<FaTwitter />
					</a>
					<a href="#" className="bg-white text-[#c85d32] p-2 rounded-full">
						<FaInstagram />
					</a>
					<a href="#" className="bg-white text-[#c85d32] p-2 rounded-full">
						<FaDiscord />
					</a>
					</div>
				</div>
			</div>

			{/* Right Column (Form) */}
			<div className="bg-white lg:flex-1">
				<form className="space-y-4" onSubmit={handleSubmit}>
					<input
						name="address"
						type="text"
						required={true}
						placeholder="Property Address"
						className="w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-800"
					/>
					<input
						name="name"
						type="text"
						required={true}
						placeholder="Full Name"
						className="w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-800"
					/>
					<div className="grid grid-cols-2 gap-4">
					<input
						name="phone"
						type="tel"
						placeholder="Phone"
						maxLength={10}
						required
						onInput={(e) => {
							// force only numbers
							const target = e.target as HTMLInputElement;
							target.value = target.value.replace(/[^0-9]/g, "");
							target.setCustomValidity(""); // clear any custom error while typing
						}}
						pattern="[0-9]{10}"
						onInvalid={(e) => {
							const target = e.target as HTMLInputElement;
							target.setCustomValidity("Phone number must be exactly 10 digits.");
						}}
						className="w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-800"
					/>
					<input
						name="email"
						type="email"
						placeholder="Email"
						className="w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-800"
					/>
					</div>
					<textarea
						name="reason"
						placeholder="My Reason For Selling"
						rows={4}
						className="w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-800"
					/>

					<div className="flex items-start gap-2 text-sm text-gray-600">
					<input type="checkbox" required={true} className="mt-1" />
					<p className="text-justify">
						By clicking "SUBMIT," you agree to Loch Homes' Terms of Use and
						Privacy Policy. You consent to receive phone calls and SMS
						messages to provide updates on your inquiry or for marketing
						purposes. Message frequency depends on your activity. You may
						opt-out by texting "STOP." Message and data rates may apply.
					</p>
					</div>

					<button
						type="submit"
						className="w-full bg-teal-800 hover:bg-teal-700 text-white py-3 rounded-md font-semibold"
					>
					Send Message
					</button>
				</form>
			</div>
      </div>
    </section>
  );
}