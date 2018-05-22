import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { CategoryListItem } from './CategoryListItem';
import { style } from './CategoryList.style';

const CategoryList = ({ categories, currentCategory, classes }) => (
  <div className={classes.root}>
    <List component='nav'>
      {
        categories.map(category => (
          <CategoryListItem
            key={category}
            path={`/${category}`}
            text={category}
            active={category === currentCategory}
          />
        ))
      }
    </List>
  </div>
);

export default withStyles(style)(CategoryList);
