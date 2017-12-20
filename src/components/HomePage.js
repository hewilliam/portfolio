import React, { Component } from 'react';
import NavBar from './NavBar';

export default class HomePage extends Component {
  render() {
    return (
      <div className='screen'>
        <NavBar />
        <div className="col-md-6">
          <br/>
          <div className="name">WILLIAM <br/>HE</div><br/>
            <div className="description">Full Stack Developer. 
              <br/>Specializing in React.
              <br/><br/>A knack for scaling or optimizing front end architecture and building reactive and performant UIs.
          </div>
        </div>
      </div>
    );
  }
}
