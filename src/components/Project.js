import React, { Component } from 'react';
import _ from 'lodash';

const projects = [
    {"project": 'React Sight', 'pic': './asset/reactsight.jpg', "link": "http://www.reactsight.com"},
    {"project": 'Studio Ghibli', 'pic': './asset/studio.jpg', "link": "https://hewilliam.github.io/studioGhibliMovies/"},
    {"project": 'Golden State Lookup', 'pic': './asset/golden.jpg', "link": "https://github.com/hewilliam/goldenStateLookUp"},
    {"project": 'Mother Nature', 'pic': './asset/mother.jpg', "link": "https://github.com/hewilliam/motherNature"},
    {"project": 'Typeof', 'pic': './asset/type.jpg', "link": "https://github.com/CodeBlock2/CodeBlock2"},
]

export default class Project extends Component {

    renderProjects () { //used lodash to map on a OBJECT

        return _.map(projects, project => {
            return (

                <a key={project.project} href={project.link}>
                    {project.project}
                    <img src={project.pic}/>
                </a>




            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProjects()}
            </div>
        )
    }
} 