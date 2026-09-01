import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MovieBase } from "../types/movie";

interface MovieWatchlistStore {
  watchlist: MovieBase[];
  addMovie: (movie: MovieBase) => void;
  removeMovie: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

const useMovieWatchlistStore = create<MovieWatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],

      addMovie: (movie) =>
        set((store) => ({ watchlist: [...store.watchlist, movie] })),

      removeMovie: (id) =>
        set((store) => ({
          watchlist: store.watchlist.filter((m) => m.id !== id),
        })),

      isInWatchlist: (id) => get().watchlist.some((movie) => movie.id === id),
    }),
    { name: "movie-watchlist" },
  ),
);

export default useMovieWatchlistStore;
