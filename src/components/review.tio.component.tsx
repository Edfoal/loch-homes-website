"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Review() {

  return (
    <section id="reviews" className="bg-gray-50">
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
          What our customers say
        </h2>

        {/* Force container height so it doesn’t collapse before load */}
        <div
          id="trustindex-widget"
          className="ti-widget"
          data-widget-id="570819653109650aa3961e9d101"
          style={{ minHeight: "300px", width: "100%" }}
          // src="https://cdn.trustindex.io/loader.js?570819653109650aa3961e9d101"
          {...{ src: "https://cdn.trustindex.io/loader.js?570819653109650aa3961e9d101" }}
        ></div>

      </div>
    </section>
  );
}
