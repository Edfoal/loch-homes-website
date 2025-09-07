"use client";
import { useState } from "react";
import Image from "next/image";

const FEATURES = [
    { title: "Local & Family-Owned", desc: "Real People, Real Offers, Real Local Care" },
    { title: "Fast Closings", desc: "Local Hearts. Family Hands. Real Help" },
    { title: "Cash Offers, No Fees", desc: "Fair Cash Deals with Zero Hidden Costs" },
];

export default function AboutSection() {
	// mobile pager (2 cards per view)
	const [page, setPage] = useState(0);
	const pageSize = 1;
	const totalPages = Math.ceil(FEATURES.length / pageSize);
	const start = page * pageSize;
	const current = FEATURES.slice(start, start + pageSize);

  return (
    	<section id="about-us" className="py-16 bg-white">
      		<div className="mx-auto max-w-9xl px-6 lg:px-8">
				{/* Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				{/* Left: Image */}
				<div className="relative w-full h-[260px] lg:h-full sm:h-[360px] lg:h-[520px]">
					<Image
						src="https://ik.imagekit.io/lochhomesllc/assets/abstract-networking-concept-still-life-arrangement%201.svg"
						alt="Loch Homes Team"
						fill
						priority
						className="object-cover rounded-[7px]"
					/>
				</div>

         	{/* Right: Content */}
          	<div className="flex flex-col">
				{/* Content width constraint matches design */}
				<div className="w-full">
					{/* Breadcrumb */}
					<p className="text-xs sm:text-sm lg:text-base text-center sm:text-sm md:text-center text-gray-500 mb-1 tracking-wide">/ About Loch Homes</p>

					{/* Heading */}
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
						Who Are <span className="text-black">We?</span>
					</h2>

					{/* Lead + body copy with tight max width */}
					<p
					className="
						mt-3 text-base sm:text-lg md:text-xl 
						font-semibold text-gray-800 leading-snug 
						mx-auto sm:mx-0 text-center
					"
					>
					Loch Homes is a local, family-owned home-buying team based right here in Georgia.
					</p>

					<p
					className="
						mt-3 text-sm sm:text-base md:text-lg 
						text-gray-700 leading-relaxed 
						mx-auto sm:mx-0 text-center
					"
					>
					We help homeowners sell fast—with no fees, no repairs, and no stress. Our process
					is simple, honest, and built on trust. When you work with us, you get a fair cash
					offer, a quick closing, and the freedom to move on on your terms.
					</p>

				{/* Desktop: stacked feature cards (single column) */}
				<div className="hidden lg:flex flex-col gap-5 mt-8">
					{FEATURES.map((card, i) => (
					<div
						key={i}
						className="w-full border border-orange-200 rounded-[7px] px-8 py-6"
					>
						<h3 className="text-center font-semibold text-gray-900">
							{card.title}
						</h3>
						<p className="text-center text-sm text-gray-600 mt-2">
							{card.desc}
						</p>
					</div>
					))}
				</div>

				{/* Mobile/Tablet: 2-up grid + pager */}
				<div className="lg:hidden mt-8">
					<div className="grid grid-cols-1 gap-4">
						{current.map((card) => (
							<div
							key={card.title}
							className="border border-orange-200 rounded-[7px] p-4"
							>
							<h3 className="text-center font-semibold text-gray-900 text-base">
								{card.title}
							</h3>
							<p className="text-center text-sm text-gray-600 mt-2">
								{card.desc}
							</p>
							</div>
						))}
					</div>

					{/* Pager (only show if more than 2 cards) */}
					{FEATURES.length > 2 && (
						<div className="mt-6 flex items-center justify-center gap-6">
							<button
								aria-label="Previous"
								onClick={() => setPage((p) => Math.max(0, p - 1))}
								disabled={page === 0}
								className="h-10 w-10 rounded-full bg-orange-600 text-white grid place-items-center disabled:opacity-40"
							>
							←
							</button>
							<button
								aria-label="Next"
								onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
								disabled={page >= totalPages - 1}
								className="h-10 w-10 rounded-full bg-orange-600 text-white grid place-items-center disabled:opacity-40"
							>
							→
							</button>
						</div>
					)}
             	</div>
            </div>
		</div>
	</div>
	</div>
    </section>
  	);
}
