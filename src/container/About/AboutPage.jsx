// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import PageTitle from '../../component/Element/PageTitle.jsx';
import Avatar from '../../component/About/Avatar.jsx';
import Info from '../../component/About/Info.jsx';
import MonsteraDeliciousa from '../../component/Element/MonsteraDeliciousa.jsx';
import MovingBackground from '../../component/Element/MovingBackground.jsx';
import { revealUp as revealUpAnimation } from '../../styles/reveal.js';
import seaImage from '../../img/sea_2.JPG';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    maxWidth: 800,
    position: 'relative',
    top: -48,
    padding: 32,
    zIndex: 0,
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};

class AboutPage extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <MovingBackground url={seaImage} />
        <div style={styles.mainContainer}>
          <PageTitle>About</PageTitle>
          <div style={[
              styles.row,
              revealUpAnimation,
            ]}>
            <Avatar />
            <Info />
          </div>
        </div>
        <MonsteraDeliciousa />
      </div>
    );
  }
}

export default radium(AboutPage);
