import isItInteger from '../app';

test('Integer', () => {
  expect(isItInteger(10)).toBe(10);
});

test('NotInteger', () => {
  const count = '5.5';
  const expected = Error('Введенное значение не является десятичным числом');
  const received = isItInteger(count);
  expect(received).toEqual(expected);
});

test('ItIsSrting', () => {
  const count = 'abrakadabra';
  const expected = Error('Введенное значение не является десятичным числом');
  const received = isItInteger(count);
  expect(received).toEqual(expected);
});

test('mixed', () => {
  const count = '10lalala';
  const expected = Error('Введенное значение не является десятичным числом');
  const received = isItInteger(count);
  expect(received).toEqual(expected);
});

test('Others', () => {
  const count = '#$%^&*';
  const expected = Error('Введенное значение не является десятичным числом');
  const received = isItInteger(count);
  expect(received).toEqual(expected);
});


test('Empty', () => {
  const count = '  ';
  const expected = Error('Введенное значение не является десятичным числом');
  const received = isItInteger(count);
  expect(received).toEqual(expected);
});
