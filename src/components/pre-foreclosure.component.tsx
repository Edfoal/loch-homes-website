import Image from "next/image";

export default function PreForeclosureSection() {
    return (
        <section className="bg-[#B5542F] text-white py-16 px-6">
        <div className="container mx-auto max-w-8xl flex flex-col gap-8">
            {/* ✅ Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
                {`Are you facing a pre-foreclosure and wondering if you can <br />
                keep the equity you've built in your home?`}
            </h2>

            {/* ✅ Paragraph */}
            <p className="text-base sm:text-lg text-center leading-relaxed">
                {`The good news is that rising home prices in many markets mean you
                might still have options to avoid a short sale and get cash back from
                your property. Even if you’re currently in mortgage forbearance or
                pre-foreclosure, there may still be time to take action and protect
                your financial future. At Loch Homes®, we specialize in helping
                homeowners in distress who need to sell quickly and without hassles.
                Our team of local home buyers can guide you through our offer process
                and evaluate whether we can purchase your house before the bank
                forecloses on it. We may be able to make you a fair cash offer that
                covers your debts and leaves you with extra funds to move on to the
                next chapter of your life. Contact us today to learn more about your
                options and take control of your financial future.`}
            </p>

            {/* ✅ Image */}
            <div className="w-full overflow-hidden rounded-lg">
                <Image
                    src="https://ik.imagekit.io/dt5nhkwoy/assets/cozy-studio-apartment-with-bedroom-living-space%202.svg?updatedAt=1753366074261"
                    alt="House model on money"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
        </section>
    );
}
