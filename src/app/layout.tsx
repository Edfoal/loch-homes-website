import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
            >
                {children}
            </body>
        </html>
    );
}
