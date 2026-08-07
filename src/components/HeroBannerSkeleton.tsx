import { Box, Skeleton } from "@chakra-ui/react";

const HeroBannerSkeleton = () => {
  return (
    <Box margin="6px">
      <Skeleton height="440px" borderRadius={20} />
    </Box>
  );
};

export default HeroBannerSkeleton;
