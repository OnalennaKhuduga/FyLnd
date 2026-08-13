import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const HomePage = () => {
  const discover = getMovies("discover");

  return (
    <MovieContainer>
      <BannerContainer />
      <MovieGrid endpoint={discover} />
    </MovieContainer>
  );
};

export default HomePage;
