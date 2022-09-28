import { ensureNumberBetween } from '../src';

test('ensureNumberBetween', () => {
  expect(ensureNumberBetween(4, 5, 8)).toEqual(5);
  expect(ensureNumberBetween(4, 2, 8)).toEqual(4);
  expect(ensureNumberBetween(4, 2, 3)).toEqual(3);
});