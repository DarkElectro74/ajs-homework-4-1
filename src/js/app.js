// TODO: write your code here
const isItInteger = (count) => {
  try {
    if (/^[1-9]\d*$/.test(count) && count > 0) return Number(count);
    throw new Error('Введенное значение не является десятичным числом');
  } catch (e) {
    return e;
  }
};

export default isItInteger;
