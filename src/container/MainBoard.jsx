// @flow
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Home/HomePage.jsx';
import AboutPage from './About/AboutPage.jsx';

class MainBoard extends PureComponent {
  render() {
    return (
      <Router>
        <Route exact path="/about" component={AboutPage} />
      </Router>
    );
  }
}

export default MainBoard;
