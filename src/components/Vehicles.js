import React from 'react';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    {
      props.categoryItems.map(vehicles => <div key={vehicles.id}>{vehicles.name}</div>)
    }
  </div>
);
