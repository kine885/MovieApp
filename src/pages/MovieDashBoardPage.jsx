import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
} from "../redux/slices/moviesSlice";
import MovieDataTable from "../components/DataTable";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("popular");

  const { 
    popular, topRated, trending, upcoming, nowPlaying,
    popularLoading, topRatedLoading, trendingLoading, upcomingLoading, nowPlayingLoading,
    popularError, topRatedError, trendingError, upcomingError, nowPlayingError
  } = useSelector((state) => state.movies);

  useEffect(() => {
    if (selectedType === "popular") dispatch(fetchPopularMovies());
    if (selectedType === "topRated") dispatch(fetchTopRatedMovies());
    if (selectedType === "trending") dispatch(fetchTrendingMovies());
    if (selectedType === "upcoming") dispatch(fetchUpcomingMovies());
    if (selectedType === "nowPlaying") dispatch(fetchNowPlayingMovies());
  }, [dispatch, selectedType]);

  // Select the right data
  const dataMap = {
    popular: popular,
    topRated: topRated,
    trending: trending,
    upcoming: upcoming,
    nowPlaying: nowPlaying,
  };
  const loadingMap = {
    popular: popularLoading,
    topRated: topRatedLoading,
    trending: trendingLoading,
    upcoming: upcomingLoading,
    nowPlaying: nowPlayingLoading,
  };
  const errorMap = {
    popular: popularError,
    topRated: topRatedError,
    trending: trendingError,
    upcoming: upcomingError,
    nowPlaying: nowPlayingError,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Movies</h1>

      {/* Movie type selector */}
      <div className="flex justify-center gap-3 mb-6">
        {["popular","topRated","trending","upcoming","nowPlaying"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedType === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Movie DataTable */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <MovieDataTable
          data={dataMap[selectedType]}
          loading={loadingMap[selectedType]}
          error={errorMap[selectedType]}
        />
      </div>
    </div>
  );
}
