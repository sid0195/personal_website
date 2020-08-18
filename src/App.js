import React from 'react';
import Navbar from './Components/layout/Navbar';
import MainPanel from './Components/MainPanel';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='panel' style={panelStyle}>
        <MainPanel></MainPanel>
      </div>
      <div className='about'></div>
    </div>
  );
}

const panelStyle = {
  background: '#858585',
  padding: '2rem',
};

export default App;
