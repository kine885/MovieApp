  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import { getPopularMovies, getTrendingMovies, getTopRatedMovies, getGenreMovies, getUpcomingMovies, getNowPlayingMovies, getMovieDetails, 
          //tv series
          getGenreTvSeries, getAiringTodayTvSeries, getTopRatedTvSeries, getPopularTvSeries, getOnTheAirTvSeries, getTvSeriesDetails, searchMulti } from "../../Services/movieAction";

  // Movies Async thunks
  export const fetchPopularMovies = createAsyncThunk(
    "movies/fetchPopular",
    async ({ page = 1, genreId = null, sortBy = "popularity.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreMovies(genreId, page, sortBy);
        } else {
          data = await getPopularMovies(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchTrendingMovies = createAsyncThunk(
    "movies/fetchTrending",
    async ({ page = 1, genreId = null, sortBy = "popularity.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreMovies(genreId, page, sortBy);
        } else {
          data = await getTrendingMovies(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchTopRatedMovies = createAsyncThunk(
    "movies/fetchTopRated",
    async ({ page = 1, genreId = null, sortBy = "vote_average.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreMovies(genreId, page, sortBy);
        } else {
          data = await getTopRatedMovies(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchGenreMovies = createAsyncThunk(
    "movies/fetchGenreMovies",
    async ({ genreId = null, sortBy = "popularity.desc", page = 1 }, { rejectWithValue }) => {
      try {
        const data = await getGenreMovies(genreId, page, sortBy)
        return data;
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  export const fetchUpcomingMovies = createAsyncThunk(
    "movies/fetchUpcoming",
    async ({ page = 1, genreId = null, sortBy = "release_date.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreMovies(genreId, page, sortBy);
        } else {
          data = await getUpcomingMovies(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchNowPlayingMovies = createAsyncThunk(
    "movies/fetchNowPlaying",
    async ({ page = 1, genreId = null, sortBy = "release_date.asc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreMovies(genreId, page, sortBy);
        } else {
          data = await getNowPlayingMovies(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  // TV Series Thunks
  export const fetchPopularTvSeries = createAsyncThunk(
    "movies/fetchPopularTvSeries",
    async ({ page = 1, genreId = null, sortBy = "popularity.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreTvSeries(genreId, page, sortBy);
        } else {
          data = await getPopularTvSeries(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchTopRatedTvSeries = createAsyncThunk(
    "movies/fetchTopRatedTvSeries",
    async ({ page = 1, genreId = null, sortBy = "vote_average.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreTvSeries(genreId, page, sortBy);
        } else {
          data = await getTopRatedTvSeries(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchAiringTodayTvSeries = createAsyncThunk(
    "movies/fetchAiringTvSeries",
    async ({ page = 1, genreId = null, sortBy = "popularity.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreTvSeries(genreId, page, sortBy);
        } else {
          data = await getAiringTodayTvSeries(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchOnTheAirTvSeries = createAsyncThunk(
    "movies/fetchOnTheAirTvSeries",
    async ({ page = 1, genreId = null, sortBy = "popularity.desc" } = {}, { rejectWithValue }) => {
      try {
        let data;
        if (genreId) {
          data = await getGenreTvSeries(genreId, page, sortBy);
        } else {
          data = await getOnTheAirTvSeries(page);
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchGenreTvSeries = createAsyncThunk(
    "movies/fetchGenreTvSeries",
    async ({ genreId = null, sortBy = "popularity.desc", page = 1 }, { rejectWithValue }) => {
      try {
        const data = await getGenreTvSeries(genreId, page, sortBy)
        return data;
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  );
  export const fetchMovieDetail = createAsyncThunk(
    "movies/fetchMovieDetail",
    async (movieId, { rejectWithValue }) => {
      try {
        const data = await getMovieDetails(movieId);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchTvSeriesDetail = createAsyncThunk(
    "movies/fetchTvSeriesDetail",
    async (tvId, { rejectWithValue }) => {
      try {
        const data = await getTvSeriesDetails(tvId);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchSearchResults = createAsyncThunk(
  "movies/fetchSearchResults",
  async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
      const data = await searchMulti(query, page);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


  // Slice
  const moviesSlice = createSlice({
    name: "movies",
    initialState: {
      //movies
      popular: [],
      trending: [],
      topRated: [],
      upcoming: [],
      nowPlaying: [],
      //pagination
      popularPage: 1,
      trendingPage: 1,
      topRatedPage: 1,
      upcomingPage: 1,
      nowPlayingPage: 1,
      totalPopularPages: 0,
      totalTrendingPages: 0,
      totalTopRatedPages: 0,
      totalUpcomingPages: 0,
      totalNowPlayingPages: 0,
      //loading 
      popularLoading: false,
      trendingLoading: false,
      topRatedLoading: false,
      upcomingLoading: false,
      nowPlayingLoading: false,
      // error states
      popularError: null,
      trendingError: null,
      topRatedError: null,
      upcomingError: null,
      nowPlayingError: null,
      // genre movies
      genreMovies: [],
      totalGenrePages: 0,
      genreMoviesLoading: false, 
      genreMoviesError: null,
      //tv series
      popularTvSeries: [],
      topRatedTvSeries: [],
      airingTodayTvSeries: [],
      onTheAirTvSeries: [],
      //tv series pagination
      popularTvSeriesPage: 1,
      topRatedTvSeriesPage: 1,
      airingTodayTvSeriesPage: 1,
      onTheAirTvSeriesPage: 1,
      totalTopRatedTvSeriesPages: 0,
      totalAiringTodayTvSeriesPages: 0,
      totalOnTheAirTvSeriesPages: 0,
      totalPopularTvSeriesPages: 0,
      //tv series loading
      popularTvSeriesLoading: false,
      topRatedTvSeriesLoading: false,
      airingTodayTvSeriesLoading: false,
      onTheAirTvSeriesLoading: false,
      //tv series error
      popularTvSeriesError: null,
      topRatedTvSeriesError: null,
      airingTodayTvSeriesError: null,
      onTheAirTvSeriesError: null,
      // genre tv series
      genreTvSeries: [],
      totalGenreTvSeriesPages: 0,
      genreTvSeriesLoading: false,
      genreTvSeriesError: null,
      // movie details
      movieDetail: null,
      movieDetailLoading: false,
      movieDetailError: null,
      // tv series details
      tvSeriesDetail: null,
      tvSeriesDetailLoading: false,
      tvSeriesDetailError: null,
      // search
      searchResults: [],
      searchLoading: false,
      searchError: null,
      // search pagination
      searchPage: 1,
      totalSearchPages: 0


    },
    reducers: {
      setPopularPage: (state, action) => {
        state.popularPage = action.payload;
      },
      setTrendingPage: (state, action) => {
        state.trendingPage = action.payload;
      },
      setTopRatedPage: (state, action) => {
        state.topRatedPage = action.payload;
      },
      setUpcomingPage: (state, action) => {
        state.upcomingPage = action.payload;
      },
      setNowPlayingPage: (state, action) => {
        state.nowPlayingPage = action.payload;
      },
      // TV Series reducers
      setPopularTvSeriesPage: (state, action) => {
        state.popularTvSeriesPage = action.payload;
      },
      setTopRatedTvSeriesPage: (state, action) => {
        state.topRatedTvSeriesPage = action.payload;  
      },
      setAiringTodayTvSeriesPage: (state, action) => {
        state.airingTodayTvSeriesPage = action.payload;
      },
      setOnTheAirTvSeriesPage: (state, action) => {
        state.onTheAirTvSeriesPage = action.payload;  
      },
       setSearchPage: (state, action) => {
        state.searchPage = action.payload;  
      },
      
    },
    extraReducers: (builder) => {
      builder
        // Popular
        .addCase(fetchPopularMovies.pending, (state) => {
          state.popularLoading = true;
          state.popularError = null;
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action) => {
          state.popularLoading = false;
          state.popular = action.payload.results;
          state.totalPopularPages = action.payload.total_pages;
        })
        .addCase(fetchPopularMovies.rejected, (state, action) => {
          state.popularLoading = false;
          state.popularError = action.payload;
        })
        // Trending
        .addCase(fetchTrendingMovies.pending, (state) => {
          state.trendingLoading = true;
          state.trendingError = null;
        })
        .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
          state.trendingLoading = false;
          state.trending = action.payload.results;
          state.totalTrendingPages = action.payload.total_pages;
        })
        .addCase(fetchTrendingMovies.rejected, (state, action) => {
          state.trendingLoading = false;
          state.trendingError = action.payload;
        })
        // Top Rated
        .addCase(fetchTopRatedMovies.pending, (state) => {
          state.topRatedLoading = true;
          state.topRatedError = null;
        })
        .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
          state.topRatedLoading = false;
          state.topRated = action.payload.results;
          state.totalTopRatedPages = action.payload.total_pages;
        })
        .addCase(fetchTopRatedMovies.rejected, (state, action) => {
          state.topRatedLoading = false;
          state.topRatedError = action.payload;
        })
        // Upcoming Movies
        .addCase(fetchUpcomingMovies.pending, (state) => {
          state.upcomingLoading = true;
          state.upcomingError = null;
        })
        .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
          state.upcomingLoading = false;
          state.upcoming = action.payload.results;
          state.totalUpcomingPages = action.payload.total_pages;
        })
        .addCase(fetchUpcomingMovies.rejected, (state, action) => {
          state.upcomingLoading = false;
          state.upcomingError = action.payload;
        })
        // Now Playing Movies
        .addCase(fetchNowPlayingMovies.pending, (state) => {
          state.nowPlayingLoading = true;
          state.nowPlayingError = null;
        })
        .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
          state.nowPlayingLoading = false;
          state.nowPlaying = action.payload.results;
          state.totalNowPlayingPages = action.payload.total_pages;
        })
        .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
          state.nowPlayingLoading = false;
          state.nowPlayingError = action.payload;
        })
        // Genre Movies
        .addCase(fetchGenreMovies.pending, (state) => {
          state.genreMoviesLoading = true;
          state.genreMoviesError = null;
        })
        .addCase(fetchGenreMovies.fulfilled, (state, action) => {
          state.genreMoviesLoading = false;
          state.genreMovies = action.payload.results;
          state.totalGenrePages = action.payload.total_pages;
        })
        .addCase(fetchGenreMovies.rejected, (state, action) => {
          state.genreMoviesLoading = false;
          state.genreMoviesError = action.payload;
        })
        // Popular TV Series
        .addCase(fetchPopularTvSeries.pending, (state) => {
          state.popularTvSeriesLoading = true;
          state.popularTvSeriesError = null;
        })
        .addCase(fetchPopularTvSeries.fulfilled, (state, action) => {
          state.popularTvSeriesLoading = false;
          state.popularTvSeries = action.payload.results;
          state.totalPopularTvSeriesPages = action.payload.total_pages;
        })
        .addCase(fetchPopularTvSeries.rejected, (state, action) => {
          state.popularTvSeriesLoading = false;
          state.popularTvSeriesError = action.payload;
        })
        // Top Rated TV Series
        .addCase(fetchTopRatedTvSeries.pending, (state) => {
          state.topRatedTvSeriesLoading = true;
          state.topRatedTvSeriesError = null;
        })
        .addCase(fetchTopRatedTvSeries.fulfilled, (state, action) => {
          state.topRatedTvSeriesLoading = false;
          state.topRatedTvSeries = action.payload.results;
          state.totalTopRatedTvSeriesPages = action.payload.total_pages;
        })
        .addCase(fetchTopRatedTvSeries.rejected, (state, action) => {
          state.topRatedTvSeriesLoading = false;
          state.topRatedTvSeriesError = action.payload;
        })
        // Airing Today TV Series
        .addCase(fetchAiringTodayTvSeries.pending, (state) => {
          state.airingTodayTvSeriesLoading = true;
          state.airingTodayTvSeriesError = null;
        })
        .addCase(fetchAiringTodayTvSeries.fulfilled, (state, action) => {
          state.airingTodayTvSeriesLoading = false;
          state.airingTodayTvSeries = action.payload.results;
          state.totalAiringTodayTvSeriesPages = action.payload.total_pages;
        })
        .addCase(fetchAiringTodayTvSeries.rejected, (state, action) => {
          state.airingTodayTvSeriesLoading = false;
          state.airingTodayTvSeriesError = action.payload;
        })
        // On The Air TV Series
        .addCase(fetchOnTheAirTvSeries.pending, (state) => {
          state.onTheAirTvSeriesLoading = true;
          state.onTheAirTvSeriesError = null;
        })
        .addCase(fetchOnTheAirTvSeries.fulfilled, (state, action) => {
          state.onTheAirTvSeriesLoading = false;
          state.onTheAirTvSeries = action.payload.results;
          state.totalOnTheAirTvSeriesPages = action.payload.total_pages;
        })
        .addCase(fetchOnTheAirTvSeries.rejected, (state, action) => {
          state.onTheAirTvSeriesLoading = false;
          state.onTheAirTvSeriesError = action.payload;
        })
        // Genre TV Series
        .addCase(fetchGenreTvSeries.pending, (state) => {
          state.genreTvSeriesLoading = true;
          state.genreTvSeriesError = null;
        })
        .addCase(fetchGenreTvSeries.fulfilled, (state, action) => {
          state.genreTvSeriesLoading = false;
          state.genreTvSeries = action.payload.results;
          state.totalGenreTvSeriesPages = action.payload.total_pages;
        })
        .addCase(fetchGenreTvSeries.rejected, (state, action) => {
          state.genreTvSeriesLoading = false;
          state.genreTvSeriesError = action.payload;
        })
        // Movie Details
        .addCase(fetchMovieDetail.pending, (state) => {
          state.movieDetailLoading = true;
          state.movieDetailError = null;
        })
        .addCase(fetchMovieDetail.fulfilled, (state, action) => {
          state.movieDetailLoading = false;
          state.movieDetail = action.payload;
        })
        .addCase(fetchMovieDetail.rejected, (state, action) => {
          state.movieDetailLoading = false;
          state.movieDetailError = action.payload;
        })
         // TV Series Detail
        .addCase(fetchTvSeriesDetail.pending, (state) => {
          state.tvSeriesDetailLoading = true;
          state.tvSeriesDetailError = null;
        })
        .addCase(fetchTvSeriesDetail.fulfilled, (state, action) => {
          state.tvSeriesDetailLoading = false;
          state.tvSeriesDetail = action.payload;
        })
        .addCase(fetchTvSeriesDetail.rejected, (state, action) => {
          state.tvSeriesDetailLoading = false;
          state.tvSeriesDetailError = action.payload;
        })
        // Search
        .addCase(fetchSearchResults.pending, (state) => {
          state.searchLoading = true;
          state.searchError = null;
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
          state.searchLoading = false;
          state.searchResults = action.payload.results || [];
          state.totalSearchPages = action.payload.total_pages || 1;
        })
        .addCase(fetchSearchResults.rejected, (state, action) => {
          state.searchLoading = false;
          state.searchError = action.payload;
        });
      }
  });

  export const { setPopularPage, setTrendingPage, setTopRatedPage, setUpcomingPage, setNowPlayingPage,setPopularTvSeriesPage, setAiringTodayTvSeriesPage, setTopRatedTvSeriesPage, setOnTheAirTvSeriesPage, setSearchPage } = moviesSlice.actions;
  export default moviesSlice.reducer;
