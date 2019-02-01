// @flow
import React, { PureComponent } from 'react';
import LineEffectLink from '../component/Element/LineEffectLink.jsx';

const styles = {
  wrapper: {
    position: 'absolute',
    top: 32,
    left: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};

class Header extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <LineEffectLink isNavLink to="/about">
          About
        </LineEffectLink>
        <LineEffectLink isNavLink to="/projects">
          Projects
        </LineEffectLink>
      </div>
    );
  }
}

export default Header;
