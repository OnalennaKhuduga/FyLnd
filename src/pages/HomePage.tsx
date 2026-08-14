import { Box } from "@chakra-ui/react";
import BannerContainer from "../components/BannerContainer";
import GenreFilter from "../components/GenreFilter";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const HomePage = () => {
  const discover = getMovies("discover");

  return (
    <MovieContainer>
      <BannerContainer />
      <Box>
        <GenreFilter />
        <MovieGrid endpoint={discover} />
      </Box>
    </MovieContainer>
  );
};

export default HomePage;
