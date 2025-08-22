import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen">
            {/* ✅ Background Image covering full viewport */}
            <Image
                src="https://ik.imagekit.io/dt5nhkwoy/assets/pexels-photo-7031607.jpeg?updatedAt=1753362045284" // Replace with ImageKit background URL
                alt="Hero Background"
                fill
                priority
                className="object-cover"
            />
            {/* ✅ Overlay for better readability */}
            {/* ✅ Circular vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0.2)_10%,rgba(0,0,0,0.75)_80%)]" />

            {/* ✅ NAVBAR */}
            <nav
                className="
                    absolute top-6 z-20 
                    flex gap-6 text-white text-sm font-medium 
                    justify-center w-full 
                    lg:w-auto lg:right-8 lg:justify-end
                "
            >
                <a href="#about-us" className="hover:text-blue-200 transition">
                    About Us
                </a>
                <a href="#reviews" className="hover:text-gray-200 transition">
                    Reviews
                </a>
                <a href="#how-it-works" className="hover:text-gray-200 transition">
                    How it Works
                </a>
            </nav>

            {/* ✅ Bottom-left Section */}
            <div
                className="
                    absolute left-8 right-8 bottom-8 sm:w-auto sm:left-8 sm:right-8 z-20 md:left-16 md:right-16 md:bottom-16
                    flex flex-col items-left gap-4
                    lg:flex-row lg:items-center lg:gap-6 lg:left-16 lg:right-auto lg:bottom-16
                "

                // style={{
                //     animation: "bounceInUp 1s ease-out"
                // }}
            >
                <div className="flex-shrink-0 flex items-start justify-center">
                    {/* Mobile → logo-2 */}
                    <div className="block lg:!hidden justify-center">
                        <Image
                            src="/loch-homes-logo-2.svg"
                            alt="Loch Homes Logo"
                            width={300}
                            height={300}
                            className="w-56 object-contain"
                            priority
                        />
                    </div>

                    {/* Tablet & Desktop → logo-1 */}
                    <div className="hidden lg:!block justify-left">
                        <Image
                            src="/loch-homes-logo-1.svg"
                            alt="Loch Homes Logo"
                            width={300}
                            height={300}
                            className="sm:w-56 lg:w-[300px] object-contain"
                        />
                    </div>
                </div>

                {/* ✅ Hero Text */}
                <div className="text-left sm:text-center lg:text-left">
                    <p className="text-xs text-center sm:text-left sm:text-sm text-gray-200 mb-1 tracking-wide">
                        / Welcome to Loch Homes
                    </p>

                    <h1 className="max-w-[20ch] text-center sm:text-left sm:max-w-[25ch] md:text-left md:max-w-[30ch] text-4xl sm:text-4xl md:text-5xl font-bold text-white leading-snug break-words">
                    Sell Your House Fast - Get Cash in Hand, Quickly.
                    </h1>
                    <p className="text-gray-300 mt-2 text-sm text-center md:text-left sm:text-left sm:text-base">
                        No matter the condition, size, age or situation - we'll make you a fair cash offer.
                    </p>

                    {/* ✅ CTA Buttons */}
                    <div className="mt-4 flex justify-center lg:justify-start gap-4 w-full">
                    <a
                        href="#how-it-works"
                        className="
                        w-full sm:w-auto 
                        px-4 py-2 text-sm 
                        sm:px-5 sm:py-2.5 sm:text-base 
                        md:px-6 md:py-3 md:text-lg
                        text-center bg-orange-600 text-white font-medium rounded shadow 
                        hover:bg-orange-700 transition
                        "
                    >
                        How it works?
                    </a>
                    <a
                        href="#contact"
                        className="
                        w-full sm:w-auto 
                        px-4 py-2 text-sm 
                        sm:px-5 sm:py-2.5 sm:text-base 
                        md:px-6 md:py-3 md:text-lg
                        text-center bg-white text-gray-800 font-medium rounded shadow 
                        hover:bg-gray-100 transition
                        "
                    >
                        Contact Us!
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
