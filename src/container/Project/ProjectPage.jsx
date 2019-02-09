// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import PageTitle from '../../component/Element/PageTitle.jsx';
import Projects from './Projects.jsx';
import Avatar from '../../component/About/Avatar.jsx';
import Info from '../../component/About/Info.jsx';
import { revealLeft as revealLeftAnimation } from '../../styles/reveal.js';

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

class ProjectPage extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.mainContainer}>
          <PageTitle>Project</PageTitle>
          <Projects />
        </div>
      </div>
    );
  }
}

export default radium(ProjectPage);
