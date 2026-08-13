import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "now_playing", element: <NowPlayingPage /> },
      { path: "popular", element: <PopularPage /> },
      { path: "top_rated", element: <TopRatedPage /> },
    ],
  },
]);

export default router;
