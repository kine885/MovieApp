import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchResults, setSearchPage} from "../redux/slices/moviesSlice";
import Card from "../components/Card";
import CardLoading from "../components/Loading/CardLoading";
import Pagination from "../components/Pagination";

export default function SearchPage() {
  const dispatch = useDispatch();
  const { searchResults, searchLoading, searchError, searchPage, totalSearchPages } = useSelector(
    (state) => state.movies
  );

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults({
         query, 
         page: searchPage 
      }));
    }
  }, [query, dispatch , searchPage]);

  // Filter out invalid results (people or missing poster)
  const validResults = searchResults?.filter(
    (item) =>
      item &&
      (item.media_type === "movie" || item.media_type === "tv") &&
      item.poster_path
  );

  return (
    <div className="min-h-screen bg-[#111827] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {searchError && <p className="text-red-500">{searchError}</p>}

      {!searchLoading && validResults?.length === 0 && (
        <p className="text-gray-400">No results found.</p>
      )}

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {searchLoading
          ? <CardLoading count={24} />
          : validResults?.map((item) => <Card key={item.id} data={item} />)
        }
      </section>
       <div className="mt-6">
                <Pagination
                  totalPages={totalSearchPages}
                  currentPage={searchPage}
                  onPageChange={(page) => dispatch(setSearchPage(page))}
                />
        </div>
    </div>
  );
}
