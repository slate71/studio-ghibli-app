import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import omit from 'lodash.omit';
import capitalize from 'lodash.capitalize';
import { Link } from '../sagas/history';

export const LocationItem = ({ id, name, urlFields, relatedCategoryItems, ...fields }) => (
  <div className='location-item category-item'>
    <h1>{name}</h1>
    {
      map(
        omit(fields, urlFields),
        (value, key) => (
          <div key={key} className='location-item__field category-item__field'>
            <span className='location-item__key category-item__key'>
              {capitalize(key.replace('_', ' '))}:&nbsp;
            </span>
            <span>{value}</span>
          </div>
        )
      )
    }
    {
      map(
        relatedCategoryItems,
        (items, category) => (
          <div key={category} className='film-item__field category-item__field'>
            <span className='film-item__key category-item__key'>
              {capitalize(category.replace('_', ' '))}
            </span>
            <ul>
              {
                map(items, item =>
                  <Link key={item.id} to={`/${category}/${item.id}`}>
                    <li>{item.title || item.name}</li>
                  </Link>
                )
              }
            </ul>
          </div>
        )
      )
    }
  </div>
);

LocationItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  urlFields: PropTypes.arrayOf(PropTypes.string),
  relatedCategoryItems: PropTypes.object
};

LocationItem.defaultProps = {
  urlFields: [ 'url', 'people', 'species', 'locations', 'vehicles', 'films' ]
};

export default LocationItem;
