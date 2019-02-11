// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import _ from 'lodash';
import MouseEventHook from '../Element/MouseEventHook.jsx';
import LineEffectLink from '../Element/LineEffectLink.jsx';
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
  detailWrapper: {
    margin: '0 0 0 32px',
    '@media screen and (max-width: 767px)': {
      margin: 0,
    },
  },
  description: {
    fontSize: 15,
    letterSpacing: 1,
    color: '#e3d5b2',
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
  isActived: {
    opacity: 1,
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
            isActived && styles.isActived,
          ]}>
          <MouseEventHook isWrapText={false}>
              <div
                style={[
                  styles.cover,
                  {
                    backgroundImage: `url(${project.cover})`
                  },
                ]} />
              <h3 style={styles.title}>{project.title}</h3>
              <h5 style={styles.subtitle}>{project.subtitle}</h5>
            <h5 style={styles.subtitle}>{project.year}</h5>
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
              {project.link ? (
                <LineEffectLink href={project.link}>+ see more</LineEffectLink>
              ) : null}
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
