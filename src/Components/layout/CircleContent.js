import React from 'react';

const CircleContent = ({ icon, img, size }) => {
  return (
    <div className='container' style={iconContainer}>
      <i className={icon} style={circleStyle}></i>
    </div>
  );
};

CircleContent.defaultProps = {
  icon: 'fab fa-github fa-4x',
};

const circleStyle = {
  width: '50px',
};

const iconContainer = {
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
};

export default CircleContent;
