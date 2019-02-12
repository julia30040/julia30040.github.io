// @flow

import React, { PureComponent } from 'react';
import { Howl, Howler } from 'howler';
import MouseEventHook from './MouseEventHook.jsx';
import seaWaveSound from '../../media/sound/morning_sea_wave.mp3';

const styles = {
  volumeBtn: {
    position: 'fixed',
    right: 48,
    bottom: 32,
    color: '#fff',
    transition: 'all 0.36s ease-out',
    fontSize: 20,
    opacity: 0.7,
    width: 35,
    textAlign: 'left',
    ':hover': {
      opacity: 1,
      transform: 'scale(2)',
    },
  },
};

const INITIAL_SOUND_VOLUME = 0.3;

class OceanSoundController extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
    };
  }

  componentDidMount() {
    this.startSeaWaving();
  }

  startSeaWaving() {
    this.sound = new Howl({
      src: [seaWaveSound],
      autoplay: true,
      loop: true,
      volume: INITIAL_SOUND_VOLUME,
    });

    this.oceanSound = this.sound.play();
  }

  toggleSound() {
    const { isPlaying } = this.state;

    this.setState({ isPlaying: !isPlaying });

    if (isPlaying) {
      this.sound.fade(this.sound.volume(), 0, 1000, this.oceanSound);
    } else {
      this.sound.fade(this.sound.volume(), INITIAL_SOUND_VOLUME, 2000, this.oceanSound);
    }
  }

  render() {
    const { isPlaying } = this.state;

    return (
      <MouseEventHook isWrapText={false}>
        <button
          style={styles.volumeBtn}
          onClick={() => this.toggleSound()}>
          <i className={isPlaying ? "fas fa-volume-up" : "fas fa-volume-off"}></i>
        </button>
      </MouseEventHook>
    );
  }
}

export default OceanSoundController;
