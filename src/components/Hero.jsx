import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

export default function Hero({ data, nextClass, prevClass }) {
  return (
    <section className="relative h-screen w-full text-white">
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
        {data.map((movie) => {
          const type = movie.title ? "movie" : "tv"; // Determine type
          return (
            <SwiperSlide key={movie.id}>
              <div className="absolute inset-0 bg-cover bg-center" 
                   style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 max-w-screen-xl mx-auto h-full flex items-center px-6 lg:px-16">
                <div className="max-w-2xl">
                  <div className="flex gap-2 mb-2">
                    <span className="bg-blue-800 text-xs px-2 py-1 rounded">HD</span>
                    <span className="bg-blue-800 text-xs px-2 py-1 rounded">Movie</span>
                    <span className="bg-blue-800 text-xs px-2 py-1 rounded">
                      {movie.release_date?.slice(0, 4)}
                    </span>
                  </div>
                  <p className="text-blue-500 font-semibold mb-2">Now Streaming</p>
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4">
                    {movie.title}
                  </h1>
                  <p className="text-gray-200 mb-4 line-clamp-3">{movie.overview}</p>
                  <p className="flex items-center mb-6">
                    <span className="text-yellow-400 mr-2">★</span>
                    {movie.vote_average}/10 IMDb
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    {movie.videos?.results?.[0]?.key && (
                      <a
                        href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 hover:bg-blue-800 px-6 py-2 rounded font-medium"
                      >
                        Watch Now
                      </a>
                    )}
                     <NavLink
                      to={`/${type}/${movie.id}`}
                      className="px-6 py-2 rounded font-medium bg-blue-800 hover:bg-blue-700"
                    >
                      Watch Now
                    </NavLink>
                    <NavLink
                      to={`/${type}/${movie.id}`}
                      className="border border-white px-6 py-2 rounded font-medium"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className={`${prevClass} absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className={`${nextClass} absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 z-10 shadow-md`}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
