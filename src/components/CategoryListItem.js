import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../sagas/history';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const CategoryListItem = ({path, text}) => (
  <Link to={path}>
    <ListItem button>
      <ListItemText primary={text} />
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
