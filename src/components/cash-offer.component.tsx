export default function CashOfferCTA() {
  return (
        <section className="bg-[#B5542F] text-center py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">
            {/* ✅ CTA Text */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug">
            Say goodbye to fees{" "} <span className="font-bold">commissions, showings, and hassle</span>
            <br />
            We offer an{" "}
            <span className="italic font-semibold">“as-is” fair cash offer</span>{" "}
            for your home.
            </h2>

            {/* ✅ CTA Button */}
            <a
            href="#contact"
            className="mt-4 bg-white text-[#B5542F] font-semibold text-lg px-6 py-3 rounded-md hover:bg-gray-100 transition shadow"
            >
            Get My Cash Offer Now
            </a>
        </div>
        </section>
  );
}
