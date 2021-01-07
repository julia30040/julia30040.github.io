// @flow

import React, { Fragment, PureComponent } from 'react';
import radium from 'radium';
import _ from 'lodash';
import MouseEventHook from '../Element/MouseEventHook.jsx';
import LineEffectLink from '../Element/LineEffectLink.jsx';
import ProjectMedia from './ProjectMedia.jsx';
import {
  revealLeft as revealLeftAnimation,
  revealUp as revealUpAnimation,
} from '../../styles/reveal.js';

const fadeInKeyframes = radium.keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
}, 'fadeIn');

const styles = {
  project: {
    opacity: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContentL: 'flex-start',
    padding: 16,
    '@media screen and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  wrapper: {
    opacity: 0.8,
    transition: 'all .36s ease-out',
    ':hover': {
      opacity: 1,
      transform: 'translateY(-10px)'
    },
  },
  activedWrapper: {
    opacity: 1,
    ':hover': {
        transform: 'none',
    }
  },
  projectInfo: {
    width: 150,
  },
  coverWrapper: {
    width: '100%',
    height: 150,
    padding: 6,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
  linkWrapper: {
    marginTop: 8,
    display: 'inline-block',
    background: '#81b2e9',
    padding: '0px 4px',
    transition: 'transform .3s cubic-bezier(0.75, -1.27, 0.3, 2.33)',
    transformOrigin: 'left',
    ':hover': {
        transform: 'scaleX(1.3)',
    },
  },
  detailWrapper: {
    margin: '0 0 0 32px',
    padding: '15px 0 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media screen and (max-width: 767px)': {
      margin: '16px 0',
    },
  },
  description: {
    fontSize: 15,
    letterSpacing: 1,
    margin: '0 0 15px',
    color: '#fff',
    textShadow: '#3d606a 1px 1px'
  },
  tag: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#ffffff',
    margin: '0 0 16px',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: -44,
    border: 'none',
    backgroundColor: 'transparent',
    transform: 'rotate(.5turn)',
    color: 'transparent',
    transition: 'color .36s ease-out',
    ':hover': {
      color: '#ffffff',
    },
    animation: 'transform 0.6s ease-out',
    animationName: fadeInKeyframes,
    '@media screen and (max-width: 1024px)': {
      left: -26,
    },
    '@media screen and (max-width: 767px)': {
      top: 12,
      left: 16,
    },
  },
  backButtonText: {
    WebkitTextStroke: '1px #fff',
    fontSize: 32,
  },
  credit: {
      color: '#ffc14c',
      lineHeight: '1.57',
  },
  creditTitle: {
      fontSize: 18,
      fontWeight: 600,
  },
  creditLabel: {
    display: 'inline-block',
  },
  creditSeparator: {
    margin: '0 5px',  
  },
  creditValue: {
 
  },
};

class Project extends PureComponent {
  render() {
    const {
      project,
      animationDelay,
      isActived,
      onClickProject,
    } = this.props;

    return (
      <div
        style={[
          styles.project,
          revealLeftAnimation,
          {
            animationDelay,
            animationFillMode: 'forwards',
          },
        ]}>
        <div
          onClick={() => onClickProject(project.id)}
          style={[
            styles.wrapper,
            isActived && styles.activedWrapper,
          ]}>
          <MouseEventHook isWrapText={false} style={styles.projectInfo}>
            <div style={styles.coverWrapper}>
              <div
                style={[
                  styles.cover,
                  {
                    backgroundImage: `url(${project.cover.url || project.cover})`,
                    backgroundColor: project.cover.backgroundColor,
                  },
                ]}></div>
            </div>
            <h3 style={styles.title}>{project.title}</h3>
            <h5 style={styles.subtitle}>{project.subtitle}</h5>
            <h5 style={styles.subtitle}>{project.year}</h5>
            {isActived ? (
                <div style={styles.linkWrapper}>
                    {project.websiteLink ? (
                        <LineEffectLink href={project.websiteLink}>+ view website</LineEffectLink>
                    ) : null}
                    {project.appLink ? (
                        <LineEffectLink href={project.appLink}>+ view app</LineEffectLink>
                    ) : null}
                    {project.relatedLink ? (
                        <LineEffectLink href={project.relatedLink}>+ see more</LineEffectLink>
                    ) : null}
                </div>
            ) : null}
          </MouseEventHook>
        </div>
        {isActived ? (
          <div
            style={[
              styles.detailWrapper,
              revealUpAnimation,
            ]}>
              {project.description.split('\n').map((paragraph, index) => (
                <p
                  key={`description-${index}`}
                  style={styles.description}>
                  {paragraph}
                </p>
              ))}
              {project.tags && project.tags.length ? (
                <div style={styles.tag}>
                  {_.join(project.tags, '/ ')}
                </div>
              ) : null}
              {project.media ? (
                <ProjectMedia media={project.media} />
              ) : null}
              {project.credits ? (
                  <div style={styles.credit}>
                      <span style={styles.creditTitle}>Credits</span>
                      {project.credits.map((credit, index) => (
                          <div key={`credit-${index}`}>
                              <span style={styles.creditLabel}>{credit.label}</span>
                              <span style={styles.creditSeparator}>—</span>
                              <span style={styles.creditValue}>{credit.value}</span>
                          </div>
                      ))}
                  </div>
              ): null}
          </div>
        ) : null}
        {isActived ? (
          <MouseEventHook isWrapText={false}>
            <button
              style={styles.backButton}
              onClick={() => onClickProject(null)}>
              <span style={styles.backButtonText}>→</span>
            </button>
          </MouseEventHook>
        ) : null}
      </div>
    );
  }
}

export default radium(Project);
