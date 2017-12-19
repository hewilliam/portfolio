import React, { Component } from 'react';
import Emblem from './Emblem';
import Nav from './Nav'

export default class ProjectPage extends Component {
    render () {
        return (
            <div>
                project page
                <Emblem />
                <Nav />
            </div>
        )
    }
}