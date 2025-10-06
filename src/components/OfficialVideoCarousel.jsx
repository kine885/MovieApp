// src/components/OfficialVideoCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import OfficialVideoCard from "./OfficialVideoCard";
import "swiper/css";
import "swiper/css/navigation";

export default function OfficialVideoCarousel({ videos, nextClass, prevClass }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="relative w-full mt-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        loop={false}
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = `.${nextClass}`;
          swiper.params.navigation.prevEl = `.${prevClass}`;
        }}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <OfficialVideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <button className={`${prevClass} custom-prev absolute top-1/2 -left-0 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button className={`${nextClass} custom-next absolute top-1/2 -right-0 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
