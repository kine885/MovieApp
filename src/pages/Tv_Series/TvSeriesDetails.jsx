import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvSeriesDetail } from "../../redux/slices/moviesSlice";
import { useParams } from "react-router-dom";
import CastCarousel from "../../components/CastCarousel";
import OfficialVideoCarousel from "../../components/OfficialVideoCarousel";
import CardCarousel from "../../components/CardCarousel";
import CardCarouselLoading from "../../components/Loading/CardCarouselLoading";
import MovieDetailHeaderLoading from "../../components/Loading/MovieDetailHeaderLoading";

export default function TvSeriesDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tvSeriesDetail, tvSeriesDetailLoading, tvSeriesDetailError } = useSelector((state) => state.movies);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) dispatch(fetchTvSeriesDetail(id));
  }, [id, dispatch]);

  if (tvSeriesDetailError) return <p className="text-white p-6">Error: {tvSeriesDetailError}</p>;

  const {
    name,
    overview,
    vote_average,
    first_air_date,
    episode_run_time,
    genres,
    production_countries,
    credits,
    videos,
    similar,
    recommendations,
    poster_path,
  } = tvSeriesDetail || {};

  const director = credits?.crew?.find((member) => member.job === "Director");

  return (
    <div className="min-h-screen text-white">

      {/* Header Section */}
      {tvSeriesDetailLoading ? (
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
              alt={name}
              className="rounded-2xl w-[220px] md:w-[250px] shadow-lg cursor-pointer hover:scale-105 transition-transform z-10"
              onClick={() => setIsModalOpen(true)}
            />

            <div className="flex-1 md:ml-9 z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">{name}</h1>
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
                  📅 First Air Date: <span className="text-white">{first_air_date}</span>
                </p>
                <p className="text-gray-400">
                  🎭 Genre: <span className="text-white">{genres?.map((g) => g.name).join(", ")}</span>
                </p>
                <p className="text-gray-400">
                  🌍 Country: <span className="text-white">{production_countries?.map((c) => c.name).join(", ")}</span>
                </p>
                <p className="text-gray-400">
                  ⏱ Episode Duration: <span className="text-white">{episode_run_time?.[0] ? `${episode_run_time[0]} mins` : "N/A"}</span>
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
            alt={name}
            className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Rest of the page */}
      <div className="bg-gradient-to-b from-[#1F2A37] to-[#111827] p-6 space-y-8">

        {/* Cast Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
          {tvSeriesDetailLoading ? (
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
          {tvSeriesDetailLoading ? (
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

        {/* Similar TV Series Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Similar TV Series</h2>
          {tvSeriesDetailLoading ? (
            <CardCarouselLoading />
          ) : similar?.results?.length > 0 ? (
            <CardCarousel
              movies={similar.results.slice(0, 10)}
              type="tv"
              nextClass="similar-next"
              prevClass="similar-prev"
            />
          ) : (
            <p className="text-gray-400">No similar TV series available.</p>
          )}
        </section>

        {/* Recommended TV Series Carousel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended TV Series</h2>
          {tvSeriesDetailLoading ? (
            <CardCarouselLoading />
          ) : recommendations?.results?.length > 0 ? (
            <CardCarousel
              movies={recommendations.results.slice(0, 10)}
              type="tv"
              nextClass="recommended-next"
              prevClass="recommended-prev"
            />
          ) : (
            <p className="text-gray-400">No recommended TV series available.</p>
          )}
        </section>
      </div>
    </div>
  );
}
