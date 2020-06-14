// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'inline-block',
  },
};

type Props = {
  children: {},
  isWrapText?: boolean,
  style?: ?{},
};

class MouseEventHook extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    if (window.screen.width > 1024) {
      this.link.addEventListener('mouseenter', this.onMouseEnter);
      this.link.addEventListener('mouseleave', this.onMouseLeave);

      this.cursorMoon = document.getElementById("cursor-moon");
      this.cursorHalo = document.getElementById("cursor-halo");
    }
  }

  componentWillUnmount() {
    if (this.link) {
      this.link.removeEventListener('mouseenter', this.onMouseEnter);
      this.link.removeEventListener('mouseout', this.onMouseLeave);
    }
  }

  onMouseEnter(e) {
    this.cursorHalo.classList.add("cursor-halo-active");
    this.cursorMoon.classList.add("cursor-moon-active");
  }

  onMouseLeave(e) {
    this.cursorHalo.classList.remove("cursor-halo-active");
    this.cursorMoon.classList.remove("cursor-moon-active");
  }

  render() {
    const {
      children,
      isWrapText,
      style,
    } = this.props;

    return isWrapText ? (
      <span
        ref={ref => { this.link = ref; }}
        style={style}>
        {children}
      </span>
    ) : (
      <div
        ref={ref => { this.link = ref; }}
        style={[
          styles.wrapper,
          style,
        ]}>
        {children}
      </div>
    );
  }
}

MouseEventHook.defaultProps = {
  isWrapText: true,
  style: null,
};

export default radium(MouseEventHook);
