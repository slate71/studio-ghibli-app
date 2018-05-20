import React from 'react';
import { Link } from '../sagas/history';
// import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <div>
    <h1>{props.currentCategory}</h1>
    <List>
      {
        props.categoryItems.map(film =>
          <Link key={film.id} to={`/films/${film.id}`}>
            <ListItem button>
              <ListItemText primary={film.title} />
            </ListItem>
          </Link>
        )
      }
    </List>
  </div>
);
