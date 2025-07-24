"use client";

import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  { id: 1, rating: 4.8, url: "https://google.com/reviews" },
  { id: 2, rating: 4.8, url: "https://google.com/reviews" },
  { id: 3, rating: 4.8, url: "https://google.com/reviews" },
  { id: 4, rating: 4.8, url: "https://google.com/reviews" },
  { id: 5, rating: 4.8, url: "https://google.com/reviews" },
];

function ReviewCard({ review }: { review: { id: number; rating: number; url: string } }) {
  return (
    <div className="flex flex-col items-left text-left">
      {/* ✅ Rating + Stars inline */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-orange-500">{review.rating}</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} className="text-orange-500 text-xl" />
          ))}
        </div>
      </div>

      {/* ✅ Google Label */}
      <span className="mt-2 text-gray-700 font-semibold text-base">Google</span>

      {/* ✅ Hyperlink */}
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm hover:underline"
      >
        Customer Reviews
      </a>
    </div>
  );
}

export default function GoogleReviewStrip() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">

        {/* ✅ Desktop: Static row */}
        <div className="hidden md:flex justify-center gap-10">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* ✅ Mobile: Carousel - stays 1 slide per row */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}   // ✅ only 1 per view
            spaceBetween={20}  // ✅ spacing but still single row
            loop={true}
            autoplay={{ delay: 2500 }}
            className="w-full"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
