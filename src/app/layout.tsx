import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

// Load Google Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
    title: "My Single Page Website",
    description: "A modern single-page website built with Next.js and Tailwind CSS.",
    keywords: [
        "Next.js",
        "Tailwind CSS",
        "Single Page Website",
        "Modern Web Design",
    ],
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    openGraph: {
        title: "My Single Page Website",
        description: "A modern single-page website built with Next.js and Tailwind CSS.",
        url: "https://yourwebsite.com",
        siteName: "My Single Page Website",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Single Page Website",
        description: "A modern single-page website built with Next.js and Tailwind CSS.",
    },
    icons: {
        icon: "https://ik.imagekit.io/lochhomesllc/assets/loch-homes-logo-3.svg",
        apple: "https://ik.imagekit.io/lochhomesllc/assets/loch-homes-logo-3.svg",
    },
    metadataBase: new URL("https://yourwebsite.com"),
};

// ✅ Root Layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="https://ik.imagekit.io/lochhomesllc/assets/loch-homes-logo-3.svg" />
                <link rel="apple-touch-icon" href="https://ik.imagekit.io/lochhomesllc/assets/loch-homes-logo-3.svg" />
                <script defer async src="https://cdn.trustindex.io/loader.js?3b2ba37518721940b786b6795f1"/>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
            >
                {children}
            </body>
        </html>
    );
}
