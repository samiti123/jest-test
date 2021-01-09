const functions = require('../functions');

test('1 plus 2 equal 3', () => {
  expect(functions.sum(1, 2)).toBe(3);
});

test('5 minus 2 equal 3', () => {
  expect(functions.substract(5, 2)).toBe(3);
});

test('1 multiply 1 equal 1', () => {
  expect(functions.multiply(1, 1)).toBe(1);
});

test('input cheese should show Hi cheese', () => {
  expect(functions.saySomething('cheese')).toBe('Hi cheese');
  expect(functions.saySomething('cheese')).not.toBe('Hi cheese');
});

test('email should have a @ symbol', () => {
  const pattern = /@/;
  expect(functions.checkEmail('sam@example.com')).toMatch(pattern);
  expect(functions.checkEmail('example.com')).not.toMatch(pattern);
});

test('array should have', () => {
  const animals = ['chicken', 'dog', 'cat'];

  expect(functions.checkArray(animals)).toContain('dog');
  expect(functions.checkArray(animals)).toEqual(['chicken', 'dog', 'cat']);
});

test('to strict or not strict', () => {
  expect(functions.checkValue('2')).toEqual('2');
  expect(functions.checkValue(2)).toStrictEqual(2);
});

test('fetch user should have the name of leanne graham', async () => {
  // expect(functions.fetchUser()).toContain('name');
  const data = await functions.fetchUser();

  expect(data.name).toEqual('Leanne Graham');
});
