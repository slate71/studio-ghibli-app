import React from 'react';
import { Link } from '../sagas/history';

const StudioGhibliLogo = props => (
  <Link to='/studio-ghibli-app'>
    <img src={props.url} style={{ height: '100%' }} alt={props.alt} />
  </Link>
);

StudioGhibliLogo.defaultProps = {
  url: 'https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png',
  alt: 'Studio Ghibli Logo'
};

export default StudioGhibliLogo;
