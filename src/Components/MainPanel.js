import React from 'react';
import CircleContent from './layout/CircleContent';
import Typical from 'react-typical';

const MainPanel = () => {
  return (
    <div className='container'>
      <div className='typical_wrapper'>
        <Typical
          steps={[
            "> Hi, I'm Sidhartha",
            4000,
            "> Hi, I'm a developer",
            4000,
            "> Hi, I'm a CS student",
            4000,
          ]}
          loop={Infinity}
        ></Typical>
      </div>
      <div style={mainStyle}>
        <CircleContent icon='fab fa-github fa-5x'></CircleContent>
        <CircleContent icon='fa fa-user-circle-o fa-4x circle'></CircleContent>
        <CircleContent icon='fa fa-file-text-o fa-4x circle'></CircleContent>
        <CircleContent icon='fa fa-address-card-o fa-4x circle'></CircleContent>
      </div>
    </div>
  );
};

const mainStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '0rem',
  alignItems: 'center',
};

export default MainPanel;
