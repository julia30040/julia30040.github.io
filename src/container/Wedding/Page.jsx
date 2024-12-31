// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import ImageGallery from './ImageGallery'

import bgImageURL from './assets/paper-bg.jpg'
import coverImageURL from './assets/cover-2.jpg'
import coverTitleImageURL from './assets/cover-title.png'
import invitationTitleImageURL from './assets/invitation-title.png'
import ribbonsImageURL from './assets/ribbons.svg'
import flowerAnimationImageURL from './assets/flower-animation.gif'
import GallerySection from './GallerySection';
import HowToComeSection from './HowToComeSection';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    background: `url(${bgImageURL}) repeat center`,
  },
  mainContainer: {
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    margin: '32px auto',
    zIndex: 0,
    '@media screen and (max-width: 767px)': {
      margin: '32px 16px'
    },
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  coverWrapper: {
    position: 'relative',
  },
  cover: {
    width: '100%',
    maxWidth: 766,
    borderRadius: 8,
  },
  coverTitle: {
    position: 'absolute',
    bottom: 4,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 382,
  },
  invitation: {
    position: 'relative',
    margin: '32px 0',
    width: '100%',
    padding: '32px 24px',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  invitationTitle: {
    width: 167,
    display: 'block',
    margin: '0 auto',
  },
  invitationDescription: {
    margin: '24px 0 0',
    color: '#6B6762',
    fontSize: 16,
    lineHeight: 1.5,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  invitationName: {
    color: '#B2968D',
    textAlign: 'center',
  },
  invitationDeco: {
    position: 'absolute',
    top: -46,
    left: '50%',
    transform: 'translateX(-50%)',
    userSelect: 'none',
    pointerEvents: 'none',
    opacity: 0.4,
  },
  flowerAnimationImage: {
    width: 163,
  },
  footer: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    margin: '16px 0',
  }
};

class WeddingPage extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.mainContainer}>
          <div style={styles.coverWrapper}>
            <img style={styles.cover} src={coverImageURL} />
            <img style={styles.coverTitle} src={coverTitleImageURL} />
          </div>
          <div style={styles.invitation}>
            <img style={styles.invitationTitle} src={invitationTitleImageURL} />
            <p style={styles.invitationDescription}>
              親愛的, 謝謝您打開這份邀請函。<br/>
              誠摯的邀請您前來參加我們的婚禮派對🎊<br/>
              <br/>
              西餐x草原x祝福<br/>
              期待看到你們 ❤️ OXOX<br/>
              <br/>
              -下滑看詳細資訊-<br/>
            </p>
            <p style={styles.invitationName}>Jay & Jane</p>
            <img style={styles.invitationDeco} src={ribbonsImageURL} />
          </div>
          <img src={flowerAnimationImageURL} style={styles.flowerAnimationImage} />
          <GallerySection />
          <HowToComeSection />
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2Q_Zczeh7DTeOn3Lqhdl2ZHKvsDQy_W_tbK0dIff-6Bp2mg/viewform?embedded=true" width="100%" height="3000" frameborder="0" marginheight="0" marginwidth="0">載入中，請稍等</iframe>
        <footer style={styles.footer}>made by love © 2024 julia4wo.com</footer>
      </div>
    );
  }
}

export default radium(WeddingPage);
