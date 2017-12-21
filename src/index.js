import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import reducers from './reducers';
import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage'
import ProjectPage from './components/ProjectPage'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/project" component={ProjectPage} />
                        <Route path="/aboutme" component={AboutMePage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
    , document.querySelector('.container'));
