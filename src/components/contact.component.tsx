"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white py-12 px-12">
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-8 rounded-xl overflow-hidden">
        {/* Left Column */}
        <div className="bg-[#c85d32] text-white p-8 flex flex-col justify-between rounded-xl lg:rounded-xl md:rounded-none">
          <div>
            <p className="text-sm">/ Contact Loch Homes</p>
            <h2 className="text-3xl font-bold mt-2">Get in Touch with us</h2>
            <p className="mt-2 text-gray-200">
              Reach out anytime <br /> we’re here to make your move hassle-free.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt /> <span>(678) 756-5039</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:lochhomesllc@gmail.com"
                  className="underline hover:text-gray-100"
                >
                  lochhomesllc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>
                  3300 Hamilton Mill Rd #999,
                  <br /> Buford, GA 30519
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
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

        {/* Right Column (Form) */}
        <div className="bg-white p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Property Address"
              className="w-full border rounded-md p-3 text-gray-900"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md p-3 text-gray-900"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border rounded-md p-3 text-gray-900"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-3 text-gray-900"
              />
            </div>
            <textarea
              placeholder="My Reason For Selling"
              rows={4}
              className="w-full border rounded-md p-3 text-gray-900"
            />

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
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
