"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "This crew is seriously awesome! Super professional, totally ethical, and they genuinely care. You know how businesses these days are all about themselves, right? Well, Kaylee smashes that stereotype with their top-notch service. When I had to deal with the whole probate thing after my mom passed, they were a lifesaver. Our family home and all the stuff mom worked so hard for were on the line, and these folks were patient beyond belief. Seriously, choosing Kaylee was like having a real ally to navigate a tough time. Huge props to them!",
    author: "Amanda Zukerman",
  },
  {
    id: 2,
    text: "I can’t say enough nice things about Kaylee and LochHomes. Kaylee was a bright positive light in the dark situation I found myself in. She helped us even when she received nothing for it… you just don’t find to many people like that. She was honest and straight forward and I would recommend her and the company she works for 100%.",
    author: "Alexa Bonadia",
  },
  {
    id: 3,
    text: "Loch Homes was a game-changer for me. I was behind on payments and facing a foreclosure date. I thought I was out of options. They stepped in, explained my choices clearly, and made me a fair cash offer without asking for repairs or cleanup. Because of their help, I avoided foreclosure, protected my credit, and actually walked away with money at closing. They handled everything from start to finish, which gave me the fresh start I desperately needed.",
    author: "Ravi Pawar",
  },
];


function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="relative bg-white shadow-md rounded-md text-gray-600 max-w-md mx-auto h-64 pb-10">
      {/* ✅ Brown border across full width */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#B5542F] rounded-t-md" />

      {/* ✅ Quote Icon overlapping border on top-left */}
      <div className="absolute -top-6 left-10 bg-[#B5542F] text-white p-2 rounded-full shadow-md">
        <FaQuoteLeft size={30} />
      </div>

      {/* ✅ Card Content */}
      <div className="flex flex-col h-full p-6 pt-8">
        {/* Text area takes available space */}
        <p className="text-sm leading-relaxed flex-1 overflow-hidden text-ellipsis">
          {text}
        </p>

        {/* Author name is pinned to bottom-left */}
        <p className="font-semibold text-black mt-4 absolute bottom-4 left-6">
          {author}
        </p>
      </div>
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
            / What people say about Loch Homes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Testimonials
          </h2>
        </div>

        {/* ✅ Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} />
          ))}
        </div>

        {/* ✅ Mobile: Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            loop={true}
            className="pb-8"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="overflow-visible pt-10">
                <TestimonialCard text={t.text} author={t.author} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
