import React from 'react';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    {
      props.categoryItems.map(location => <div key={location.id}>{location.name}</div>)
    }
  </div>
);
