// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import Project from '../../component/Project/Project.jsx';
import projects from '../../data/projects.js';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    overflowX: 'visible',
    '@media screen and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
};

class Projects extends PureComponent <State> {
  constructor(props) {
    super(props);

    this.state = {
      activedProjectId: null,
    }
  }

  render() {
    const { activedProjectId } = this.state;
    return (
      <div style={styles.wrapper}>
        {projects.map((p, pIndex) => {
            return {
                ...p,
                id: pIndex + 1,
            }
        }).map((project, index) => {
          if (activedProjectId !== null && activedProjectId !== project.id) return null;

          return (
            <Project
              key={`project-${index}`}
              project={project}
              isActived={project.id === activedProjectId}
              onClickProject={projectId => this.setState({ activedProjectId: projectId }) }
              animationDelay={`${index * 0.25}s`} />
          );
        })}
      </div>
    );
  }
}

export default radium(Projects);
