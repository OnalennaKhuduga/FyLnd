import { Grid, GridItem } from "@chakra-ui/react";
import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">Nav</GridItem>
      <GridItem area="aside">Aside</GridItem>
      <GridItem area="main">
        <MovieContainer>
          <BannerContainer />
          <MovieGrid />
        </MovieContainer>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
