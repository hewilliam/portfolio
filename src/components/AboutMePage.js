import React, { Component } from 'react';
import NavBar from './NavBar';

export default class AboutMePage extends Component {
    
    componentWillMount() {
        document.body.style.backgroundColor = '#5a5c51';
      }
    
      componentWillUnmount() {
        document.body.style.backgroundColor = null;
      }


    render() {
        return (
            <div className='screen'>
                <NavBar />
                <div></div>
            </div>
        )
    }
}