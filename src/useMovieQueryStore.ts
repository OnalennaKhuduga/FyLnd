import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId?: number) => void;
  setSearchText: (searchText: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { searchText: "" },
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
  setSearchText: (searchText) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, searchText } })),
}));

export default useMovieQueryStore;
