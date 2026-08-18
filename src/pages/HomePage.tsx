import { Box } from "@chakra-ui/react";
import BannerContainer from "../components/BannerContainer";
import GenreFilter from "../components/GenreFilter";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <MovieContainer>
      <BannerContainer />
      <Box>
        <GenreFilter />
        <MovieGrid category={"discover"} />
      </Box>
    </MovieContainer>
  );
};

export default HomePage;
