import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedTvSeries, setTopRatedTvSeriesPage } from "../../redux/slices/moviesSlice";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Dropdown from "../../components/Dropdown";
import CardLoading from "../../components/Loading/CardLoading";
import MovieNavButtons from "../../components/MoviesBtn";


export default function TopRatedTvSeries() {
  const dispatch = useDispatch();
  const { topRatedTvSeries, topRatedTvSeriesPage, totalTopRatedTvSeriesPages, topRatedTvSeriesLoading } = useSelector(state => state.movies);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedSort, setSelectedSort] = useState("vote_average.desc");

  // Sort options
  const sortOptions = [
    { value: "popularity.desc", label: "Popularity (Descending)" },
    { value: "popularity.asc", label: "Popularity (Ascending)" },
    { value: "vote_average.desc", label: "Rating (Descending)" },
    { value: "vote_average.asc", label: "Rating (Ascending)" },
    { value: "release_date.desc", label: "Release Date (Descending)" },
    { value: "release_date.asc", label: "Release Date (Ascending)" },
    { value: "title.asc", label: "Title (A-Z)" },
    { value: "title.desc", label: "Title (Z-A)" },
  ];

  // Genre options
  const genreOptions = [
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 10768, name: "War & Politics" },
  { id: 10749, name: "Romance" },
  { id: 9648, name: "Mystery" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
];

  // Fetch TV shows whenever page, genre, or sort changes
  useEffect(() => {
    dispatch(fetchTopRatedTvSeries({
      page: topRatedTvSeriesPage,
      genreId: selectedGenre?.id || null,
      sortBy: selectedSort
    }));
   console.log("Selected Genre:", selectedGenre?.name, "Genre ID:", selectedGenre?.id);
  console.log("TV Series Array:", topRatedTvSeries);
  console.log("Loading:", topRatedTvSeriesLoading);
  }, [dispatch, topRatedTvSeriesPage, selectedGenre, selectedSort]);


  return (
    <div className="bg-[#1F2A37] min-h-screen">
      <div className="pt-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white px-4">Top Rated Tv Series</h2>

        {/* Buttons + Dropdowns on same row */}
        <div className="flex items-center gap-4 mb-6">
          {/* Buttons (left side) */}
          <div className="flex gap-4 flex-wrap ">
            <MovieNavButtons type="tv" />
          </div>
          {/* Dropdowns (right side) */}
          <div className="ml-auto flex gap-4">
            <Dropdown
              genres={genreOptions}
              selectedGenre={selectedGenre}
              onGenreChange={(g) => { setSelectedGenre(g); dispatch(setPopularTvSeriesPage(1)); }}
            />

            <Dropdown
              sortOptions={sortOptions}
              selectedSort={selectedSort}
              onSortChange={(s) => { setSelectedSort(s.value); dispatch(setPopularTvSeriesPage(1)); }}
            />
          </div>
        </div>

        {/* TV Series Grid */}
        <section className="grid grid-cols-6 gap-5">
          {topRatedTvSeriesLoading ? (
            <CardLoading count={24} />
          ) : (
            topRatedTvSeries?.slice(0, 24).map(tvShow => <Card key={tvShow.id} data={tvShow} />)
          )}
        </section>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            totalPages={totalTopRatedTvSeriesPages}
            currentPage={topRatedTvSeriesPage}
            onPageChange={(page) => dispatch(setTopRatedTvSeriesPage(page))}
          />
        </div>
      </div>
    </div>
  );
}
