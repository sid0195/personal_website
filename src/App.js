import React from 'react';
import Navbar from './Components/layout/Navbar';
import MainPanel from './Components/layout/MainPanel';
import BottomPanel from './Components/layout/BottomPanel';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <MainPanel></MainPanel>
      <BottomPanel></BottomPanel>
      <div className='about'></div>
    </div>
  );
}

export default App;
