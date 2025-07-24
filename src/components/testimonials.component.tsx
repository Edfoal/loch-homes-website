"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
    author: "Francis Towne",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
    author: "David Miller",
  },
];

function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="relative bg-white border border-orange-200 shadow-md rounded-md p-6 text-gray-600 max-w-md mx-auto">
      {/* ✅ Icon stays INSIDE the card safely */}
      <div className="flex justify-start mb-4">
        <div className="bg-[#B5542F] text-white p-2 rounded-full">
          <FaQuoteLeft />
        </div>
      </div>

      {/* ✅ Testimonial Text */}
      <p className="text-sm leading-relaxed">{text}</p>

      {/* ✅ Author */}
      <p className="mt-4 font-semibold text-black">{author}</p>
    </div>
  );
}


export default function Testimonials() {
  return (
    <section className="bg-[#fdfbf9] py-16">
      <div className="container mx-auto px-6">
        {/* ✅ Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-wide">
            / What people say about Loch Homes.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Testimonials
          </h2>
        </div>

        {/* ✅ Desktop: Static Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} />
          ))}
        </div>

        {/* ✅ Mobile: Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            loop={true}
            className="pb-10"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <TestimonialCard text={t.text} author={t.author} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
