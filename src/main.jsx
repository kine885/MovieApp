import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import 'flowbite';
import { Provider } from 'react-redux';
import MainLayout, { AdminLayout } from './components/Layout.jsx';
import PopularTvSeries from './pages/Tv_Series/PopularTvSeries.jsx';
import store from './redux/store.js';
import PopularMovies from './pages/Movies/PopularMovies.jsx';
import UpcomingMovies from './pages/Movies/UpcomingMovies.jsx';
import TopRatedMovies from './pages/Movies/TopRatedMovies.jsx';
import NowPlayingMovies from './pages/Movies/NowPlayingMovies.jsx';
import TopRatedTvSeries from './pages/Tv_Series/TopRatedTvSeries.jsx';
import TvSeriesDetail from './pages/Tv_Series/TvSeriesDetails.jsx';
import AiringTodayTvSeries from './pages/Tv_Series/AiringTodayTvSerires.jsx';
import OnTheAirTvSeries from './pages/Tv_Series/OnTheAirTvSeries.jsx';
import MovieDetail from './pages/Movies/MoviesDetails.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Dashboard from './pages/DashBoard.jsx';
import MoviesPage from './pages/MovieDashBoardPage.jsx';
import TvSeriesPage from './pages/TvSeriesDashBoardPage.jsx';

// configure routing
const routing = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/',
        element: <App /> },
      { path: '/movies/popular', 
        element: <PopularMovies /> },
      { path: '/movies/upcoming', 
        element: <UpcomingMovies /> },
      { path: '/movies/top_rated', 
        element: <TopRatedMovies /> },
      { path: '/movies/now_playing', 
        element: <NowPlayingMovies /> },
      { path: '/tv/popular', 
        element: <PopularTvSeries type="popular" /> },
      { path: '/tv/top_rated', 
        element: <TopRatedTvSeries type="top_rated" /> },
      { path: '/tv/airing_today', 
        element: <AiringTodayTvSeries type="airing_today" /> },
      { path: '/tv/on_the_air', 
        element: <OnTheAirTvSeries type="on_the_air" /> },
      { path: '/movie/:id', 
        element: <MovieDetail /> },
      { path: '/tv/:id', 
        element: <TvSeriesDetail /> },
      { path: '/search', 
        element: <SearchPage /> },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin',
        element: <Dashboard /> 
      },
      {
        path: '/admin/movies',
        element: <MoviesPage />
      },
      {
        path: '/admin/tv',
        element: <TvSeriesPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routing} />
    </Provider>
  </StrictMode>,
);
