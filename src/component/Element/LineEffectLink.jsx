// @flow

import React from 'react';
import radium from 'radium';
import { NavLink } from 'react-router-dom';

const styles = {
  wrapper: {
    position: 'relative',
  },
  navLink: {
    margin: '0 0 32px',
  },
  a: {
    color: '#9bd386',
    textDecoration: 'none',
    wordBreak: 'keep-all',
  },
};

type Props = {
  url: string,
  children: string,
  isNavLink?: boolean,
  to?: string,
};

function LineEffectLink({
  url,
  children,
  isNavLink,
  to,
}: Props) {
  return (
    <span style={styles.wrapper}>
      {isNavLink ? (
        <NavLink className="line-effect" to={to}>
          {children}
        </NavLink>
      ) : (
        <a style={styles.a} className="line-effect" href={url} target="blank">
          {children}
        </a>
      )}
    </span>
  );
}

LineEffectLink.defaultProps = {
  isNavLink: false,
  to: null,
};

export default radium(LineEffectLink);
