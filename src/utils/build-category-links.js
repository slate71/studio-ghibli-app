import reduce from 'lodash.reduce';
import map from 'lodash.map';
import { fetchUrl, getPathName } from '../utils';

const toLinkObjs = url => ({
  id: url.split('/').pop() || null,
  path: getPathName(url),
  label: fetchUrl(url)
});

const toCategoryLinkObjs = (accum, value, key) => !Array.isArray(value)
  ? accum : { ...accum, [key]: map(value, toLinkObjs) };

export const buildCategoryLinks = result => reduce(
  result, toCategoryLinkObjs, {}
);
