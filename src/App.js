import React, { Component } from 'react';
import radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './container/Header.jsx';
import MainBoard from './container/MainBoard.jsx';
import MovingBackground from './component/Element/MovingBackground.jsx';
import seaImage from './media/img/sea_2.JPG';

const styles = {
  fullHeight: {
    height: '100%',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot style={styles.fullHeight}>
        <Router>
          <div style={styles.fullHeight}>
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
