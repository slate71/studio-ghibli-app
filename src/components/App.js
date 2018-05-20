import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesSelector, categorySelector } from '../selectors';
import Category from './Category';
import CategoryList from './CategoryList';

const App = ({ categories, category }) => (
  category
    ? <Category {...category} />
    : <CategoryList categories={categories} />
);

App.defaultProps = {
  categories: []
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  category: categorySelector(state)
});

export default connect(mapStateToProps)(App);
