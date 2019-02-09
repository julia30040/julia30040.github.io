// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import MouseEventHook from '../Element/MouseEventHook.jsx';

const styles = {
  wrapper: {
    padding: 16,
    opacity: 0.8,
  },
  cover: {
    width: 150,
    height: 150,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    color: '#ffffff',
    letterSpacing: 1,
    margin: '.7em 0 .2em',

  },
  subtitle: {
    color: '#eaeaea',
    fontSize: 13,
    letterSpacing: 1,
    margin: 0,
  },
};

class Project extends PureComponent {
  render() {
    const { project } = this.props;

    return (
      <MouseEventHook isWrapText={false}>
        <div style={styles.wrapper}>
          <div
            style={[
              styles.cover,
              {
                backgroundImage: `url(${project.cover})`
              },
            ]} />
          <h3 style={styles.title}>{project.title}</h3>
          <h5 style={styles.subtitle}>{project.subtitle}</h5>
        </div>
      </MouseEventHook>
    );
  }
}

export default radium(Project);
