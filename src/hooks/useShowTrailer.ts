import { useEffect, useState } from "react";

const useShowTrailer = (delay: number) => {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrailer(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showTrailer;
};

export default useShowTrailer;
