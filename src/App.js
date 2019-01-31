import React, { Component } from 'react';
import radium, { StyleRoot } from 'radium';
import MainBoard from './container/Home/HomePage.jsx';

const styles = {
  root: {
    height: '100vh',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot style={styles.root}>
        <MainBoard />
      </StyleRoot>
    );
  }
}

export default radium(App);
