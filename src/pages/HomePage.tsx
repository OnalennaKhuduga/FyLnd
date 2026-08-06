import { Grid, GridItem } from "@chakra-ui/react";
import HeroBanner from "../components/HeroBanner";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">Nav</GridItem>
      <GridItem area="aside">Aside</GridItem>
      <GridItem area="main">
        <HeroBanner />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
