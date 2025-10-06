import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies, setUpcomingPage } from "../../redux/slices/moviesSlice";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Dropdown from "../../components/Dropdown";
import CardLoading from "../../components/Loading/CardLoading";
import MovieNavButtons from "../../components/MoviesBtn";

export default function UpcomingMovies() {
  const dispatch = useDispatch();
  const { upcoming, upcomingPage, totalUpcomingPages, upcomingLoading, genres } = useSelector(state => state.movies);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedSort, setSelectedSort] = useState("release_date.desc");

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
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
  ];

  // Fetch movies whenever page, genre, or sort changes
  useEffect(() => {
    dispatch(fetchUpcomingMovies({
      page: upcomingPage,
      genreId: selectedGenre?.id || null,
      sortBy: selectedSort
    }));
  }, [dispatch, upcomingPage, selectedGenre, selectedSort]);

  return (
    <div className="bg-[#1F2A37] min-h-screen">
      <div className="pt-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white px-4">Upcoming Movies</h2>

        {/* Buttons + Dropdowns on same row */}
        <div className="flex items-center gap-4 mb-6">
          {/* Buttons (left side) */}
          <div className="flex gap-4 flex-wrap">
           <MovieNavButtons />
          </div>

          {/* Dropdowns (right side) */}
          <div className="ml-auto flex gap-4">
            <Dropdown
              genres={genreOptions}
              selectedGenre={selectedGenre}
              onGenreChange={(g) => { setSelectedGenre(g); dispatch(setTopRatedPage(1)); }}
            />

            <Dropdown
              sortOptions={sortOptions}
              selectedSort={selectedSort}
              onSortChange={(s) => { setSelectedSort(s.value); dispatch(setTopRatedPage(1)); }}
            />
          </div>
        </div>

        {/* Movies Grid */}
        <section className="grid grid-cols-6 gap-5">
          {upcomingLoading ? (
            <CardLoading count={24} />
          ) : (
            upcoming?.slice(0, 24).map(movie => <Card key={movie.id} data={movie} />)
          )}
        </section>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            totalPages={totalUpcomingPages}
            currentPage={upcomingPage}
            onPageChange={(page) => dispatch(setUpcomingPage(page))}
          />
        </div>
      </div>
    </div>
  );
}
