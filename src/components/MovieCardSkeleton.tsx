import { Card, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card padding={2} h="445px" w="300px">
      <SkeletonText />
    </Card>
  );
};

export default MovieCardSkeleton;
