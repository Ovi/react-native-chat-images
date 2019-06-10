export const trueTypeOf = obj => {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
  // anyOf(['string', 'boolean', 'array', 'object', 'number', 'function'])
};

export const getThumbnail = obj => obj.thumbnail || obj.url || '';
