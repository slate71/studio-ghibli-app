import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '../sagas/history';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './CategoryListItem.css';

export const CategoryListItem = ({path, text, active}) => (
  <Link className='category-list-item__link' to={path}>
    <ListItem
      button
      className={classNames(
        {'category-list-item--active': active}
      )}>
      <ListItemText
        className='category-list-item__text'
        primary={text}
      />
    </ListItem>
  </Link>
);

CategoryListItem.defaultProps = {
  path: '/',
  text: ''
};

CategoryListItem.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
};
