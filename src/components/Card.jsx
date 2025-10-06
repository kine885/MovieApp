import { NavLink } from "react-router-dom";

export default function Card({ data }) {
  if (!data) return null; // skip rendering if data is undefined

  const type = data.title || data.name ? (data.title ? "movie" : "tv") : "unknown";

  return (
    <NavLink to={`/${type}/${data.id}`}>
      <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800 hover:scale-105 transition-transform duration-200 cursor-pointer">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden rounded-t-lg md:h-96">
          <img
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                : "/no-image.png" // fallback image
            }
            className="w-full h-full object-cover"
            alt={data.title || data.name || "Untitled"}
          />
        </div>

        {/* Text Section */}
        <div className="p-5">
          <h5 className="mb-2 font-inter font-bold text-[16px] tracking-tight text-gray-900 dark:text-white truncate">
            {data.title || data.name || "Untitled"}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.release_date || data.first_air_date || "N/A"}
          </p>
          <p className="mb-3 font-normal text-yellow-400">
            ⭐ {data.vote_average != null ? data.vote_average.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
