const summarizeText = (t: string, charCount?: number): string => {
  const numOfChars = charCount ? charCount : 350;

  return t.length > numOfChars ? t.slice(0, numOfChars) + "..." : t;
};

export default summarizeText;
