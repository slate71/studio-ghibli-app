import React from 'react';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    {
      props.categoryItems.map(species => <div key={species.id}>{species.name}</div>)
    }
  </div>
);
