import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.div}>
      <span className={classes.span}>
        <Link to='/'>main</Link>
      </span>
      <span className={classes.span}>
        <Link to='/login'>login</Link>
      </span>
      <span className={classes.span}>
        <Link to='/register'>register</Link>
      </span>
      <span className={classes.span}>
        <Link to='/test'>test</Link>
      </span>
    </div>
  );
}

export default Header;
