// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import Project from '../../component/Project/Project.jsx';
import projects from '../../data/projects.js';
import { revealLeft as revealLeftAnimation } from '../../styles/reveal.js';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  project: {
    // opacity: 0,
  },
};

class Projects extends PureComponent <State> {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={[
              styles.project,
              {
                revealLeftAnimation,
                // animationDelay: `${index * 0.6}s`,
                // animationFillMode: 'forwards',
              },
            ]}>
            <Project project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default radium(Projects);
