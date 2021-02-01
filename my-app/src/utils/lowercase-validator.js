export const lowercaseValidator = (value) => {
  if (value.length < 1) {
    return false;
  }

  const match = value.match(/[a-z]|_/g);
  if (!match || !match.length) {
    return false;
  }

  return value.match(/[a-z]|_/g).join('') === value;
};

export default lowercaseValidator;
