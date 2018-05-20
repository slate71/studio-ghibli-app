import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { CategoryListItem } from './CategoryListItem';
import { style } from './CategoryList.style';

const CategoryList = ({ categories, classes }) => (
  <div className={classes.root}>
    <h1>Categories</h1>
    <List component='nav'>
      {
        categories.map(category => (
          <CategoryListItem
            key={category}
            path={`/${category}`}
            text={category}
          />
        ))
      }
    </List>
  </div>
);

export default withStyles(style)(CategoryList);
