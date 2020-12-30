import React from 'react';
import Link from './link';

const Header =()=>{
return(
  <div className="ui secondary pointing menu">
      <Link className="item" href="/">
        Acordio 
      </Link>

      <Link  className="item" href="/list">
        Search
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link >
      <Link  className="item" href="/dropdown">
        DropDown
      </Link >

  </div>
);

};


export default Header;