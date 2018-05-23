export const parseCategory = category =>
  ['pilot', 'residents'].includes(category)
    ? 'people'
    : category;
