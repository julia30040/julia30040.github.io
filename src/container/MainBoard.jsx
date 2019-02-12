// @flow
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import AboutPage from './About/AboutPage.jsx';
import ProjectPage from './Project/ProjectPage.jsx';
import OceanSoundController from '../component/Element/OceanSoundController.jsx';

class MainBoard extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/about/" component={AboutPage} />
          <Route exact path="/projects/" component={ProjectPage} />
          <Route exact path="/projects/" component={HomePage} />
        </Switch>
        <OceanSoundController />
      </Fragment>
    );
  }
}

export default MainBoard;
