import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colour = score > 7.5 ? "green" : score > 5 ? "yellow" : "";

  return (
    <Badge fontSize={15} size="2xl" colorScheme={colour}>
      {score}
    </Badge>
  );
};

export default CriticScore;
