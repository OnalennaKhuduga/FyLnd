import axios from "axios";

const token = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
