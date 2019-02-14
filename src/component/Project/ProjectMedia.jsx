// @flow
import React from 'react';
import radium from 'radium';
import MouseEventHook from '../Element/MouseEventHook.jsx';

const styles = {
  wrapper: {
    height: 100,
    width: 'auto',
    padding: '10px 8px',
    margin: '0 0 12px',
    transition: 'all .32s ease-out',
    zIndex: 1000,
    position: 'relative',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    ':focus': {
      padding: '10px 32px',
      backgroundColor: '#395443',
      transform: 'scale(3.2) translateY(-20px)',
      clipPath: 'polygon(0 0, 100% 0, 93% 100%, 7% 100%)',
    },
    '@media screen and (max-width: 767px)': {
      width: '100%',
      height: 'auto',
      padding: '0',
      ':hover': {
        backgroundColor: 'transparent',
      },
      ':focus': {
        padding: '0',
        backgroundColor: 'transparent',
        transform: 'none',
        position: 'relative',
        clipPath: 'none',
      },
    },
  },
  media: {
    height: '100%',
    margin: '0 6px',
    boxShadow: '2px 2px 0px 0px rgba(128, 128, 128, 0.5)',
    '@media screen and (max-width: 767px)': {
      maxWidth: 335,
      width: '100%',
      height: 'auto',
      margin: '0 0 8px',
    },
  },
};

type ProjectMediaType = {
  type: string,
  url: string,
};

type Props = {
  media: array<ProjectMediaType>,
}

function ProjectMedia({
  media
}: Props){
  return (
    <MouseEventHook isWrapText={false}>
      <button
        style={styles.wrapper}>
        {media.map((mediaItem, index) => mediaItem.type === 'PHOTO' ? (
          <img
            key={`media-${mediaItem.url}-${index}`}
            src={mediaItem.url}
            alt="projectMedia"
            style={styles.media} />
        ) : null)}
      </button>
    </MouseEventHook>
  );
}

export default radium(ProjectMedia);
