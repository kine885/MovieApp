import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroLoading({ nextClass, prevClass }) {
  const slides = Array.from({ length: 5 });

  return (
    <section className="relative h-screen w-full animate-pulse">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((_, idx) => (
          <SwiperSlide key={idx}>
            {/* Background skeleton */}
            <div className="absolute inset-0 bg-gray-700"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-screen-xl mx-auto h-full flex items-center px-6 lg:px-16">
              <div className="max-w-2xl space-y-4">
                <div className="flex gap-2">
                  <div className="h-5 w-10 bg-gray-500 rounded"></div>
                  <div className="h-5 w-16 bg-gray-500 rounded"></div>
                  <div className="h-5 w-12 bg-gray-500 rounded"></div>
                </div>
                <div className="h-12 md:h-16 xl:h-20 bg-gray-500 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-500 rounded w-full"></div>
                  <div className="h-3 bg-gray-500 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-500 rounded w-2/3"></div>
                </div>

                {/* Vote / buttons skeleton */}
                <div className="flex gap-4 mt-4">
                  <div className="h-10 w-28 bg-gray-500 rounded"></div>
                  <div className="h-10 w-28 bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${prevClass} absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center z-10`}
      ></button>
      <button
        className={`${nextClass} absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center z-10`}
      ></button>
    </section>
  );
}
