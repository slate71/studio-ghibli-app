import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesSelector, categorySelector, categoryItemSelector } from '../selectors';
import Category from './Category';
import CategoryList from './CategoryList';
import CategoryItem from './CategoryItem';

const App = ({ categories, category, categoryItem }) => (
  categoryItem
    ? <CategoryItem {...categoryItem} />
    : category
      ? <Category {...category} />
      : <CategoryList categories={categories} />
);

App.defaultProps = {
  categories: [],
  category: null,
  categoryItem: null
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.object,
  categoryItem: PropTypes.object
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  category: categorySelector(state),
  categoryItem: categoryItemSelector(state)
});

export default connect(mapStateToProps)(App);
