import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage'
import ProjectPage from './components/ProjectPage'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/project" component={ProjectPage}/>
                <Route path="/aboutme" component={AboutMePage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
