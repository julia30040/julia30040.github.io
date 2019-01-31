// @flow
import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    backgroundColor: '#8f755e',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class HomePage extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <a href="/">Julia Wang</a>
      </div>
    );
  }
}

export default HomePage;
