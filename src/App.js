import React, { Component } from 'react';
import debug from 'debug';
import radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './container/Header.jsx';
import MainBoard from './container/MainBoard.jsx';
import MovingBackground from './component/Element/MovingBackground.jsx';
import seaImage from './media/img/sea_2.JPG';

if (process.env.NODE_ENV !== 'production') {
  debug.enable('Portfolio:*');
}

const styles = {
  fullHeight: {
    height: '100%',
  },
  wrapper: {
    overflow: 'hidden',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot style={styles.fullHeight}>
        <Router>
          <div style={[
              styles.wrapper,
              styles.fullHeight,
            ]}>
            <MovingBackground url={seaImage} />
            <Header />
            <MainBoard />
          </div>
        </Router>
      </StyleRoot>
    );
  }
}

export default radium(App);
