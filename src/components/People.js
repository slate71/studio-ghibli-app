import React from 'react';
import { Link } from '../sagas/history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
  <List>
    {
      props.categoryItems.map(person =>
        <Link className='people__link' key={person.id} to={`/studio-ghibli-app/people/${person.id}`}>
          <ListItem button>
            <ListItemText className='people__list-item-text' primary={person.name} />
          </ListItem>
        </Link>
      )
    }
  </List>
);
