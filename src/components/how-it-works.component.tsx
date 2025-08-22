"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-white w-full justify-center items-center text-center py-12 px-4">
        {/* Breadcrumb */}
              <p className="text-sm text-gray-500 tracking-wide mb-2">/ At Loch Homes</p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                 How it <span className="text-black">Works?</span>
              </h2>
      {/* Image for md & lg screens */}
      <div className="hidden md:block px-16 py-12">
        <Image
          src="/how-it-works-1.svg" // 🔁 replace with your md/lg image
          alt="How it works"
          width={1920}
          height={1080}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Image for sm screens */}
      <div className="block md:hidden py-8">
        <Image
          src="/how-it-works-2.svg" // 🔁 replace with your sm image
          alt="How it works mobile"
          width={500}
          height={800}
          className="w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
