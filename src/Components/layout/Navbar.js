import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p style={textStyle}>SIDHARTHA SINGH</p>
    </nav>
  );
};

const textStyle = {
  textAlign: 'center',
  width: 'inherit',
  fontFamily: 'Alata',
  fontSize: '1.1rem',
  letterSpacing: '0.3em',
  fontWeight: 'bold',
};

export default Navbar;
