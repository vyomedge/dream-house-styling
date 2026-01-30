export const textToSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // replace spaces & special chars with -
    .replace(/^-+|-+$/g, ""); // remove leading/trailing -
};

export const debounce = (fn, delay = 500) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
