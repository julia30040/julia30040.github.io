// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import avatarImage from '../../img/avatar.png';

const styles = {
  wrapper: {
    width: 300,
    height: 300,
    backgroundSize: 'cover',
    borderRadius: '50%',
    flexShrink: 0,
  },
};

class Avatar extends PureComponent {
  render() {
    return (
      <div style={[
          styles.wrapper,
          {
            backgroundImage: `url(${avatarImage})`,
          },
        ]}>
      </div>
    );
  }
}

export default radium(Avatar);
