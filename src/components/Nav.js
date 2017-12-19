import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
                    <MenuItem primaryText="About Me" containerElement={<Link to="/aboutme" />}/>
                    <MenuItem primaryText="Projects" containerElement={<Link to="/project" />}/>
                </IconMenu>
            </div>
        )
    }
}
