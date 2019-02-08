// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';

type Props = {
  children: {},
};

class MouseEventHook extends PureComponent<Props> {
  componentDidMount() {
    this.link.addEventListener('mouseenter', (e) => this.onMouseEnter(e));
    this.link.addEventListener('mouseout', (e) => this.onMouseOut(e));

    this.cursorMoon = document.getElementById("cursor-moon");
    this.cursorHalo = document.getElementById("cursor-halo");
  }

  componentWillUnMount() {
    this.link.removeEventListener('mouseenter');
    this.link.removeEventListener('mouseout');
  }

  onMouseEnter(e) {
    this.cursorHalo.classList.add("cursor-halo-active");
    this.cursorMoon.classList.add("cursor-moon-active");
    console.log('enter');
  }

  onMouseOut(e) {
    this.cursorHalo.classList.remove("cursor-halo-active");
    this.cursorMoon.classList.remove("cursor-moon-active");
    console.log('out');
  }

  render() {
    const { children } = this.props;

    return (
      <span ref={ref => { this.link = ref; }}>
      {children}
      </span>
    );
  }
}

export default radium(MouseEventHook);
