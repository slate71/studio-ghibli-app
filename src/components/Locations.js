import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <List>
    {
      props.categoryItems.map(location =>
        <Link
          className='locations__link'
          key={location.id}
          to={`/locations/${location.id}`}>
          <ListItem button>
            <ListItemText
              className='locations__list-item-text'
              primary={location.name}
            />
          </ListItem>
        </Link>
      )
    }
  </List>
);
