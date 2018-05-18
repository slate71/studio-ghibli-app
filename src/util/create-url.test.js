import { createUrl } from './create-url';

describe('createUrl', () => {
  const url = '/films';
  const base = 'https://ghibliapi.herokuapp.com/';
  const urlObj = createUrl(url, base);

  it('will create a the correct href', () => {
    const { href } = urlObj;
    expect(href).toBe('https://ghibliapi.herokuapp.com/films');
  });
});
