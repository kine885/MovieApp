import { NavLink } from "react-router-dom";
import { FaFilm, FaTv, FaUsers, FaChartBar } from "react-icons/fa";

export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-[#1F2A37] text-gray-200 min-h-screen p-6">
      <div className="text-xl font-bold mb-6">Admin Menu</div>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/admin/movies"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 text-yellow-400 font-semibold"
                : "flex items-center gap-3 hover:text-white"
            }
          >
            <FaFilm />
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/tv"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 text-yellow-400 font-semibold"
                : "flex items-center gap-3 hover:text-white"
            }
          >
            <FaTv />
            TV Series
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
