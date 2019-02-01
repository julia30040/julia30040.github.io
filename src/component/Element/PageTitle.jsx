// @flow
import React from 'react';
import radium from 'radium';

type Props = {
  children: string,
  color: string,
};

const styles = {
  title: {
    transition: 'all 0.24s ease-in',
    WebkitTextStroke: '1px #ffffff',
    fontSize: 176,
    margin: 0,
    ':hover': {
      color: '#ffffff',
    },
  },
};

function PageTitle({
  children,
  color,
}: Props) {
  return (
    <h1 style={[
        styles.title, {
          color,
        },
      ]}>
      {children}
    </h1>
  );
}

PageTitle.defaultProps = {
  color: 'transparent',
}

export default radium(PageTitle);
