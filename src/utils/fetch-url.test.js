import { fetchUrl, statusHelper } from './fetch-url';

it('works with promises', () => {
  expect.assertions(1);
  const received = fetchUrl('/films');
  return received.then(data => expect(data.length).not.toBeUndefined());
});
