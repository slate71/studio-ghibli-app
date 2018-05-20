import React from 'react';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    {
      props.categoryItems.map(film => <div key={film.id}>{film.title}</div>)
    }
  </div>
);
