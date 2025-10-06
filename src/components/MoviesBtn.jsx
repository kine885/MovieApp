// src/components/NavButtons.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const activeClass =
  "py-1 px-3 text-lg font-medium rounded-lg border focus:outline-none focus:ring-4 bg-blue-700 text-white border-blue-700";
const inactiveClass =
  "py-1 px-3 text-lg font-medium rounded-lg border focus:outline-none focus:ring-4 bg-white text-gray-900 border-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-blue-600 dark:hover:text-white dark:hover:bg-gray-700";

export default function NavButtons({ type = "movie" }) {
  const buttons =
    type === "movie"
      ? [
          { label: "Popular", path: "/movies/popular" },
          { label: "Upcoming", path: "/movies/upcoming" },
          { label: "Top Rated", path: "/movies/top_rated" },
          { label: "Now Playing", path: "/movies/now_playing" },
        ]
      : [
          { label: "Popular", path: "/tv/popular" },
          { label: "Top Rated", path: "/tv/top_rated" },
          { label: "Airing Today", path: "/tv/airing_today" },
          { label: "On The Air", path: "/tv/on_the_air" },
        ];

  return (
    <nav>
      <div className="flex gap-4 flex-wrap mt-7 py-1 px-3 text-lg font-medium">
        {buttons.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
