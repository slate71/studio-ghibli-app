import { buildCategoryLinks } from './build-category-links';

it('should reduce fields to an object of CategoryLink object arrays', () => {
  const expected = {
    people: [{
      id: 'a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
      path: '/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
      label: new Promise(resolve => resolve)
    }]
  };

  const result = {
    id: '123-456',
    people: [
      'https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607'
    ]
  };

  const received = buildCategoryLinks(result);

  expect(received).toEqual(expected);
});
