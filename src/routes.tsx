import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MovieDetailLayout from "./pages/MovieDetail/MovieDetailLayout";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import SearchPage from "./pages/SearchPage";
import TopRatedPage from "./pages/TopRatedPage";
import AboutPage from "./pages/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "search", element: <SearchPage /> },
      { index: true, element: <HomePage /> },
      { path: "now_playing", element: <NowPlayingPage /> },
      { path: "popular", element: <PopularPage /> },
      { path: "top_rated", element: <TopRatedPage /> },
    ],
  },
  {
    path: "/movie/:id",
    element: <MovieDetailLayout />,
    children: [{ index: true, element: <MovieDetailPage /> }],
  },
  {
    path: "/about",
    element: <MovieDetailLayout />,
    children: [{ index: true, element: <AboutPage /> }],
  },
]);

export default router;
