export default function CashOfferCTA() {
	return (
		<section className="bg-[#0E646B] text-center py-12 px-6 md:px-8">
			<div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">
				{/* ✅ CTA Text */}
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
					Selling Your House Shouldn't Be Hard.
				</h2>
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white leading-snug max-w-3xl mx-auto">
					At Loch Homes, we make it simple, fast, and stress-free. Get a fair cash offer and
					close on your terms—No Repairs, No Fees, No Hassle.
				</p>

				{/* ✅ CTA Button */}
				<a
					href="#contact-us"
					className="
						mt-4 w-full sm:w-auto
						bg-white text-[#0E646B] font-semibold text-base sm:text-lg md:text-xl
						px-6 sm:px-10 md:px-16 lg:px-20 py-3 rounded-md 
						hover:bg-gray-100 transition shadow
					"
				>
				Get My Cash Offer Now
				</a>
			</div>
		</section>
	);
}
