import React from 'react';

export const ResumeWorkHistory = ({ position, date, points, logo, bg }) => {
  return (
    <div
      className='WorkExperiencePosition'
      style={{ ...workExperiencePositionStyle, ...{ background: bg } }}
    >
      <h3 style={{ float: 'right' }}>{date}</h3>
      <h2>{position}</h2>
      <img src={logo} style={logoStyle} alt='Unable to load logo'></img>
      <div className='logoAndInfo'>
        <div id='points'>
          {points.map(point => (
            <p key={point}> • {point}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const workExperiencePositionStyle = {
  paddingLeft: '12em',
  paddingRight: '12em',
  paddingBottom: '0.5em',
  paddingTop: '0.5em',
  marginBottom: '1em',
};

const logoStyle = {
  width: '12em',
  float: 'left',
  marginRight: '2em',
  marginBottom: '5em',
};

export default ResumeWorkHistory;
