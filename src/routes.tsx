import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieDetailLayout from "./pages/MovieDetailLayout";

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
]);

export default router;
