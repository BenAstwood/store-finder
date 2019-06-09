import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../Button/Button';
import './Header.css';

const Header = props => {
  return (
    <header className='header'>
      <h1 className='header__title'>Store Finder</h1>
      {props.navigateTo
        ? <Link to={props.navigateTo}><Button text={'Find another store'}/></Link>
        : ''}
    </header>
  )
};

export default Header;