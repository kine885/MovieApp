import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularTvSeries,
  fetchTopRatedTvSeries,
  fetchAiringTodayTvSeries,
  fetchOnTheAirTvSeries,
} from "../redux/slices/moviesSlice";
import MovieDataTable from "../components/DataTable";

export default function TvSeriesPage() {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("popular");

  const {
    popularTvSeries,
    topRatedTvSeries,
    airingTodayTvSeries,
    onTheAirTvSeries,
    popularTvSeriesLoading,
    topRatedTvSeriesLoading,
    airingTodayTvSeriesLoading,
    onTheAirTvSeriesLoading,
    popularTvSeriesError,
    topRatedTvSeriesError,
    airingTodayTvSeriesError,
    onTheAirTvSeriesError,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    if (selectedType === "popular") dispatch(fetchPopularTvSeries());
    if (selectedType === "topRated") dispatch(fetchTopRatedTvSeries());
    if (selectedType === "airingToday") dispatch(fetchAiringTodayTvSeries());
    if (selectedType === "onTheAir") dispatch(fetchOnTheAirTvSeries());
  }, [dispatch, selectedType]);

  const dataMap = {
    popular: popularTvSeries,
    topRated: topRatedTvSeries,
    airingToday: airingTodayTvSeries,
    onTheAir: onTheAirTvSeries,
  };
  const loadingMap = {
    popular: popularTvSeriesLoading,
    topRated: topRatedTvSeriesLoading,
    airingToday: airingTodayTvSeriesLoading,
    onTheAir: onTheAirTvSeriesLoading,
  };
  const errorMap = {
    popular: popularTvSeriesError,
    topRated: topRatedTvSeriesError,
    airingToday: airingTodayTvSeriesError,
    onTheAir: onTheAirTvSeriesError,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">TV Series</h1>

      <div className="flex justify-center gap-3 mb-6">
        {["popular", "topRated", "airingToday", "onTheAir"].map((type) => (
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
