// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  background: {
    width: 'calc(100% + 80px)',
    height: 'calc(100vh + 80px)',
    position: 'absolute',
    left: '-40px',
    top: '-40px',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 4.2s ease-out',
  }
};

type Props = {
  url: string,
};

class MovingBackground extends PureComponent<Props, State> {
  componentDidMount() {
    this.background.addEventListener('mousemove', (e) => this.move(e));
  }

  componentWillUnMount() {
    this.background.removeEventListener();
  }

  move(e) {
    const translateX =  (e.target.offsetWidth / 2 - e.clientX) * 0.05;
    const translateY =  (e.target.offsetHeight / 2 - e.clientY) * 0.05;

    e.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  render() {
    const { url } = this.props;

    return (
      <div style={styles.wrapper}>
        <div
          ref={ref => { this.background = ref; }}
          style={[
            styles.background,
            {
              backgroundImage: `url(${url})`
            },
          ]} />
      </div>
    );
  }
}

export default radium(MovingBackground);
