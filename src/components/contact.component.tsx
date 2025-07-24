"use client";

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* ✅ Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 tracking-wide">
            / Contact Loch Homes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Get in Touch with us
          </h2>
          <p className="text-gray-600 mt-2">
            Reach out anytime—we’re here to make your move hassle-free.
          </p>
        </div>

        {/* ✅ 2-column layout (equal height on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          {/* ✅ Contact Form */}
          <form className="space-y-4 bg-white p-4 border rounded-md shadow-sm flex flex-col">
            <input
              type="text"
              placeholder="Property Address"
              className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* ✅ Phone & Email side by side on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <textarea
              placeholder="My Reason For Selling"
              rows={4}
              className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* ✅ Checkbox + Terms */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-xs text-gray-600">
                By clicking "SUBMIT," you agree to Loch Homes' Terms of Use and
                Privacy Policy. You consent to receive phone calls and SMS
                messages to provide updates on your inquiry or for marketing
                purposes. Message frequency depends on your activity. You may
                opt-out by texting "STOP." Message and data rates may apply.
              </p>
            </div>

            {/* ✅ Push button to bottom for equal height */}
            <div className="mt-auto">
              <button
                type="submit"
                className="w-full bg-[#B5542F] text-white font-medium py-3 rounded-md hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* ✅ Map matches height of form */}
          <div className="w-full h-full">
            <iframe
              title="Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1367%2C51.5093%2C-0.1267%2C51.5153&amp;layer=mapnik" 
              className="w-full h-full rounded-md border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
