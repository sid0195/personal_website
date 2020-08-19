import React from 'react';

export const ResumeSection = ({
  position,
  date,
  points,
  logo,
  subtext,
  listingName,
  listingInfo,
}) => {
  return (
    <div className='resumeSection'>
      <p style={{ float: 'right' }}>{date}</p>
      <h3 style={{ letterSpacing: '0.1em' }}>{position}</h3>
      {subtext ? <h3 className='sectionSubText'>{subtext}</h3> : null}
      <div className='logoAndInfo'>
        <img
          src={logo}
          className='hideIfNecessary'
          style={logoStyle}
          alt='Unable to load logo'
        ></img>
        <div id='points'>
          {points.map(point => (
            <p key={point}> • {point}</p>
          ))}
          {listingName ? (
            <div className='listing'>
              <p> • {listingName}: </p>
              <ul>
                {listingInfo.map(list => (
                  <li key={list}>{list} </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const logoStyle = {
  width: '12em',
  marginRight: '2em',
  alignSelf: 'center',
  borderRadius: '0.5em',
};

export default ResumeSection;
