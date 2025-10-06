import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/slices/moviesSlice";
import MovieDataTable from "../components/DataTable";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { popular, popularLoading, popularError } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="">
      {popularLoading && <p className="text-center">Loading movies...</p>}
      {popularError && (
        <p className="text-center text-red-500 font-semibold">{popularError}</p>
      )}
      <div className="bg-white rounded-lg shadow-md p-4">
        <MovieDataTable />
      </div>
    </div>
  );
}
