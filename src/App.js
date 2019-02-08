import React, { Component } from 'react';
import radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './container/Header.jsx';
import MainBoard from './container/MainBoard.jsx';

const styles = {
  root: {
    height: '100vh',
    minHeight: 728,
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Router>
          <div style={styles.root}>
            <Header />
            <MainBoard />
          </div>
        </Router>
      </StyleRoot>
    );
  }
}

export default radium(App);