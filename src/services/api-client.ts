import axios, { AxiosRequestConfig } from "axios";

const token = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  get = (id: number) => {
    return axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
