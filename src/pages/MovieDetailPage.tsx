import { Box, Heading, Spinner } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovie(parseInt(id!));

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <Box paddingTop={16} paddingX={5}>
      <Heading>{data?.title}</Heading>
    </Box>
  );
};

export default MovieDetailPage;
