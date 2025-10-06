import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-[#092C4C] text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">
          Admin Dashboard
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/movies"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/tv"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              TV Series
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
