import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    <List>
      {
        props.categoryItems.map(vehicle =>
          <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
            <ListItem button>
              <ListItemText primary={vehicle.name} />
            </ListItem>
          </Link>
        )
      }
    </List>
  </div>
);
