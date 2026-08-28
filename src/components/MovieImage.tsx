import { Image } from "@chakra-ui/react";

interface Props {
  src?: string | null;
  placeholder: React.ReactElement;
}

const MovieImage = ({ src, placeholder }: Props) => {
  if (!src) {
    return placeholder;
  }

  return <Image src={src} borderRadius={10} />;
};

export default MovieImage;
