import React, { Component } from 'react';
import NavBar from './NavBar';

export default class HomePage extends Component {

  componentWillMount() {
    document.body.style.backgroundImage = `url('../asset/homepage1.jpg')`;
    document.body.style.backgroundPosition = 'center center'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }


  render() {
    return (

      <div className='screen'>
        <NavBar />
        <div className="col-md-6">
          <br />
          <div className="name">WILLIAM <br />HE</div><br />
          <div className="description">Full Stack Developer.
              <br />Specializing in React.
              <br /><br />A knack for scaling or optimizing front end <br/>architecture and building reactive and performant UIs.
          </div>
        </div>
      </div>
    );
  }
}
