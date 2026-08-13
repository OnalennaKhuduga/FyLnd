import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <MovieContainer>
      <BannerContainer />
      <MovieGrid />
    </MovieContainer>
  );
};

export default HomePage;
