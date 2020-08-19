import React, { Component } from 'react';
import Resume from '../info/Resume';

export class BottomPanel extends Component {
  state = {
    selected: 'resume',
  };

  updateSelection = e => {
    this.setState({ selected: e.target.id });
  };

  render() {
    let infoToLoad;
    if (this.state.selected === 'resume') {
      infoToLoad = <Resume></Resume>;
    }
    return (
      <div className='bottomContainer'>
        <div className='bottomPanel' style={bottomPanelStyle}>
          <div className='bottomNavigator' style={bottomNavGrid}>
            <p
              id='about'
              className={`bottomSelector bottomResume${
                this.state.selected === 'about' ? 'Selected' : ''
              }`}
              onClick={this.updateSelection}
            >
              ABOUT ME
            </p>
            <p
              id='resume'
              className={`bottomSelector bottomResume${
                this.state.selected === 'resume' ? 'Selected' : ''
              }`}
              onClick={this.updateSelection}
            >
              RESUME
            </p>
            <p
              id='contact'
              className={`bottomSelector bottomContact${
                this.state.selected === 'contact' ? 'Selected' : ''
              }`}
              onClick={this.updateSelection}
            >
              CONTACT
            </p>
            <p
              id='proj'
              className={`bottomSelector bottomProj${
                this.state.selected === 'proj' ? 'Selected' : ''
              }`}
              onClick={this.updateSelection}
            >
              PROJECTS
            </p>
          </div>
        </div>
        {infoToLoad}
      </div>
    );
  }
}

const bottomPanelStyle = {
  borderBottom: '0.1em solid #d8d8d8',
  fontSize: '1.3em',
};

const bottomNavGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
};

export default BottomPanel;
