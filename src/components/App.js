import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesSelector, categorySelector, categoryItemSelector } from '../selectors';
import Category from './Category';
import CategoryList from './CategoryList';
import CategoryItem from './CategoryItem';
import StudioGhibliLogo from './StudioGhibliLogo';

const style = {
  fontFamily: 'roboto',
  padding: '1.618em',
  display: 'grid',
  gridTemplateRows: '100px auto',
  gridTemplateColumns: '280px auto'
};

const App = ({ categories, category, categoryItem }) => (
  <div style={style}>
    <StudioGhibliLogo />
    <CategoryList
      categories={categories}
      currentCategory={category && category.currentCategory}
    />
    <div style={{
      overflowY: 'scroll',
      height: 'calc(100vh - 100px - 2 * 1.618em)'
    }}>
      {
        categoryItem
          ? <CategoryItem {...categoryItem} />
          : category
            ? <Category {...category} />
            : null
      }
    </div>
  </div>
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
