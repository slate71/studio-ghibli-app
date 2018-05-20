import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesSelector } from '../selectors';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { CategoryListItem } from './CategoryListItem';
import { style } from './App.style';

const App = props => {
  const { categories, classes } = props;
  return (
    <div className={classes.root}>
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
};

App.defaultProps = {
  categories: []
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state)
});

export default connect(mapStateToProps)(withStyles(style)(App));
