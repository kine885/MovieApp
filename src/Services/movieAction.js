
export async function getTrendingMovies(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch trending movies (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch trending movies");
  }
}
export async function getPopularMovies(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch popular movies (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch popular movies");
  }
}
export async function getTopRatedMovies(page=1) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch top rated movies");
  }
}
export async function getUpcomingMovies(page=1) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch upcoming movies");
  }
}
export async function getNowPlayingMovies(page=1) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch now playing movies")
  } 
}
export async function getGenreMovies(genreId, page = 1, sortBy = "popularity.desc") {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}` +
      `&language=en-US&include_adult=false&include_video=false&page=${page}` +
      `&sort_by=${sortBy}&with_genres=${genreId}`
    )
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch movies by genre")
  }
}
export async function getPopularTvSeries(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch popular TV series (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch popular TV series");
  }
}
export async function getTopRatedTvSeries(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch top rated TV series (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch top rated TV series");
  }
}
export async function getAiringTodayTvSeries(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tv/airing_today?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch airing today TV series (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch airing today TV series");
  }
}
export async function getOnTheAirTvSeries(page=1) {
  try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tv/on_the_air?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) throw new Error(`Failed to fetch on the air TV series (response status: ${response.status})`);
      return await response.json();
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch on the air TV series");
  }
}
export async function getGenreTvSeries(genreId, page = 1, sortBy = "popularity.desc") {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/discover/tv?api_key=${import.meta.env.VITE_API_KEY}` +
      `&language=en-US&include_adult=false&include_video=false&page=${page}` +
      `&sort_by=${sortBy}&with_genres=${genreId}`
    )
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch TV shows by genre")
  }
}
export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos,credits,reviews,similar,recommendations`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch movie details")
  }
}
export async function getTvSeriesDetails(tvId) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tv/${tvId}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos,credits,reviews,similar,recommendations`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to fetch TV series details")
  } 
}
export async function searchMulti(query, page=1) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/search/multi?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    return Promise.reject(error ?? "Failed to perform search")
  } 
}
