import React, { Component } from 'react';
import Emblem from './Emblem';
import Nav from './Nav'

export default class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
      <div className="row">
        <Emblem />
        <Nav />
      </div>
        <div className="col-sm-6">
          <div className="name">WILLIAM HE</div>
            <div className="description">Full Stack Developer. 
              <br/>Specializing in React.
              A knack for scaling or optimizing front end architecture and building reactive and performant UIs.
          </div>
        </div>
      </div>
    );
  }
}
