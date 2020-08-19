import React from 'react';
import MainPanel from './Components/layout/MainPanel';
import Resume from './Components/info/Resume';
import AboutMe from './Components/info/AboutMe';
import Contact from './Components/info/Contact';
import './App.css';

class App extends React.Component {
  scrollToNode = node => {
    node.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <div className='App'>
        <nav className='navbar'>
          {/*<span style={textStyle}>SIDHARTHA SINGH</span>*/}
          <ul>
            <li onClick={() => this.scrollToNode(this.aboutme)}>
              <span>ABOUT ME</span>
            </li>
            <li>
              <span onClick={() => this.scrollToNode(this.resume)}>RÉSUME</span>
            </li>
            {/*<li>
              <span>PROJECTS</span>
            </li>*/}
            <li onClick={() => this.scrollToNode(this.contact)}>
              <span>CONTACT</span>
            </li>
          </ul>
        </nav>
        <MainPanel></MainPanel>
        <div ref={node => (this.aboutme = node)}>
          <AboutMe></AboutMe>
        </div>
        <div ref={node => (this.resume = node)}>
          <Resume></Resume>
        </div>
        <div ref={node => (this.contact = node)}>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default App;
