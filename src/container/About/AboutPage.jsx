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
    background: 'linear-gradient(#8f755e 95%, rgb(143, 117, 94) 95%)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mainContainer: {
    maxWidth: 800,
    padding: '48px 32px',
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
