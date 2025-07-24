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
                <a href="#about" className="hover:text-blue-200 transition">
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
                    absolute left-16 right-16 bottom-16 sm:w-auto sm:left-8 sm:right-8 z-20
                    flex flex-col items-left gap-4
                    lg:flex-row lg:items-center lg:gap-6 lg:left-16 lg:right-auto lg:bottom-16
                "

                // style={{
                //     animation: "bounceInUp 1s ease-out"
                // }}
            >
                {/* ✅ Logo */}
                <div className="flex-shrink-0 flex flex-col items-left justify-center">
                    <Image
                        src="/loch-homes-logo.svg"
                        alt="Loch Homes Logo"
                        width={300}   // original size for desktop
                        height={300}
                        className="
                            w-40   /* ~160px on mobile */
                            sm:w-56 /* ~224px on tablet */
                            lg:w-[300px] /* full 300px on desktop */
                            object-contain
                        "
                        priority
                    />
                </div>

                {/* ✅ Hero Text */}
                <div className="text-left">
                    <p className="text-xs sm:text-sm text-gray-200 mb-1 tracking-wide">
                        / Welcome to Loch Homes
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
                        Your Property.
                        <br />
                        Your Brand. Your Story.
                    </h1>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                        Sub heading goes here, explaining your value proposition briefly.
                    </p>

                    {/* ✅ CTA Buttons */}
                    <div className="mt-4 flex flex-col items-center sm:items-start sm:flex-row gap-4 w-full">
                        <a
                            href="#how-it-works"
                            className="w-full sm:w-auto px-6 py-3 text-center bg-orange-600 text-white font-medium rounded shadow hover:bg-orange-700 transition"
                        >
                            How it works?
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-6 py-3 text-center bg-white text-gray-800 font-medium rounded shadow hover:bg-gray-100 transition"
                        >
                            Contact Us!
                        </a>
                    </div>
                </div>
            </div>

            {/* <style jsx global>{`
                @keyframes bounceInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(50px) scale(0.95);
                    }
                    60% {
                        opacity: 1;
                        transform: translateY(-10px) scale(1.02);
                    }
                    80% {
                        transform: translateY(5px) scale(0.99);
                    }
                    100% {
                        transform: translateY(0) scale(1);
                    }
                }
                `}</style> */}

        </section>
    );
}
