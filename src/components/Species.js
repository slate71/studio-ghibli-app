import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <List>
    {
      props.categoryItems.map(species =>
        <Link className='species__link' key={species.id} to={`/species/${species.id}`}>
          <ListItem button>
            <ListItemText className='species__list-item-text' primary={species.name} />
          </ListItem>
        </Link>
      )
    }
  </List>
);
