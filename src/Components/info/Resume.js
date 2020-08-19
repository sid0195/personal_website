import React from 'react';
import ResumeWorkHistory from '../layout/ResumeSection';
import PlayStation from './img/sony.png';
import Hippos from './img/hippos.png';
import UW from './img/uw.png';

export const Resume = () => {
  const Sony1Points = [
    'Assisted in the creation and implementation of a library to facilitate the usage of new APIs for client-side products.',
    'Implemented various bug fixes within the PlayStation 4 Store.',
    'Maintained various libraries to support the PlayStation 4 Store',
  ];

  const Sony2Points = [
    'Assisted in the smooth release of EA Access.',
    'Maintained and improved the automated testing framework while providing suggestions and improvements to be made for the next iteration.',
    'Developed various automated tests to ensure successful feature completion and bug fixes.',
  ];

  const HipposPoints = [
    'Developed a web portal for error logging using the MVC framework to ensure successful error tracking and debugging within 4 different company programs.',
    'Designed and created various features in 3 different flagship products to improve client satisfaction.',
    'Led a team of 3 to create automated testing for 3 different company programs using Coded UI Testing.',
  ];

  const UWPoints = [
    "Obtained President's Scholarship for maintaining a 90% admission average.",
  ];

  const UWRelevantCourses = [
    'CS 135 - Designing Functional Programs',
    'CS 136 - Elementary Algorithm Design and Data Abstraction',
    'CS 245 - Logic and Computation',
    'CS 246 - Object-Oriented Software Development',
    'CS 240 - Data Structures and Data Management',
    'CS 241 - Foundations of Sequential Programs',
    'CS 251 - Computer Organization and Design',
  ];

  return (
    <div id='resume'>
      <h1 className='header'>RÉSUME</h1>
      <div className='resume resumeWorkExperience'>
        <h1 className='resumeHeading'>WORK EXPERIENCE</h1>
        <ResumeWorkHistory
          position='Software Developer Intern - Front End - Sony Interactive Entertainment'
          date='January 2020 - April 2020'
          points={Sony1Points}
          logo={PlayStation}
        ></ResumeWorkHistory>
        <ResumeWorkHistory
          position='Software Developer in Test Intern – Sony Interactive Entertainment'
          date='May 2019 – August 2019'
          points={Sony2Points}
          logo={PlayStation}
        ></ResumeWorkHistory>
        <ResumeWorkHistory
          position='Junior Developer – Hippos Software Inc.'
          date='July 2017 - October 2018'
          points={HipposPoints}
          logo={Hippos}
        ></ResumeWorkHistory>
      </div>
      <div className='resume resumeEducation'>
        <h1 className='resumeHeading'>EDUCATION</h1>
        <ResumeWorkHistory
          position='Candidate for Bachelor of Computer Science'
          date='September 2018 - Present'
          subtext='University of Waterloo \ Current Cumulative Average: 85%'
          points={UWPoints}
          logo={UW}
          listingName='Relevant Courses'
          listingInfo={UWRelevantCourses}
        ></ResumeWorkHistory>
      </div>
    </div>
  );
};

export default Resume;
