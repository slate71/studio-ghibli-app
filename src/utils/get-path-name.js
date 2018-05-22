export const getPathName = url => {
  const urlObj = new URL(url);
  return urlObj.pathname;
};
