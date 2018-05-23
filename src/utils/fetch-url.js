export const fetchUrl = url => {
  const urlObj = new URL(
    url
      .split('/')
      .filter(path => !path.match('studio-ghibli-app')).join('/'),
    'https://ghibliapi.herokuapp.com'
  );

  return fetch(urlObj)
    .then(statusHelper)
    .then(res => res.json())
    .catch(err => err)
    .then(data => data);
};

export function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
