// components/Review.tsx
"use client"; // if you're using App Router and this is a client component

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Review() {
  return (
    <section id="reviews" className="bg-gray-50 py-12">
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 sm:px-6 lg:px-16">
        {/* Optional heading */}
        {/* <h2 className="text-xl sm:text-2xl font-semibold mb-6">What our customers say</h2> */}

        {/* 🔑 Placeholder container that Trustindex will replace */}
        <div
          className="ti-widget"
          data-widget-id="570819653109650aa3961e9d101"
        ></div>

        {/* Load Trustindex script */}
        <Script
          src="https://cdn.trustindex.io/loader.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}