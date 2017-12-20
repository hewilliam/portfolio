import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Emblem extends Component {
    render () {
        return (
            <div>
                <Link to="/" className="emblem">W</Link>
            </div>
        )
    }
}