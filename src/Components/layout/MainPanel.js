import React from 'react';
import Typical from 'react-typical';
import ProfilePicture from '../profilePicture.png';

const MainPanel = () => {
  return (
    <div className='mainPanel' style={mainPanelStyle}>
      <img
        src={ProfilePicture}
        style={{ width: '15em' }}
        alt="I failed to load :'("
      ></img>
      <div className='typical_wrapper'>
        <Typical
          steps={[
            "> HI, I'M SIDHARTHA SINGH",
            4000,
            "> HI, I'M A DEVELOPER",
            4000,
            "> HI, I'M A CS STUDENT",
            4000,
            "> HI, I'M SIDHARTHA SINGH",
            4000,
          ]}
          loop={1}
        ></Typical>
      </div>
    </div>
  );
};

const mainPanelStyle = {
  background: '#f6f6f6',
  borderTop: '0.1em solid #d8d8d8',
  borderBottom: '0.1em solid #d8d8d8',
  textAlign: 'center',
  padding: '2em',
};

export default MainPanel;
