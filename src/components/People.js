import React from 'react';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    {
      props.categoryItems.map(people => <div key={people.id}>{people.name}</div>)
    }
  </div>
);
