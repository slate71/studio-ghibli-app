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
        props.categoryItems.map(species =>
          <Link key={species.id} to={`/species/${species.id}`}>
            <ListItem button>
              <ListItemText primary={species.name} />
            </ListItem>
          </Link>
        )
      }
    </List>
  </div>
);
