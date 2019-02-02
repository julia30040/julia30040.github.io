// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import AboutPage from './About/AboutPage.jsx';

class MainBoard extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about/" component={AboutPage} />
        <Route exact path="/projects/" component={HomePage} />
      </Switch>
    );
  }
}

export default MainBoard;
