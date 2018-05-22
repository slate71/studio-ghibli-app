import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import omit from 'lodash.omit';
import capitalize from 'lodash.capitalize';
import { Link } from '../sagas/history';

export const SpeciesItem = ({ id, name, urlFields, relatedCategoryItems, ...fields }) => (
  <div className='species-item category-item'>
    <h1>{name}</h1>
    {
      map(
        omit(fields, urlFields),
        (value, key) => (
          <div key={key} className='species-item__field category-item__field'>
            <span className='species-item__key category-item__key'>
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

SpeciesItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  urlFields: PropTypes.arrayOf(PropTypes.string),
  relatedCategoryItems: PropTypes.object
};

SpeciesItem.defaultProps = {
  urlFields: [ 'url', 'people', 'species', 'locations', 'vehicles' ]
};

export default SpeciesItem;
