import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesSelector } from '../selectors';
import './App.css';

const CategoryItem = props => <div>{props.children}</div>;

class App extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="App">
        {
          categories.map(category => (
            <CategoryItem
              key={category}
              children={category}
            />
          ))
        }
      </div>
    );
  }
}

App.defaultProps = {
  categories: []
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
