type ImageResolutions = "w300" | "w780" | "w1280" | "original";

const getImage = (endpoint: string, resolution?: ImageResolutions): string => {
  return `https://image.tmdb.org/t/p/${resolution ? resolution : "original"}/${endpoint}`;
};

export default getImage;
