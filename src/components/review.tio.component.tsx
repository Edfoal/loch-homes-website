// components/Review.tsx
"use client"; // if you're using App Router and this is a client component

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Review() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 sm:px-6 lg:px-16">
            {/* Optional heading */}
            {/* <h2 className="text-xl sm:text-2xl font-semibold mb-6">What our customers say</h2> */}

            {/* Trustindex widget container */}
            // @ts-ignore
            {/* <div className="trustindex-widget w-full max-w-md sm:max-w-lg md:max-w-2xl flex justify-center" src="https://cdn.trustindex.io/loader.js?3b2ba37518721940b786b6795f1" />
             */}
             <Script
                src="https://cdn.trustindex.io/loader.js?3b2ba37518721940b786b6795f1"
                strategy="afterInteractive"
            />
        </div>
    );
}