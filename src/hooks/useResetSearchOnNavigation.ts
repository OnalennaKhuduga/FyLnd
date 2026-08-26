import { useLocation } from "react-router-dom";
import useMovieQueryStore from "../useMovieQueryStore";
import { useEffect } from "react";

const useResetSearchOnNavigation = () => {
  const location = useLocation();
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchText("");
  }, [location.pathname, setSearchText]);
};

export default useResetSearchOnNavigation;
