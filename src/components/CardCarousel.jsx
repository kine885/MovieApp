import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";

export default function CardCarousel({ movies = [], nextClass, prevClass }) {
  return (
    <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
        }}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={6}
        loop={false}
        breakpoints={{
          320: { slidesPerView: 2, slidesPerGroup: 2 },
          640: { slidesPerView: 3, slidesPerGroup: 3 },
          1024: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Prev Button */}
      <button className={` ${prevClass} custom-prev absolute top-1/3 -left-0 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Custom Next Button */}
      <button className={` ${nextClass} custom-next absolute top-1/3 -right-0 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
