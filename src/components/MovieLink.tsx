import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  children: ReactNode;
}

const MovieLink = ({ id, children }: Props) => {
  return <Link to={"/movie/" + id}>{children}</Link>;
};

export default MovieLink;
