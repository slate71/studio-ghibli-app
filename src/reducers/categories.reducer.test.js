import {
  DEFAULT_CATEGORIES,
  categoriesReducer
} from './categories.reducer';

it('returns `state`', () => {
  expect.assertions(1);
  const expectedState = DEFAULT_CATEGORIES;
  const receivedState = categoriesReducer(DEFAULT_CATEGORIES);
  expect(receivedState).toBe(expectedState);
});

it('does not return undefined', () => {
  expect.assertions(1);
  const expectedState = undefined;
  const receivedState = categoriesReducer(expectedState);
  expect(receivedState).not.toBe(expectedState);
});
