import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/*<span style={textStyle}>SIDHARTHA SINGH</span>*/}
      <ul>
        <li>
          <a href='default.asp'>RÉSUME</a>
        </li>
        <li>
          <a href='default.asp'>PROJECTS</a>
        </li>
        <li>
          <a href='default.asp'>ABOUT ME</a>
        </li>
        <li>
          <a href='default.asp'>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

const textStyle = {
  textAlign: 'center',
  float: 'left',
  paddingLeft: '2em',
  fontFamily: 'Alata',
  fontSize: '1.1rem',
  letterSpacing: '0.3em',
  fontWeight: 'bold',
};

export default Navbar;
