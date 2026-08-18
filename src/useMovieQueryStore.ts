import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId?: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
}));

export default useMovieQueryStore;
