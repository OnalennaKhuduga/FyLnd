const formatDate = (date: Date): string => {
  return `${date.getDay()} ${date.toLocaleDateString("en-US", { month: "short" })} ${date.getFullYear()}`;
};

export default formatDate;
