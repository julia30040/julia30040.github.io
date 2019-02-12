// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import PageTitle from '../../component/Element/PageTitle.jsx';
import Avatar from '../../component/About/Avatar.jsx';
import Info from '../../component/About/Info.jsx';
import MonsteraDeliciousa from '../../component/Element/MonsteraDeliciousa.jsx';
import { revealUp as revealUpAnimation } from '../../styles/reveal.js';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflowY: 'scroll',
  },
  mainContainer: {
    maxWidth: 800,
    padding: 32,
    margin: '10vh 0 0',
    zIndex: 0,
    '@media screen and (max-width: 767px)': {
      top: 0,
      height: '100%',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media screen and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
};

class AboutPage extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.mainContainer}>
          <PageTitle>About</PageTitle>
          <div style={[
              styles.row,
              revealUpAnimation,
            ]}>
            <Avatar />
            <Info />
          </div>
          <MonsteraDeliciousa />
        </div>
      </div>
    );
  }
}

export default radium(AboutPage);
