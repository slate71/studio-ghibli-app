import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import omit from 'lodash.omit';
import capitalize from 'lodash.capitalize';
import { Link } from '../sagas/history';

export const FilmItem = ({ id, title, urlFields, relatedCategoryItems, ...fields }) => (
  <div className='film-item category-item'>
    <h1>{title}</h1>
    {
      map(
        omit(fields, urlFields),
        (field, label) => (
          <div key={label} className='film-item__field category-item__field'>
            <span className='film-item__key category-item__key'>
              {capitalize(label.replace('_', ' '))}:&nbsp;
            </span>
            <span>{field}</span>
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

FilmItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  urlFields: PropTypes.arrayOf(PropTypes.string),
  relatedCategoryItems: PropTypes.object
};

FilmItem.defaultProps = {
  urlFields: [ 'url', 'people', 'species', 'locations', 'vehicles' ]
};

export default FilmItem;
