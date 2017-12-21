import React, { Component } from 'react';
import NavBar from './NavBar';
import Project from './Project'

export default class ProjectPage extends Component {

    componentWillMount() {
        document.body.style.backgroundColor = '#5a5c51';
      }
    
      componentWillUnmount() {
        document.body.style.backgroundColor = null;
      }

    render () {
        return (
            <div className='screen'>
                <NavBar />
                <div>Projects</div>
                    <Project />
            </div>
        )
    }
}