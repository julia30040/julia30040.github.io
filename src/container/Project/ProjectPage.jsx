// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import PageTitle from '../../component/Element/PageTitle.jsx';
import Projects from './Projects.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'scroll',
  },
  mainContainer: {
    maxWidth: 800,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    margin: '13vh 0 0',
    padding: 32,
    zIndex: 0,
    '@media screen and (max-width: 767px)': {
      alignItems: 'center',
      top: 0,
      margin: 0,
    },
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
