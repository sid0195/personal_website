import React from 'react';
import ResumeWorkHistory from '../layout/ResumeWorkHistory';
import PlayStation from './sony.png';
import Hippos from './hippos.png';

export const Resume = () => {
  let Sony1Points = [
    'Assisted in the creation and implementation of a library to facilitate the usage of new APIs for client-side products.',
    'Implemented various bug fixes within the PlayStation 4 Store.',
    'Maintained various libraries to support the PlayStation 4 Store',
  ];

  let Sony2Points = [
    'Assisted in the smooth release of EA Access.',
    'Maintained and improved the automated testing framework while providing suggestions and improvements to be made for the next iteration.',
    'Developed various automated tests to ensure successful feature completion and bug fixes.',
  ];

  let HipposPoints = [
    'Developed a web portal for error logging using the MVC framework to ensure successful error tracking and debugging within 4 different company programs.',
    'Led a team of 3 to create automated testing for 3 different company programs using Coded UI Testing.',
    'Designed and created various features in 3 different flagship products to improve client satisfaction.',
  ];

  return (
    <div className='resume'>
      <h1 class='resumeHeading'>WORK EXPERIENCE</h1>
      <ResumeWorkHistory
        position='Software Developer Intern - Front End - Sony Interactive Entertainment'
        date='January 2020 - April 2020'
        points={Sony1Points}
        logo={PlayStation}
        bg='#fff'
      ></ResumeWorkHistory>
      <ResumeWorkHistory
        position='Software Developer in Test Intern – Sony Interactive Entertainment'
        date='May 2019 – August 2019'
        points={Sony2Points}
        logo={PlayStation}
        bg='#fff'
      ></ResumeWorkHistory>
      <ResumeWorkHistory
        position='Junior Developer – Hippos Software Inc.'
        date='July 2017 - October 2018'
        points={HipposPoints}
        logo={Hippos}
        bg='#fff'
      ></ResumeWorkHistory>
    </div>
  );
};

export default Resume;
