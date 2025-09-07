'use client';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const accordionData = [
    {
        title: "Stopping Foreclosures",
        content:
        "Facing foreclosure can be overwhelming, but you don't have to go through it alone. We'll work with you to create a personalized plan to help save your home or find the best possible alternative before it's too late.",
    },
    {
        title: "Short Sales",
        content:
        "Short sales can help you avoid foreclosure and protect your credit. We'll guide you through the process and find the best outcome for your situation.",
    },
    {
        title: "Probate Assistance",
        content:
        "Navigating probate can be stressful. We provide guidance to ensure you manage the estate efficiently and fairly.",
    },
    {
        title: "Tax Sale Solutions",
        content:
        "Property tax issues? Our team can help you explore solutions to avoid tax sales and protect your home.",
    },
    {
        title: "Listing Your Property on the Market",
        content:
        "Ready to sell? We help you list your property and get a fair offer quickly, with no repairs or hassle.",
    },
];

export default function HelpAccordion() {
    const [openIndex, setOpenIndex] = useState(0); // first item open by default

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-[#C2613D10] max-w-full mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-4">
            
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm lg:text-base text-center sm:text-sm text-gray-500 mb-1 tracking-wide">/ At Loch Homes</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
                How We Can Help Homeowners
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl 
                            text-gray-600 leading-snug 
                            mx-auto sm:mx-0 text-center px-10 md:px-20 lg:px-40">
                At Loch Homes, we know that life can throw unexpected challenges your way. Whether
                you're facing foreclosure, navigating probate, dealing with unpaid taxes, property
                already sold at a tax sale or simply ready to sell, we're here to guide you every step
                of the way. Our goal is to provide fast, straightforward solutions — with no upfront
                costs to you.
            </p>

            <div className="space-y-2 px-2 md:px-20 lg:px-40">
                {accordionData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                    key={index}
                    className={`rounded-lg overflow-hidden shadow px-0 md:px-10 py-0 ${
                        isOpen ? "bg-[#c85d32] text-white" : "bg-white text-orange-600"
                    }`}
                    >
                    <button
                        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                        onClick={() => toggleItem(index)}
                        >
                        <span className="font-semibold text-base sm:text-lg md:text-xl">
                            {item.title}
                        </span>

                        {/* Circle background for arrows */}
                        <span
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                isOpen ? "bg-white text-[#c85d32]" : "bg-[#c85d32] text-white"
                            }`}
                        >
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </button>

                    {/* Animated Content */}
                    <div
                    className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                    >
                    <div className="overflow-hidden px-6 pb-0 text-sm sm:text-base md:text-lg">
                        {item.content}
                    </div>
                    </div>
            </div>
            );
            })}
        </div>
        </div>
    );
}
