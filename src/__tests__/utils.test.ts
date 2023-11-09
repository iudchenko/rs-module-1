import { expect, test } from 'vitest';
import { makeSentenceCase } from '../utils/strings';
import { range } from '../utils/range';

test('sentence case is returned from any string', () => {
  expect(makeSentenceCase('test')).toBe('Test');
  expect(makeSentenceCase('test test')).toBe('Test Test');
  expect(makeSentenceCase('tEST')).toBe('Test');
  expect(makeSentenceCase('tEST tEST tEST')).toBe('Test Test Test');
  expect(makeSentenceCase('TEST')).toBe('Test');
  expect(makeSentenceCase('TEST TEST')).toBe('Test Test');
});

test('range of numbers is correctly returned', () => {
  expect(range(0, 1)).toStrictEqual([0, 1]);
  expect(range(1, 1)).toStrictEqual([1]);
  expect(range(1, 3)).toStrictEqual([1, 2, 3]);
  expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(range(2, 4)).toStrictEqual([2, 3, 4]);
  expect(range(2, 4)).toBeTypeOf('object');
  expect(range(2, 4)).toBeInstanceOf(Array);
});
