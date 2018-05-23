import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import omitBy from 'lodash.omitby';
import capitalize from 'lodash.capitalize';
import { Link } from '../sagas/history';
import { parseCategory } from '../utils';

export const FilmItem = ({ id, title, name, relatedCategoryItems, ...fields }) => (
  <div className='film-item category-item'>
    <h1>{title || name}</h1>
    {
      map(
        omitBy(fields, (field) =>
          Array.isArray(field) || field.includes('ghibliapi.herokuapp.com')
        ),
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
        omitBy(relatedCategoryItems, (field, key) => field.length === 0 || key === 'url'),
        (items, category) => (
          <div key={category} className='film-item__field category-item__field'>
            <span className='film-item__key category-item__key'>
              {capitalize(category.replace('_', ' '))}
            </span>
            <ul>
              {
                map(items, item =>
                  <Link key={item.id} to={`/studio-ghibli-app/${parseCategory(category)}/${item.id}`}>
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
  name: PropTypes.string,
  relatedCategoryItems: PropTypes.object
};

export default FilmItem;
