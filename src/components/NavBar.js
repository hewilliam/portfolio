import React, { Component } from 'react';
import Emblem from './Emblem';
import Nav from './Nav'


export default class NavBar extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <Emblem />
                <Nav />
            </div>
        )
    }
}