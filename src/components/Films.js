import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <List component='nav'>
    {
      props.categoryItems.map(film =>
        <Link className='films__link' key={film.id} to={`/films/${film.id}`}>
          <ListItem className='films__list-item' button>
            <ListItemText className='films__list-item-text' primary={film.title} />
          </ListItem>
        </Link>
      )
    }
  </List>
);
