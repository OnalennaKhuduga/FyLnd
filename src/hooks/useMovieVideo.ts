import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { MovieVideoResponse } from "../types/movie";

const useMovieVideos = (id: number) => {
  const apiClient = new APIClient<MovieVideoResponse>("");

  return useQuery({
    queryKey: ["movieVideo", id],
    queryFn: () => apiClient.getVideos(id),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useMovieVideos;
