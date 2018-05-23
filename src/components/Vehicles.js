import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <List>
    {
      props.categoryItems.map(vehicle =>
        <Link className='vehicles__link' key={vehicle.id} to={`/studio-ghibli-app/vehicles/${vehicle.id}`}>
          <ListItem button>
            <ListItemText className='vehicles__list-item-text' primary={vehicle.name} />
          </ListItem>
        </Link>
      )
    }
  </List>
);
