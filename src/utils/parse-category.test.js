import { parseCategory } from './parse-category';

it('should return `people` for `pilot` or `residents` category', () => {
  expect(parseCategory('pilot')).toBe('people');
  expect(parseCategory('residents')).toBe('people');
});
