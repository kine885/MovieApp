import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const isMoviesActive = location.pathname.startsWith("/movies");
  const isTvActive = location.pathname.startsWith("/tv");

  // Handle submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-[#092C4C] border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-6">
          <NavLink to={"/"}>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Movies
            </span>
          </NavLink>
          <form
            onSubmit={handleSearch}
            className="relative hidden md:block w-64"
          >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-navbar"
              placeholder="Search..."
              className="block w-full p-2 ps-10 text-sm text-gray-900 border 
              border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
              focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
            />
          </form>
        </div>
        <div
          className="items-center justify-between hidden md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-row space-x-8 font-medium">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red-500"
                  : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              }
            >
              Home
            </NavLink>

            <li>
              <NavLink
                to={"/movies/popular"}
                className={
                  isMoviesActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red-500"
                    : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }
              >
                Movies
              </NavLink>
            </li>

            <NavLink
              to={"/tv/popular"}
              className={
                isTvActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red-500"
                  : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              }
            >
              TV Series
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
