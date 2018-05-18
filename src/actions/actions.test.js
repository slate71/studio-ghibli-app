import { fetchCategory, FETCH_CATEGORY } from './actions';

describe('fetchCategory', () => {
  it('return an object with the correct type', () => {
    expect.assertions(1);
    const received = fetchCategory();
    expect(received.type).toBe(FETCH_CATEGORY);
  });
});
