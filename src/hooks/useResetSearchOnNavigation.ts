import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMovieQueryStore from "../stores/useMovieQueryStore";

const useResetSearchOnNavigation = () => {
  const location = useLocation();
  const { setGenreId, setSearchText } = useMovieQueryStore();

  useEffect(() => {
    setSearchText("");
    setGenreId(undefined);
  }, [location.pathname, setSearchText, setGenreId]);
};

export default useResetSearchOnNavigation;
