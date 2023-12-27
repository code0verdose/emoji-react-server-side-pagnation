export const unicalizeStr = (str) => {
  return [...new Set(str.split(" "))].join(" ");
};
