import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="py-16 bg-white">
		<div className="container mx-auto px-6 lg:px-6">
			{/* ✅ Grid layout: image left + content right */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
			{/* ✅ Left: Image */}
			<div className="w-full rounded-lg overflow-hidden">
				<Image
					src="https://ik.imagekit.io/dt5nhkwoy/assets/abstract-networking-concept-still-life-arrangement%201.svg?updatedAt=1753364811185"
					alt="Loch Homes Team"
					width={800}
					height={600}
					className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-cover rounded-lg"
				/>
			</div>

			{/* ✅ Right: Content */}
			<div className="flex flex-col gap-6">
				{/* Breadcrumb */}
				<p className="text-sm text-gray-500 tracking-wide">
				/ About Loch Homes
				</p>

				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
					Who Are <span className="text-black">We?</span>
				</h2>

				{/* Description */}
				<p className="text-gray-700 leading-relaxed">
				At Loch Homes, we are a team of trusted experts in home buying who
				provide real solutions to homeowners who are ready to sell. We are
				a locally-based company that takes a sincere interest in the
				communities we invest in. By choosing to do business with our team
				of professionals, you can rest assured that you will receive the
				quickest and most competitive offer while helping to improve the
				neighborhood you once called home. Plus, you can get paid today to
				sell your home today without the headaches of listing with a
				realtor.
				</p>

				{/* ✅ Feature Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
					{/* Card 1 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Trusted Home Experts
						</h3>
						<p className="text-sm text-gray-600">
						Experienced team focused on home buying.
						</p>
					</div>

					{/* Card 2 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Competitive Offers
						</h3>
						<p className="text-sm text-gray-600">
						Aim to provide fast, top-value cash offers for homes.
						</p>
					</div>

					{/* Card 3 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Same-Day Payment
						</h3>
						<p className="text-sm text-gray-600">
						Homeowners can get paid on the same day they sell.
						</p>
					</div>

					{/* Card 4 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Trusted Home Experts
						</h3>
						<p className="text-sm text-gray-600">
						Experienced team focused on home buying.
						</p>
					</div>

					{/* Card 5 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Trusted Home Experts
						</h3>
						<p className="text-sm text-gray-600">
						Experienced team focused on home buying.
						</p>
					</div>

					{/* Card 6 */}
					<div className="border border-orange-200 rounded-lg p-4">
						<h3 className="font-semibold text-gray-900">
						Trusted Home Experts
						</h3>
						<p className="text-sm text-gray-600">
						Experienced team focused on home buying.
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>
		</section>
	);
}
