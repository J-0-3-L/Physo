const getDots = (index, total) => {
  if (total <= 3) return Array.from({ length: total }, (_, i) => i);
  if (index === 0) return [0, 1, 2];
  if (index === total - 1) return [total - 3, total - 2, total - 1];
  return [index - 1, index, index + 1];
};

export default getDots
