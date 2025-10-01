import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable strict mode for React
	reactStrictMode: false,

	// Optimize fonts (Next.js built-in)
	// optimizeFonts: true,
	// output: 'export',
	// basePath: '', // adjust if hosting in a subfolder
	// assetPrefix: '/', // important for relative paths

	// Enable SWC minifier for faster builds
	// swcMinify: true,

	// Support modern image optimization
	images: {
		// unoptimized: true, // since we're exporting a static site
		formats: ["image/avif", "image/webp"],
		domains: [
			"ik.imagekit.io",   // Add your image CDN or external domains
		],
		dangerouslyAllowSVG: true,   // 👈 allows SVGs but bypasses optimizer
	},

	// Internationalization (if you have multiple languages)
	// i18n: {
	// 	locales: ["en"],   // add more like ["en", "fr", "de"]
	// 	defaultLocale: "en",
	// },

	// SEO & Performance
	poweredByHeader: false,  // removes "X-Powered-By: Next.js"
	// compress: true,          // enable gzip compression
	trailingSlash: false,    // keep clean URLs (e.g. /about not /about/)

	// Custom webpack config (optional)
	webpack: (config) => {
		// Example: Add alias for cleaner imports
		config.resolve.alias["@"] = require("path").resolve(__dirname, "src");
		return config;
	},
};

export default nextConfig;
