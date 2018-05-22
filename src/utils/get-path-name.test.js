import { getPathName } from './get-path-name';

it('should get the pathname from an URL object', () => {
  const url = 'https://github.com/zalmoxisus/redux-devtools-extension#usage';
  const received = getPathName(url);
  expect(received).toBe('/zalmoxisus/redux-devtools-extension');;
});
