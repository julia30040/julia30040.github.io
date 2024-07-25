// @flow
import React from 'react';
import radium from 'radium';
import LinkIcon from '../Element/LinkIcon.jsx';
import LineEffectLink from '../Element/LineEffectLink.jsx';

const styles = {
  wrapper: {
    padding: '16px 0 0 48px',
    '@media screen and (max-width: 767px)': {
      padding: 16,
    },
  },
  description: {
    color: '#fff',
    letterSpacing: 1,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  h2: {
    color: '#292723',
  },
};

function Info() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.h2}>I'm Julia, a front-end developer based in Taiwan.</h2>
      <p style={styles.description}>
        擅長 JavaScript 及 CSS 互動，讓生活變得更簡單更有趣。
      </p>
      <p style={styles.description}>
        興趣是打羽球、種植物、旅行，喜歡彈吉他唱歌，久久會<LineEffectLink href="https://www.instagram.com/ayu_guitarlife/">錄個 cover</LineEffectLink>，蒐集<LineEffectLink href="https://soundcloud.com/musicdiary_tw">生活中的聲音</LineEffectLink>。
      </p>
      <p style={styles.description}>
        育有一隻八字眉貓咪叫做畢魯，
        <br />
        歡迎追蹤 <LineEffectLink href="https://www.instagram.com/birucat4wo/">@birucat4wo</LineEffectLink> (๑•̀ㅂ•́)و✧
      </p>
      <p style={styles.description}>
        julia135793@gmail.com
      </p>
      <div style={styles.row}>
        <LinkIcon
          iconClass="fab fa-github"
          url="https://github.com/julia30040" />
        <LinkIcon
          iconClass="fab fa-codepen"
          url="https://codepen.io/julia135793/" />
      </div>
    </div>
  );
}

export default radium(Info);
