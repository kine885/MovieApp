import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hero from "./components/Hero";
import CardCarousel from "./components/CardCarousel";
import {fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies,} from "./redux/slices/moviesSlice";
import "swiper/css";
import "swiper/css/navigation";
import HeroLoading from "./components/Loading/heroLoading";
import CardCarouselLoading from "./components/Loading/CardCarouselLoading";
import MovieNavButtons from "./components/MoviesBtn";
import CastCard from "./components/CastCard";
import { getMovieDetails } from "./Services/movieAction";


function App() {
  const dispatch = useDispatch();
  const {
    trending,
    popular,
    topRated,
    trendingLoading,
    popularLoading,
    topRatedLoading,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <div className="bg-[#1F2A37] min-h-screen">
      {/* Hero Section – first 5 trending movies */}
      {trendingLoading ? (
        <HeroLoading nextClass="hero-next" prevClass="hero-prev" />
      ) : trending.length > 0 ? (
        <Hero
          data={trending.slice(0, 5)}
          nextClass="hero-next"
          prevClass="hero-prev"
        />
      ) : null}

      {/* Trending Section */}
      <div className="m-auto container mx-auto flex items-center gap-4 px-4 flex-wrap">
        <h2 className="mt-7 text-4xl font-bold text-white">Trending</h2>
        <MovieNavButtons/>
      </div>
      {trendingLoading ? (
        <CardCarouselLoading />
      ) : trending.length > 0 ? (
        <section className="mt-8 container mx-auto">
          <CardCarousel
            movies={trending.slice(0, 24)}
            nextClass="trending-next"
            prevClass="trending-prev"
          />
        </section>
      ) : null}

      {/* Popular Section */}
      <div className="mt-8 container mx-auto flex items-center gap-4 px-4">
        <h2 className="text-4xl font-bold text-white">What's Popular</h2>
      </div>
      {popularLoading ? (
        <CardCarouselLoading />
      ) : popular.length > 0 ? (
        <section className="mt-8 container mx-auto">
          <CardCarousel
            movies={popular.slice(0, 24)}
            nextClass="popular-next"
            prevClass="popular-prev"
          />
        </section>
      ) : null}
      {/* Top Rated Section */}
      <div className="mt-8 container mx-auto flex items-center gap-4 px-4">
        <h2 className="text-4xl font-bold text-white">Top Rated</h2>
      </div>
      {topRatedLoading ? (
        <CardCarouselLoading />
      ) : topRated.length > 0 ? (
        <section className="mt-8 container mx-auto">
          <CardCarousel
            movies={topRated.slice(0, 24)}
            nextClass="toprated-next"
            prevClass="toprated-prev"
          />
        </section>
      ) : null}
    </div>
  );
}

export default App;
