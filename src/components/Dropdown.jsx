import { useState } from "react";

export default function Dropdown({genres = [],selectedGenre,onGenreChange,sortOptions = [],selectedSort,onSortChange}) {

  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="flex gap-4">
      {/* Genre Dropdown */}
      {onGenreChange && (
        <div className="relative">
          <button
            onClick={() => setShowGenreDropdown(!showGenreDropdown)}
            className="bg-blue-600 px-4 py-2 rounded-lg text-left text-white min-w-[180px]"
          >
            {selectedGenre?.name || "Select Genre"}
          </button>
          {showGenreDropdown && (
            <ul className="absolute z-10 mt-1 w-full bg-white text-gray-900 rounded-lg shadow-lg max-h-60 overflow-auto">
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-blue-300"
                  onClick={() => {
                    onGenreChange(null);
                    setShowGenreDropdown(false);
                  }}
                >
                  All Genres
                </button>
              </li>
              {genres.map((genre) => (
                <li key={genre.id}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-blue-300"
                    onClick={() => {
                      onGenreChange(genre);
                      setShowGenreDropdown(false);
                    }}
                  >
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Sort Dropdown */}
      {onSortChange && (
        <div className="relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="bg-blue-600 px-4 py-2 rounded-lg text-left text-white min-w-[180px]"
          >
            {sortOptions?.find((s) => s.value === selectedSort)?.label || "Sort By"}
          </button>
          {showSortDropdown && (
            <ul className="absolute z-10 mt-1 w-full bg-white text-gray-900 rounded-lg shadow-lg max-h-60 overflow-auto">
              {sortOptions.map((sort) => (
                <li key={sort.value}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-blue-300"
                    onClick={() => {
                      onSortChange(sort);
                      setShowSortDropdown(false);
                    }}
                  >
                    {sort.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
