import React from 'react';

export const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='header'>CONTACT</h1>
      <div className='contact'>
        <a href='mailto: 42sidharthasingh@gmail.com'>
          <i className='fa fa-envelope fa-5x contactIcon'></i>
          <p>s464singh@uwaterloo.ca</p>
        </a>
        <a href='https://github.com/sid0195'>
          <i className='fa fa-github fa-5x contactIcon'></i>
          <p>sid0195</p>
        </a>
        <a href=''>
          <i className='fa fa-linkedin fa-5x contactIcon'></i>
          <p>Sidhartha Singh</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
