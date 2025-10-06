import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../redux/slices/moviesSlice";
import { useParams } from "react-router-dom";
import CastCarousel from "../../components/CastCarousel";
import OfficialVideoCarousel from "../../components/OfficialVideoCarousel";
import CardCarousel from "../../components/CardCarousel";
import CardCarouselLoading from "../../components/Loading/CardCarouselLoading";
import MovieDetailHeaderLoading from "../../components/Loading/MovieDetailHeaderLoading";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, movieDetailLoading, movieDetailError } = useSelector((state) => state.movies);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) dispatch(fetchMovieDetail(id));
  }, [id, dispatch]);

  if (movieDetailError) return <p className="text-white p-6">Error: {movieDetailError}</p>;

  const {
    title,
    overview,
    vote_average,
    release_date,
    runtime,
    genres,
    production_countries,
    credits,
    videos,
    similar,
    recommendations,
    poster_path,
  } = movieDetail || {};

  const director = credits?.crew?.find((member) => member.job === "Director");

  return (
    <div className="min-h-screen text-white">

      {/* Header Section */}
      {movieDetailLoading ? (
        <MovieDetailHeaderLoading />
      ) : (
        <div
          className="relative w-full flex items-end p-4 md:p-6 pt-[100px] md:pt-[120px] min-h-[400px]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(31,42,55,0.9), rgba(31,42,55,0.4)), url(https://image.tmdb.org/t/p/original${poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full items-end">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="rounded-2xl w-[220px] md:w-[250px] shadow-lg cursor-pointer hover:scale-105 transition-transform z-10"
              onClick={() => setIsModalOpen(true)}
            />

            <div className="flex-1 md:ml-9 z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">{title}</h1>
              {videos?.results?.length > 0 && (
                <a
                  href={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold text-sm md:text-lg rounded-xl transition-all duration-300"
                >
                  ▶ Watch Trailer
                </a>
              )}
              <p className="mt-2 md:mt-4 text-gray-200 text-4xl">Overview</p>
              <p className="mt-2 md:mt-4 text-gray-200 text-sm md:text-base">{overview}</p>
              <div className="text-gray-300 space-y-1 mt-2 md:mt-3 text-sm md:text-base">
                <p className="text-gray-400">
                  ⭐ Rating: <span className="text-yellow-400">{vote_average?.toFixed(1)}</span>
                </p>
                <p className="text-gray-400">
                  📅 Release Date: <span className="text-white">{release_date}</span>
                </p>
                <p className="text-gray-400">
                  🎭 Genre: <span className="text-white">{genres?.map((g) => g.name).join(", ")}</span>
                </p>
                <p className="text-gray-400">
                  🌍 Country: <span className="text-white">{production_countries?.map((c) => c.name).join(", ")}</span>
                </p>
                <p className="text-gray-400">
                  ⏱ Duration: <span className="text-white">{runtime ? `${runtime} mins` : "N/A"}</span>
                </p>
                <p className="text-gray-400">
                  🎬 Director: <span className="text-white">{director ? director.name : "N/A"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Poster Modal */}
      {isModalOpen && poster_path && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
            alt={title}
            className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Rest of the page */}
      <div className="bg-gradient-to-b from-[#1F2A37] to-[#111827] p-6 space-y-8">

        {/* Cast Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
          {movieDetailLoading ? (
            <CardCarouselLoading />
          ) : credits?.cast?.length > 0 ? (
            <CastCarousel
              cast={credits.cast.slice(0, 20)}
              nextClass="cast-next"
              prevClass="cast-prev"
            />
          ) : (
            <p className="text-gray-400">No cast information available.</p>
          )}
        </section>

        {/* Official Videos */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Official Videos</h2>
          {movieDetailLoading ? (
            <CardCarouselLoading />
          ) : videos?.results?.length > 0 ? (
            <OfficialVideoCarousel
              videos={videos.results.filter((v) => v.official)}
              nextClass="official-video-next"
              prevClass="official-video-prev"
            />
          ) : (
            <p className="text-gray-400">No official videos available.</p>
          )}
        </section>

        {/* Similar Movies Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
          {movieDetailLoading ? (
            <CardCarouselLoading />
          ) : similar?.results?.length > 0 ? (
            <CardCarousel
              movies={similar.results.slice(0, 10)}
              type="movie"
              nextClass="similar-next"
              prevClass="similar-prev"
            />
          ) : (
            <p className="text-gray-400">No similar movies available.</p>
          )}
        </section>

        {/* Recommended Movies Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>
          {movieDetailLoading ? (
            <CardCarouselLoading />
          ) : recommendations?.results?.length > 0 ? (
            <CardCarousel
              movies={recommendations.results.slice(0, 10)}
              type="movie"
              nextClass="recommended-next"
              prevClass="recommended-prev"
            />
          ) : (
            <p className="text-gray-400">No recommended movies available.</p>
          )}
        </section>
      </div>
    </div>
  );
}
